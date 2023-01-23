import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>

        {/* Bottom area */}


        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 md:pt-6 pb-8 md:pb-12 border-t border-gray-200">
        <div className="pb-4">
          <a href="https://www.linkedin.com/company/quarkiql/"  style={{ display: 'inline-block', margin:'auto', width: '30px',}} className="text-gray-800 hover:text-gray-700 transition duration-150 ease-in-out" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="30" height="30"  viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg> 
          </a>
          </div>
          {/* Copyrights note */}
          <div className="content-center text-sm text-gray-600">
                      ©2023 QuarkIQL LLC. All Rights Reserved.
          </div>

        </div>

    </footer>
  );
}

export default Footer;
