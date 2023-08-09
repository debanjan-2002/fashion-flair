import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-6 flex flex-col justify-center items-center">
      <div>
        <p className="text-gray-600">
          Made with <span className="text-red-500">&lt;3</span> by ByteWhisperers
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/your-username/your-repo"
            className="text-blue-500 hover:underline mr-4"
          >
            GitHub
          </a>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => window.location.href = 'mailto:adrishyantee@gmail.com'}
          >
            Send us a Message
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
