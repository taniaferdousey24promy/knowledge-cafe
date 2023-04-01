import React, { useState } from 'react';
import './Blog.css'
import BookmarkSection from '../BookmarkSection/BookmarkSection';

const Blog = (props) => {
    const {id,coverPicture,authorName, authorProfile,blogTitle,hashtag,publishedDate,spentTime}=props.blog;
    const handleTimeToContainer = props.handleTimeToContainer;



    return (




            <div className='style-blog-div text-start'>
                <div className='cover-img '>
                    <img src={coverPicture}></img>

                </div>
            
                <div className='author-profile-name d-flex flex-row mb-3 '>
                    <img src={authorProfile} width="60" height="60"  className=' p-2 rounded-circle'></img>
                    <div className='ms-0 '>
                        <p className='pt-3 '>{authorName}  </p>
                        <p >{publishedDate}</p>
                        

                    </div>

                    <div>

                    {
                        <p className='pt-3 spacing-for-bookmark '>{spentTime}min read<i className ="ms-2 fa-sharp fa-regular fa-bookmark pt-4"></i></p>

                    }


                    </div>
                    
                    
                    
                </div>

                <h3>{blogTitle}</h3>
                <p>{hashtag}</p>
                <button onClick={() => handleTimeToContainer(spentTime)}>Mark As Read</button>
            </div>






                
                
            

            

            

            



        
    );

    
};


export default Blog;