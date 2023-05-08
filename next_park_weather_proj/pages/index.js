import React, {
  useState
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import statesInUS from '../statesInUS.json';
import MainLayout from '../components/layout/layout';


export default function Home() {
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  const getStateName = (abbreviation) => {
    const foundState = statesInUS.find((state) => state.abbreviation === abbreviation);
    return foundState ? foundState.name : '';
  };

  return ( <
      MainLayout >
      <
      div className = {
        styles.container
      } >
      <
      div className = {
        styles.imageContainer
      } >
      <
      Image src = "https://www.jetsetter.com//uploads/sites/7/2019/05/Best-US-National-Parks-1380x690.jpg"
      alt = "US National Parks"
      width = {
        1380
      }
      height = {
        690
      }
      /> < /
      div > <
      div className = 'container' >
      <
      h1 className = {
        styles.title
      } > Welcome to TrailWeather < /h1> <
      h3 className = {
        styles.subtitle
      } >
      Select a state from the dropdown menu below and click "Search".Then click on the park whose weather you want to monitor. <
      /h3> <
      div className = {
        styles.searchContainer
      } >
      <
      label htmlFor = "state-select"
      className = {
        styles.searchLabel
      } >
      Select a state:
      <
      /label> <
      select id = "state-select"
      value = {
        selectedState
      }
      onChange = {
        handleChange
      }
      className = {
        styles.searchSelect
      } >
      <
      option value = "" > --Select a state-- < /option> {
      statesInUS.map((state) => ( <
        option key = {
          state.abbreviation
        }
        value = {
          state.abbreviation
        } > {
          state.name
        } <
        /option>
      ))
    } <
    /select> {!!selectedState && ( <
      Link href = {
        `/state/${selectedState}?stateName=${encodeURIComponent(getStateName(selectedState))}`
      }
      passHref >
      <
      button className = {
        styles.searchLink
      } > View Parks
      for {
        selectedState
      } < /button> < /
      Link >
    )
} <
/div> < /
div > <
  /div> < /
  MainLayout >
);
}