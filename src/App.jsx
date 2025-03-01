import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import Intro from './components/Intro';
import Blogs from './components/Blogs';
import Write from './components/Write';
import SingleBlog from './components/SingleBlog';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Community from './components/Community';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<SingleBlog/>} />
        <Route path='/blogs/edit/:blogId' element={<Edit/>} />
        <Route path='/write' element={<Write/>} />
        <Route path='/community' element={<Community/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;