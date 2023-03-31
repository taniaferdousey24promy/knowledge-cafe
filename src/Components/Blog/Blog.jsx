import React, { useState } from 'react';
import './Blog.css'

const Blog = (props) => {
    const {id,coverPicture,authorName, authorProfile,blogTitle,hashtag,publishedDate,spentTime}=props.blog;
    // const markAsRead = (idd, pro) => {
    //     // localStorage.setItem(id,1);
    //     const read = localStorage.getItem (pro);
    //     if(read){
    //         const markedRead = parseInt(read)+spentTime;
    //         localStorage.setItem(idd,markedRead);
    //         <p className='pt-3 spacing-for-bookmark '>{markedRead}min read</p>


    //     }
        
    //}
    const [show,setShow] = useState(0)
    const increaseTime = () => {
        const newIncreasedTime = show + parseInt(spentTime);
        setShow(newIncreasedTime);
    }
    // const markAsRead = () => {
    //     // console.log("first");
    //     if(show == true){
    //         setShow(false);


    //     }
    //     else{
    //         setShow(true);

    //     }
    // }
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
                    <p className='pt-3 spacing-for-bookmark '>{show}min read<i className ="ms-2 fa-sharp fa-regular fa-bookmark pt-4"></i></p>

                }


                </div>
                
                {/* <i className ="fa-sharp fa-regular fa-bookmark pt-4"></i> */}
                
                
            </div>

            <h3>{blogTitle}</h3>
            <p>{hashtag}</p>
            {/* <p className='pt-3 spacing-for-bookmark '>{show}min read</p> */}
            <button onClick={increaseTime}>Mark As Read</button>

            {/* <div>

                {
                    show? <p className='pt-3 spacing-for-bookmark '>{spentTime}min read</p> : null

                }
                <button onClick={()=>setShow(!show)}>Mark As Read</button>


            </div> */}
                
                
            

            

            

            
        </div>
    );
};


export default Blog;