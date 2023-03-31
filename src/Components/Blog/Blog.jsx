import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {id,coverPicture,authorName, authorProfile,blogTitle,hashtag,publishedDate,spentTime}=props.blog;
    return (
        <div className='style-blog-div'>
            <div className='cover-img'>
                <img src={coverPicture}></img>

            </div>
            
            <div className='author-profile-name d-flex flex-row mb-3'>
                <img src={authorProfile} width="60" height="60"  className=' p-2 rounded-circle'></img>
                <div>
                    <p className='pt-3 '>{authorName}  </p>
                    <p className=''>{publishedDate}</p>

                </div>
                
            </div>
            {/* <h1>Name: {authorName}</h1> */}
            {/* <p>id : {id}</p> */}

            
        </div>
    );
};

export default Blog;