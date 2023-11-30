import React from 'react';
import Image from 'next/image';

const Contact = () => {
  const containerWidth = 'w-80'; // Adjust the width as needed

  return (
    <div className="bg-white text-black py-16">
      <div className="container mx-auto text-center">


        <h2 href="#contact" className="text-3xl font-bold mb-8">Contact</h2>

        <div className={`mb-8 mx-auto ${containerWidth}`}>
          <div className="p-6 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p className="text-blue-600">
              <a href="mailto:ulloa.edgar0203+ja@gmail.com">ulloa.edgar0203+ja@gmail.com</a>
            </p>
          </div>
        </div>

        <div className={`mb-8 mx-auto ${containerWidth}`}>
          <a
            href="https://github.com/eulloa10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <Image src="/github-mark.png" alt="GitHub Icon" width={40} height={40} />
            <span className="ml-4">GitHub</span>
          </a>
        </div>

        <div className={`mx-auto ${containerWidth}`}>
          <a
            href="https://www.linkedin.com/in/edgarulloa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <Image src="/linkedin.png" alt="LinkedIn Icon" width={40} height={40} />
            <span className="ml-4">LinkedIn</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
