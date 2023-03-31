import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
// import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[]);

    // const blogs = [
    //     {
    //       id: "6425dab43834a11919417459",
    //       coverPicture: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    //       authorName: "Wilda Trevino",
    //       authorProfile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    //       blogTitle: "How to get your first job as a self-taught programmer",
    //       hashtag: "#beginners",
    //       publishedDate: "2022-04-18",
    //       spentTime: "5 min read"
    //     },
    //     {
    //       id: "6425dab4dc4cd025a019944f",
    //       coverPicture: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    //       authorName: "Stout Elliott",
    //       authorProfile: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //       blogTitle: "how to learn javascript step by step",
    //       hashtag: "#react",
    //       publishedDate: "2017-04-20",
    //       spentTime: "7 min read"
    //     },
    //     {
    //       id: "6425dab4cbdae2c7ac769169",
    //       coverPicture: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //       authorName: "Ramona Combs",
    //       authorProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //       blogTitle: "how to learn react js step by step",
    //       hashtag: "#react",
    //       publishedDate: "2015-12-24",
    //       spentTime: "6 min read"
    //     },
    //     {
    //       id: "6425dab459a7fff8527fc2ba",
    //       coverPicture: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    //       authorName: "Francis Gaines",
    //       authorProfile: "https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //       blogTitle: "how to learn html step by step",
    //       hashtag: "#beginners",
    //       publishedDate: "2015-07-18",
    //       spentTime: "8 min read"
    //     },
        
    //   ]
    return (
        <div>
            {/* <h1>All Blogs</h1> */}
            
            {
                  blogs.map(blog => <Blog
                    key={blog.id}
                    blog = {blog}
                    ></Blog> )

                // blogs.map(blog => console.log(blog))

                // blogs.map ( blog => <Blog
                //     key = {blog.id}
                //     blog = {blog}
                //     ></Blog> )
            }
            
        </div>
    );
};

export default Blogs;