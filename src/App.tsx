import React from 'react';

import './App.css';
import Label from './components/label/Label';

function App() {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <Label htmlFor='first-name' text='First Name'></Label>
      <div className="mt-1 sm:col-span-2 sm:mt-0 blue regal-blue">
        test
        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
      </div>
    </div>
  )
}

export default App;
