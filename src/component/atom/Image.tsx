import * as React from 'react';
import './image.css'

export interface IAppProps { src: any, alt: any
}

export default function App (props: IAppProps) {
  return (
    <div className='img'>
      <img src={props.src} alt={props.alt}/>
    </div>
  );
}

