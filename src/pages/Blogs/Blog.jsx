import React from 'react';

const Blog = () => {
    return (
        <div className='m-4'>
            <div className='bg-red-100 mb-2 p-2'>
            <h1>1.Tell us the differences between uncontrolled and controlled components</h1>
            <p>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.A controlled functional component is a component that receives its current value and update callback via props.</p>
            </div>
            <div className='bg-red-100 mb-2 p-2'>
            <h1>2.How to validate React props using PropTypes?</h1>
            Ans: <p>Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
            
            </p>

            </div>
            <div className='bg-red-100 mb-2 p-2'>
            <h1>3.Tell us the difference between nodejs and express js.</h1>
            <p>Ans:NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>

            </div>
            <div className='bg-red-100 mb-2 p-2'>
            <h1>4.What is a custom hook, and why will you create a custom hook?</h1>
            <p>Ans:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            </div>
            
            
            
            
        </div>
    );
};

export default Blog;