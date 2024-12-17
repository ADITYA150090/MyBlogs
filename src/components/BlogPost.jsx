import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // यहाँ आप API से ब्लॉग डेटा फेच कर सकते हैं
    setBlog({
      id: id,
      title: 'ब्लॉग का शीर्षक',
      author: 'लेखक का नाम',
      content: 'ब्लॉग की पूरी सामग्री यहाँ आएगी...'
    });
  }, [id]);

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>लेखक: {blog.author}</p>
          <div className="content">
            {blog.content}
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogPost; 