import * as React from 'react';
import './comment.css';

export interface IAppProps { type: string, placeholder: string
}

export default function App (props: IAppProps) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
