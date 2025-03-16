import React from 'react'
import {AllDrops, Hero, LatestDrop, Policy} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestDrop />
      <AllDrops />
      <Policy />
    </div>
  )
}

export {Home};