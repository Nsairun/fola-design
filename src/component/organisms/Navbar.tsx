import * as React from 'react';
import Logo from '../atom/Logo';
import Nav from '../molecules/Nav';
import './navbar.css'

export default function Navbar () {
  return (
    <div className='navbar'>
        <div className='bar1'>
            <Logo text={'FOLA-EMPIRE'}/>
        </div>
        <div className='bar2'>
            <Nav text={''}/>
        </div>
      </div>
  );
}

