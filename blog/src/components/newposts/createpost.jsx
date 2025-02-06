import React, { useState, useEffect } from 'react';
import './createpost.css';
import ReactMarkdown from "react-markdown";
import { marked } from "marked";
const CreatePost = ({ theme, onDataChange }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    description: null,
    image: null,
  });

  // Load existing posts from local storage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    onDataChange(savedPosts);
  }, [onDataChange]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : name === 'description' ? marked(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        const newPost = {
          title: formData.title,
          content: formData.content,
          description: formData.description,
          image: reader.result, // Save base64 string for preview
        };

        // Retrieve existing posts from local storage
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = [...savedPosts, newPost];

        // Save updated posts to local storage
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        // Update parent state
        onDataChange(updatedPosts);

        // Reset the form
        setFormData({
          title: '',
          content: '',
          description: null,
          image: null,
        });

        console.log('Post created successfully:', newPost);
      } catch (error) {
        console.error('Error saving post:', error);
      }
    };

    if (formData.image) {
      reader.readAsDataURL(formData.image);
    } else {
      reader.onloadend(); // For posts without images
    }
  };

  return (
    <div className={`createpost-container d-flex justify-content-center align-items-center ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <form
        className={`createpost-form col-md-6 col-sm-12 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'} pt-5 pb-5`}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={`form-control mt-2 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        />

        <div className="mt-2">
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          />
        </div>

        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short description"
          className={`form-control mt-2 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        />

        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          cols="30"
          rows="10"
          className={`form-control mt-2 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        ></textarea>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <button type="submit" className={`btn btn-primary ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            Create
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setFormData({
                title: '',
                content: '',
                description: '',
                image: null,
              })
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
