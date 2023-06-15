import * as React from 'react';
import './logo.css'

export interface IAppProps { text: string
}

export default function App (props: IAppProps) {
  return (
    <div className='logo'>
      <h1>{props.text}</h1>
    </div>
  );
}


