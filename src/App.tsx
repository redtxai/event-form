import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEditPage from './pages/create-edit/CreateEditPage';
import LandingPage from './pages/landing-page/LandingPage';

const App = () => {
  return (
    <main className='w-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}/>
          <Route path="/create" element={<CreateEditPage></CreateEditPage>}/>
          <Route path="/edit/:id" element={<CreateEditPage></CreateEditPage>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
