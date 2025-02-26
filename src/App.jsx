import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import Intro from './components/Intro';
import Blogs from './components/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>

    </div>
  );
}

export default App;