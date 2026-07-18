import React from "react";

const About = () => {
    return (
        <div className="w-5/6  mx-auto mt-8 ">
            <p className="text-3xl font-bold mb-4">About This Project</p>
            <div className="bg-slate-100 p-4 rounded-lg mb-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                    This is a comprehensive full-stack e-commerce platform built to showcase modern web development expertise. 
                    Developed by <span className="font-semibold text-blue-600">Emmanuel Aro</span>, the application features a responsive React-based frontend 
                    and a robust Node.js backend, providing users with a seamless shopping experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    The platform demonstrates proficiency in modern web technologies including React 18, Tailwind CSS, Node.js, Express, and MongoDB. 
                    It's deployed on Netlify (frontend) and Render (backend) for production-grade performance.
                </p>
            </div>
            <p className="text-2xl font-bold mb-3 text-slate-900">Key Features</p>
            <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Product browsing with filtering and sorting capabilities</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Shopping cart with persistent state management using React Context</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Wishlist functionality for saving favorite items</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Fully responsive design optimized for mobile, tablet, and desktop</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Advanced search functionality across products</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Category-based navigation (Men, Women, Kids)</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Product details with comprehensive information</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 font-bold">✓</span><span>Similar products recommendation system</span></li>
            </ul>
            <p className="text-2xl font-bold mb-3 text-slate-900">Technical Stack</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-slate-900 mb-2">Frontend Technologies</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• React 18.3.1 with Vite</li>
                        <li>• Tailwind CSS 3.4.9</li>
                        <li>• React Router 6.26</li>
                        <li>• Axios for HTTP requests</li>
                        <li>• React Context API for state</li>
                    </ul>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-slate-900 mb-2">Backend & Database</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Node.js v18 with Express</li>
                        <li>• MongoDB Atlas (Cloud)</li>
                        <li>• Mongoose ODM</li>
                        <li>• RESTful API Architecture</li>
                        <li>• Environment-based configuration</li>
                    </ul>
                </div>
            </div>
            
            <p className="text-2xl font-bold mb-3 text-slate-900">Deployment & DevOps</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-slate-900 mb-1">Frontend: Netlify</h3>
                    <p className="text-gray-700 text-sm">Automated deployments from GitHub with continuous integration and fast CDN delivery</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-slate-900 mb-1">Backend: Render</h3>
                    <p className="text-gray-700 text-sm">Scalable Node.js hosting with automatic restarts and environment variable management</p>
                </div>
            </div>
        </div>

    );
};

export default About;
