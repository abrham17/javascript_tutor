import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/body/home';
import About from './components/blogdetail/about/about';
import CreatePost from './components/newposts/createpost';
import PostDetail from './components/blogdetail/blogpostdetail/postdetail';
import Footer from './components/body/fotter';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const [searchQuery , setSearchQuery] = useState("");
  const [posts, setPosts] = useState(savedPosts); // Posts state

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  function handleSearchQueryChange(query){
    setSearchQuery(query)
  }
  return (
    <div className={`d-flex flex-column min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} changeSearchQuery = {handleSearchQueryChange}/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home theme={theme} posts={posts} searchQuery={searchQuery}/>} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/create" element={<CreatePost theme={theme} onDataChange={setPosts} />} />
            <Route path="/post/:title" element={<PostDetail theme={theme} posts={posts} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
