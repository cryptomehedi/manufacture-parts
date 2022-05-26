import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="text-xl font-semibold">Q. How will you improve the performance of a React Application?</div>
            <div>Ans. When developing any program, especially online apps, the number one item on any developer's attention is optimization. JS frameworks like as Angular, React, and others have some fantastic capabilities and customizations. Here, I'll go through the features and tips that will help you improve the performance of your app. Regardless of the precise optimization patterns and strategies you choose. It's critical to maintain your code DRY at all times. Always try to reuse components; this will help you write more efficient code. However, when working with huge codebases or several repositories, reusing code might be difficult for two reasons: 1. You are frequently ignorant of useful code.</div>
            <div className="text-xl font-semibold my-3">Q.  What are the different ways to manage a state in a React application?</div>
            <div>Ans. There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.</div>
            <div className="text-xl font-semibold my-3">Q. How does prototypical inheritance work?</div>
            <div>Ans. JavaScript is an Object Oriented programming language based on prototypes. JavaScript now supports "prototypal inheritance," which means that objects and methods may be shared, extended, and copied thanks to the ES6 improvements.
                Structure (data fields), behavior (functions / methods), and state may all be inherited easily when objects are shared (data values).
                    JavaScript is the most popular prototype-capable language, and its features are rather distinctive. Prototypical inheritance in JavaScript is a powerful feature that may save hours of code when utilized correctly. While this ambiguity is commonly cited as one of JavaScript's flaws, the prototypal inheritance approach is actually more powerful than the traditional paradigm. Building a classic model on top of a prototypal model, for example, is quite simple.</div>
            <div className="text-xl font-semibold my-3">Q.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</div>
            <div>Ans. First let's take an array variable. Then I will measure it and find that variable by including it in the map. And who will display whatever matches</div>
            <div className="text-xl font-semibold my-3">Q. What is a unit test? Why should write unit tests?</div>
            <div>Ans. A unit test is a method of testing a unit, which is the smallest amount of code in a system that can be logically separated. That is a function, a subroutine, a method, or a property in most programming languages. It's crucial to focus on the solitary component of the term. When tests rely on external systems, according to author Michael Feathers' book "Working Effectively with Legacy Code," they are not unit tests: "It can't be performed at the same time as any other test if it communicates with the database, communicates with the network, communicates with the file system, requires system configuration, or it can't be done at the same time as any other test."
                    Unit testing is now available in frameworks like JUnit and testing tools like Test Complete.</div>
        </div>
    );
};

export default Blogs;