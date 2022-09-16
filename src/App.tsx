import './App.css';
import DatePicker from './components/datepicker/DatePicker';
import Input from './components/input/Input';
import Label from './components/label/Label';
import OnboardingIllustration from './components/onboarding-illustration/OnboardingIllustration';
import Textarea from './components/textarea/Textarea';
import Title from './components/title/Title';
import URLComponent from './components/url-component/URLComponent';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center p-5">
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
        <br/>
        <Label htmlFor='description' text='Description'></Label>
        <br/>
        <Textarea id='description' name='description' placeholder='Write a summary about your event' resize={false}></Textarea>
        <br/>
        <Label htmlFor='custom-url' text='Slug'></Label>
        <br/>
        <URLComponent id='custom-url' name='custom-url' domain='yourdomain.com' placeholder='custom URL'></URLComponent>
      </div>
    </div>
  )
}

export default App;
