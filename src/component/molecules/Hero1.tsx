import * as React from 'react';
import Heading from '../atom/Heading';
import Parag from '../atom/Parag';
import './hero1.css'

export default function App () {
  return (
    <div className='hero'>
      <Heading text={'FOLA DESIGN EMPIRE'}/>
        <Parag text={'Welcome to our house of fashion african fabric. Navigate thru the store of very eye picking designs from the land of human origin ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique perspiciatis labore cumque optio repellat explicabo porro harum excepturi, corporis mollitia error quidem odio consequuntur maiores necessitatibus odit eos. Esse!'}/>
    </div>
  );
}

