import React, { useState } from "react";
import './home.css';
import Ai_one from './images/Ai_one.jpg';
import Ai_two from './images/Ai_two.jpg';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Home({ theme , posts , searchQuery }) {
  return (
    <div className={`home container-fluid  ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'} mb-0`}>
      <Slider theme={theme} />
      <Card theme={theme} posts={posts} searchQuery = {searchQuery}/>
    </div>
  );
}

export function Slider({ theme }) {
  const [slideIndex, setSlideIndex] = useState(0);  // Initialize to 0 (Ai_one)

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setSlideIndex((prev) => (prev === 1 ? 0 : prev + 1));  // Toggle between 0 and 1
    } else {
      setSlideIndex((prev) => (prev === 0 ? 1 : prev - 1));  // Toggle between 0 and 1
    }
  };

  return (
    <div className={`slider position-relative container bg-none border-none`}>
      {/* Left Icon (Previous) */}
      <FaAngleLeft 
        className="slider-icon position-absolute cursor-pointer"
        style={{
          top: '50%',
          left: '10px',
          fontSize: '3rem',
          color: theme === 'dark' ? '#333' : '#fff',
          zIndex: 10
        }} 
        onClick={() => handleSlide('prev')} 
        aria-label="Previous Slide"
      />

      <div className="slider-images-container position-relative w-80 pt-4" style={{height: '400px'}}>
        {slideIndex === 0 && (
          <img 
            src={Ai_one} 
            alt="AI illustration one" 
            className={`slider-image w-100 h-100 d-flex transition-all duration-500 shadow-lg ${theme === 'dark' ? 'opacity-dark' : 'opacity-light'}`} 
          />
        )}
        {slideIndex === 1 && (
          <img
            src={Ai_two} 
            alt="AI illustration" 
            className={`slider-image w-100 h-100 d-flex transition-all duration-500 shadow-lg ${theme === 'dark' ? 'opacity-dark' : 'opacity-light'}`} 
          />
        )}
      </div>

      {/* Right Icon (Next) */}
      <FaAngleRight 
        className="slider-icon position-absolute cursor-pointer"
        style={{
          top: '50%',
          right: '10px',
          fontSize: '3rem',
          color: theme === 'dark' ? '#333' : '#fff',
          zIndex: 10
        }} 
        onClick={() => handleSlide('next')} 
        aria-label="Next Slide"
      />
    </div>
  );
}


export function Card({ theme , posts , searchQuery }) {
  return (
    <>
    {posts.length === 0 && <h1 className="text-center mt-5">No posts found</h1>}
    {posts.length > 0 && 
        <div className="container">
          <div className="row mt-3" >
          {searchQuery
          ? posts
              .filter((post) => 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                post.description.toLowerCase().includes(searchQuery.toLowerCase())||
                post.content.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post, index) => (
                <div
                  key={index}
                  className={`card border-0 ${
                    theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
                  } col-md-3 col-sm-6 col-12`}
                >
                  {post.image && <img src={post.image} alt="Post" className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description.slice(0, 100)}...</p>
                    <Link to={`/post/${post.title}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              ))
          : posts.map((post, index) => (
              <div
                key={index}
                className={`card border-0 ${
                  theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
                } col-md-3 col-sm-6 col-12`}
              >
                {post.image && <img src={post.image} alt="Post" className="card-img-top" />}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description.slice(0, 100)}...</p>
                  <Link to={`/post/${post.title}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
    }
    </>
  );
}

export function PostCard({ theme }) {
    return (
        <div className="container">
            <h1>PostCard</h1>
        </div>
    )
}
