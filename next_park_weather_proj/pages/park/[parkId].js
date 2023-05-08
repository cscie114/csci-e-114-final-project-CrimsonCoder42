import React, {
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import styles from '../../styles/ParkPage.module.css';
import MainLayout from '../../components/layout/layout';

const ParkPage = ({
  park,
  weather,
  error
}) => {
  const router = useRouter();
  const parkId = router.query.parkId;

  if (router.isFallback) {
    return <div > Loading... < /div>;
  }

  if (error) {
    alert("Unable to get information, please try again");
    return null;
  }

  const {
    periods
  } = weather.properties;

  const groupedPeriods = periods.reduce((acc, period) => {
    const currentDay = acc.length ? acc[acc.length - 1] : null;

    if (currentDay && currentDay.date === period.startTime.slice(0, 10)) {
      currentDay.periods.push(period);
    } else {
      acc.push({
        date: period.startTime.slice(0, 10),
        periods: [period],
      });
    }

    return acc;
  }, []);

  const [currentPeriods, setCurrentPeriods] = useState(Array(groupedPeriods.length).fill('day'));

  const togglePeriod = (index) => {
    const newCurrentPeriods = [...currentPeriods];
    newCurrentPeriods[index] = currentPeriods[index] === 'day' ? 'night' : 'day';
    setCurrentPeriods(newCurrentPeriods);
  };

  return ( <
      MainLayout >
      <
      div className = 'container' >
      <
      div className = {
        styles['state-header']
      } >
      <
      h1 > {
        park.fullName
      } < /h1> < /
      div > <
      p > {
        park.description
      } < /p> <
      div className = {
        styles['weather-header']
      } >
      <
      h2 > Weather < /h2> < /
      div > <
      div className = {
        styles['weather-container']
      } > {
        groupedPeriods.map((day, index) => ( <
            div key = {
              index
            }
            className = {
              styles['weather-card']
            } >
            <
            h3 > {
              day.date.slice(5)
            } < /h3> <
            button onClick = {
              () => togglePeriod(index)
            } > {
              currentPeriods[index] === 'day' ? 'See Night Time' : 'See Day Time'
            } <
            /button> {
            day.periods
            .filter(period => (currentPeriods[index] === 'day' ? period.isDaytime : !period.isDaytime))
            .map(period => ( <
              div key = {
                period.number
              } >
              <
              h4 > {
                period.name
              } < /h4> <
              img src = {
                period.icon
              }
              alt = {
                period.shortForecast
              }
              /> <
              p > Temp: {
                period.temperature
              } {
                period.temperatureUnit
              } < /p> <
              p > Wind: {
                period.windSpeed
              }, {
                period.windDirection
              } < /p> <
              p > Chance of precip: {
                period.probabilityOfPrecipitation.value
              } % < /p> <
              p > {
                period.shortForecast
              } < /p> < /
              div >
            ))
          } <
          /div>
        ))
    } <
    /div> < /
    div > <
    /MainLayout>
);
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({
  params
}) {
  try {
    const parkId = params.parkId;

    const parkResponse = await fetch(
      `https://developer.nps.gov/api/v1/parks?id=${parkId}&fields=images,activities`, {
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_NPS_API_KEY || '',
        },
      }
    );

    const parkData = await parkResponse.json();
    const park = parkData.data[0];

    const latitude = park.latitude;
    const longitude = park.longitude;

    const weatherResponse = await fetch(
      `https://api.weather.gov/points/${latitude},${longitude}`, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'weathertrail.com, nostro37@gmail.com',
        },
      }
    );

    const weatherData = await weatherResponse.json();
    const forecastApi = weatherData.properties.forecast;
    const forecastResponse = await fetch(forecastApi);
    const forecastData = await forecastResponse.json();

    return {
      props: {
        park,
        weather: forecastData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: true,
      },
    };
  }
}

export default ParkPage;