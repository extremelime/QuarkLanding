import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>

        {/* Bottom area */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 border-t border-gray-200">
      
         <a href="https://github.com/bifilm/quarkiql" className="text-black hover:text-gray-800 transition duration-150 ease-in-out" aria-label="Github">
         <svg width="250" height="50" className="fill-current" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32"><path d="M16,8.25a7.95,7.95,0,0,0-2.48,15.5c.39.1.49-.2.49-.4V22c-2.18.5-2.68-1-2.68-1a2.64,2.64,0,0,0-.89-1.19c-.7-.5.09-.5.09-.5a1.74,1.74,0,0,1,1.2.79,1.61,1.61,0,0,0,2.28.7,2.22,2.22,0,0,1,.5-1.09c-1.79-.2-3.58-.9-3.58-4a2.86,2.86,0,0,1,.8-2.09,2.44,2.44,0,0,1,.1-2.08s.69-.2,2.18.79a6.75,6.75,0,0,1,4,0c1.49-1,2.18-.79,2.18-.79a2.92,2.92,0,0,1,.1,2.08,3.22,3.22,0,0,1,.8,2.09c0,3.08-1.89,3.68-3.68,3.88a2.55,2.55,0,0,1,.6,1.59v2.18c0,.2.1.5.59.4a8,8,0,0,0,5.47-7.55A8.13,8.13,0,0,0,16,8.25Z"/>
                 </svg> </a>
             
          {/* Copyrights note */}
          <div className="content-center text-sm text-gray-600">
                      ©2023 QuarkIQL. All Rights Reserved.
          </div>

        </div>

    </footer>
  );
}

export default Footer;
