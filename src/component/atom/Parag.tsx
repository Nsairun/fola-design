import * as React from 'react';

export interface IAppProps { text: string
}

export default function App (props: IAppProps) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}
