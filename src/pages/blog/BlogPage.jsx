/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../shared/navbar/Navigation';

const BlogPage = () => {
    return (
     <Container>
        <Navigation></Navigation>
        <h3 className='text-center mb-3'>This is Blog Page</h3>
        <h4>Q-1.Tell us the differences between uncontrolled and controlled components.</h4>
        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
        <br />
        <br />
        <h4>Q-2.How to validate React props using PropTypes</h4>
        <p>propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
        <br />
        <br />
        <h4>Q-3.Tell us the difference between nodejs and express js.</h4>
        <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
        <br />
        <br />
        <h4>Q-4.What is a custom hook, and why will you create a custom hook?</h4>
        <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
     </Container>
    );
};

export default BlogPage;