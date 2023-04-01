import React from 'react';

const Qna = () => {
    return (

        <div>

            <h3>Question Answer about react</h3>

        <div className='text-start mt-5'>
            <h4>(i) What's the difference between props and state?</h4>
            <p className='ms-4'>We can pass props to components like Function's parameters. On the other side state is managed within the component like variables declaring in Function body. 

            Props passes data from one component to another while the state holds information about the component. 

            We can not modify props but states can be modified . That's why Props are called immutable and states are called mutable.</p>
        </div>

        <div className='text-start mt-5'>
            <h4>(ii) How does useState() work?</h4>
            <p className='ms-4'>useState is a hook inside React which allows us to add state to our functional component. It returns a pair inside a array with two items . First one is the current value for the state we initialized and the next one is a function to update our state value.  We can  call the next array element's function from any click handler to set the new value for our current state of useState.</p>
        </div>

        <div className='text-start mt-5'>
            <h4>(iii) What does useEffect do other than load data?</h4>
            <p className='ms-4'>

                <ul >
                    <li>We can validate input field ,live filtering,trigger animation on new array value  if we run useEffect on state change.</li>
                    <li>Its also possible to update paragraph list on fetched Api data update if we run useEffect on props change.</li>
                </ul>
            </p>
        </div>

        <div className='text-start mt-5'>
            <h4>(iii) How does React Work?</h4>
            <p className='ms-4'>

            React is  one of the most popular javascript libraries to build user interfaces for mobile and web application developers. It was developed by Facebook. It is used to build user interface and web applications quickly and efficiently in the easiest way possible. Developers create UI components using JSX. JSX looks like HTML on the outer side. We can receive data as props and manage inside their states using hooks .

 
            </p>
        </div>
        

        </div>


        
    );
};

export default Qna;