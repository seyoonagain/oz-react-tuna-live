import { useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import PostAdd from './components/PostAdd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PostList from './components/PostList';

function App() {
  useEffect(() => console.log('useEffect!'), []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<PostList />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/postAdd' element={<PostAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
