import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'पहला ब्लॉग', author: 'राम', snippet: 'यह मेरा पहला ब्लॉग पोस्ट है...' },
    { id: 2, title: 'दूसरा ब्लॉग', author: 'श्याम', snippet: 'यह मेरा दूसरा ब्लॉग पोस्ट है...' },
  ]);

  return (
    <div className="blog-list">
      <h2>सभी ब्लॉग्स</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>लेखक: {blog.author}</p>
            <p>{blog.snippet}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList; 