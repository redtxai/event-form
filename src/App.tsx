import React from 'react';

import './App.css';
import Input from './components/input/Input';
import Label from './components/label/Label';

function App() {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <div className="mt-1 sm:col-span-2 sm:mt-0 blue regal-blue">
        <Label htmlFor='first-name' text='First Name'></Label>
        <Input id='first-name' name='first-name' placeholder='First Name'></Input>
      </div>
    </div>
  )
}

export default App;
