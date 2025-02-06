import React from "react";
import { useParams } from "react-router-dom";
import "./postdetail.css";
import { marked } from "marked";
import DOMPurify from 'dompurify';

const PostDetail = ({ theme, posts }) => {
  const { title } = useParams();
  const post = posts.find((post) => post.title === title);
  console.log(post);
  if (!post) {
    return (
      <div className={`${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <div className="container text-center">
          <h1 className="pt-5">Post Not Found</h1>
          <p>The post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const createMarkup = (content) => {
    const sanitizedContent = DOMPurify.sanitize(marked(content));
    return { __html: sanitizedContent };
  };

  return (
    <div className={`${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <h1 className={`text-center mt-5`}>{post.title}</h1>
        <img src={post.image} alt={post.title} className="img-fluid h-50 w-50 rounded mx-auto d-block pt-5" />
        <div 
          className={`mt-5 markdown-body`}
          dangerouslySetInnerHTML={createMarkup(post.content)}
        />
      </div>
    </div>
  );
};

export default PostDetail;
