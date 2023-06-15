import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import * as React from 'react';
import { icons } from 'react-icons';

export interface IAppProps { Icon: string 
}

export default function App (props: IAppProps) {
  return (
    <div className='emj'>
      <i>{props.Icon}</i>
    </div>
  );
}
