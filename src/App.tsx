import './App.css';
import DatePicker from './components/datepicker/DatePicker';
import Input from './components/input/Input';
import Label from './components/label/Label';
import OnboardingIllustration from './components/onboarding-illustration/OnboardingIllustration';
import Title from './components/title/Title';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <br/>
        <Title text='Event Form' type='large'></Title>
        <br/>
        <Label htmlFor='first-name' text='First Name'></Label>
        <br/>
        <Input id='first-name' name='first-name' placeholder='First Name'></Input>
        <br/>
        <Title text='Where' type='small'></Title>
        <br/>
        <OnboardingIllustration type='virtual'></OnboardingIllustration>
        <br/>
        <OnboardingIllustration type='inperson'></OnboardingIllustration>
        <br/>
        <Title text='When' type='small'></Title>
        <br/>
        <DatePicker></DatePicker>
      </div>
    </div>
  )
}

export default App;
