import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import statesInUS from '../../statesInUS.json';
import MainLayout from '../../components/layout/layout';

const StatePage = ({ parks, error }) => {
  const router = useRouter();
  const stateName = router.query.stateCode;

  return (
    <MainLayout>
      <div className='container'>
        <div className="state-header">
          <h1>{`Weather for ${stateName} Parks`}</h1>
        </div>
        <div className="parks-container">
          {parks?.map((park) => (
            <Link key={park.id} href={`/park/${park.id}`} passHref>
              <button className="park-card">
                <Image
                  src={park.images[0].url}
                  alt={park.images[0].altText}
                  width={270}
                  height={180}
                  layout="responsive"
                  objectFit="cover"
                />
                <h2>{park.fullName}</h2>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  try {
    const stateCode = context.params?.stateCode;

    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&fields=images,activities`,
      {
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_NPS_API_KEY || '',
        },
      }
    );

    const data = await response.json();

    const justWhatWeNeed = data.data.map((park) => {
      return {
        id: park.id,
        fullName: park.fullName,
        description: park.description,
        latitude: park.latitude,
        longitude: park.longitude,
        images: park.images,
      };
    });

    return {
      props: {
        parks: justWhatWeNeed,
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
};

export async function getStaticPaths() {
  const paths = statesInUS.map((state) => {
    return {
      params: {
        stateCode: state.abbreviation,
      },
    };
  });

  return {
    paths,
    fallback: false,
  }
}

export default StatePage;
