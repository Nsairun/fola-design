import * as React from 'react';
import Button from '../atom/Button'
import './nav.css'

export interface IAppProps { text: string
}

export default function App (props: IAppProps) {
  return (
    <div className='nav'>
        <Button text={'Gallery'}/>
        <Button text={'About Us'} />
        <Button text={'Contact'}/>
      </div>
  );
}
