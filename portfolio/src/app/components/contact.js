import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 id="contact" className="text-3xl font-semibold leading-8 text-gray-900 mb-12">
          Contact
        </h2>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/eulloa10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-gray-800 px-4 py-3 text-white hover:bg-gray-700 transition-colors"
          >
            <Image src="/github-mark-white.png" alt="GitHub Icon" width={24} height={24} className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edgarulloa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            <Image src="/linkedin.png" alt="LinkedIn Icon" width={24} height={24} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
