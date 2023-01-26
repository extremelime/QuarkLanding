import React, { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';


function Header() {


  const [top, setTop] = useState(true);
  let location = useLocation();

    const logout = () => {
    window.localStorage.clear();

  };

   const [user, setUser] = useState(null);

  // detect whether user has signed in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedQuarkappUser");
    if (loggedUserJSON) {
      setUser(true);
    }
  }, []);



  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  





  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-light backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 ml-5 mr-5">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to={ {pathname: "/"}} className="block" aria-label="Quark">
              <img class="object-cover h-7 w-86"  src="quark.svg" alt="Quark Logo"/>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;