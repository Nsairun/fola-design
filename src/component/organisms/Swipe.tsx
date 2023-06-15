import * as React from 'react';
import Button from '../atom/Button';
import Image from 'next/image';
import './swipe.css'
import pic1 from '../../images/THE NSAI CLICK.jpg'
import pic2 from '../../images/WhatsApp Image 2023-06-13 at 12.07.44.jpg'


export default function Swipe () {
  return (
    <div className='swipe'>
        <Button text={'Prev'}/>
        <Image className='pic1' src={pic2} alt={'image'}/>
        <Image  className='pic2' src={pic1} alt={'image'}/>
        <Image className='pic1' src={pic2} alt={'image'}/>
        <Button text={'Next'}/>
    </div>
  );
}

