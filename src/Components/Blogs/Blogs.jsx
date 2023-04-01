import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookmarkSection from '../BookmarkSection/BookmarkSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [bookmarked,setBookmarked] = useState([]);
    const [blogs,setBlogs] = useState([]);
    const [time,setTime] = useState(0)
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[]);
    const handleTimeToContainer = (blog) => {
      const newTime= time + parseInt(blog);
      console.log(newTime);

      setTime(newTime)
    }
    const handleToAddInBookmarked = (blog) =>{
      // console.log(bookmarked);

      const newBookmarked = [...bookmarked,blog];
      setBookmarked(newBookmarked);

      if (newBookmarked.id==bookmarked.id){
        toast('Already in bookmarks')
      }
    }

    return (
        <div className='mt-5 d-flex '>

          <div>
          {
                    blogs.map(blog => <Blog
                      key={blog.id}
                      blog = {blog}
                      handleTimeToContainer={handleTimeToContainer}
                      handleToAddInBookmarked={handleToAddInBookmarked}
                      ></Blog> )

               
            }

          </div>

          <div className='ms-5 ' >

            <div className='bg-primary-subtle border border-primary rounded border-2 p-5'>
              <h2>Spent time on read : {time} min</h2>

            </div>

            <div className='bg-secondary-subtle border mt-5 rounded p-2'>
              <h2>Bookmarked Blogs</h2>
              
              <p>Selected bookmarks : {bookmarked.length}</p>
              <ToastContainer />









              
              
            </div>

          </div>

          
            
            
            
        </div>
    );
};

export default Blogs;