import React from 'react';

import './App.css';
import Input from './components/input/Input';
import Label from './components/label/Label';
import OnboardingIllustration from './components/onboarding-illustration/OnboardingIllustration';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <br/>
        <Label htmlFor='first-name' text='First Name'></Label>
        <br/>
        <Input id='first-name' name='first-name' placeholder='First Name'></Input>
        <br/>
        <OnboardingIllustration type='virtual'></OnboardingIllustration>
        <br/>
        <OnboardingIllustration type='inperson'></OnboardingIllustration>
      </div>
    </div>
  )
}

export default App;
