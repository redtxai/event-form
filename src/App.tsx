import React from 'react';

import './App.css';

function App() {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">First name</label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" />
      </div>
    </div>
  )
}

export default App;
