import React from 'react'
import {AllDrops, Hero, LatestDrop, Policy, NewsletterBox} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestDrop />
      <AllDrops />
      <Policy />
      <NewsletterBox />
    </div>
  )
}

export {Home};