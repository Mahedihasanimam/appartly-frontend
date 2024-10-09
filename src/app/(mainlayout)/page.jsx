import Hero from '@/components/Home/Hero';
import Proparty from '@/components/Home/Proparty';
import Rooms from '@/components/Home/Rooms';
import React from 'react';

const page = () => {
    return (
        <div>
          <Hero/>
          <Rooms/>
          <Proparty/>
        </div>
    );
};

export default page;