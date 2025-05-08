import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Province } from '../components/Province';
import { Stats } from '../components/Stats';

import stats from '../data/indonesia';
import data from '../data/provinces';

import type { ProvinceInterface, StatsInterface } from '../utils/interfaces';

export const Home = () => {
  const [indonesia] = useState<StatsInterface>(stats)
  const [provinces, setProvinces] = useState<ProvinceInterface>(data)

  return (
    <div>
      <div id='hero' className='bg-white'>
        <Navbar />
        <Hero />
      </div>

      <Stats stats={indonesia} />
      <Province provinces={provinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </div>
  );
};
