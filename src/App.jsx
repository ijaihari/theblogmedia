import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import Intro from './components/Intro';
import Blogs from './components/Blogs';
import Write from './components/Write';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/write' element={<Write/>} />
      </Routes>

    </div>
  );
}

export default App;