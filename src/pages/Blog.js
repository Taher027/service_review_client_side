import React from 'react';
import useTitle from './hooks/useTitle';

const Blog = () => {
    useTitle('Blog')

    return (
        <div className='text-white'>
            <div className='m-5 p-5 '>
                <h2 className=''>What are the difference between sql and nosql?</h2>
                <p className='text-sm'>The five critical differences between SQL vs NoSQL are:

                    1. SQL databases are relational, NoSQL databases are non-relational.
                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='m-5 p-5'>
                <h2 text-2xl>What is JWT, and how does it work?</h2>
                <p className='text-sm'>
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                </p>
            </div>
            <div className='m-5 p-5'>
                <h2 text-2xl>What is the difference between javascript and NodeJS?</h2>
                <p className='text-sm'>
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                    Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things.
                </p>
            </div>
            <div className='m-5 p-5'>
                <h2 text-2xl>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-sm'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blog;