import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/home.png" alt="" width="30" height="24"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/fraud.png" alt="" width="30" height="24"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/search.png" alt="" width="30" height="24"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/scart.png" alt="" width="30" height="24"/>
          </a>
        </div>
      </nav>



    //     <nav >
    //     <div >
    //         <Link to="/">Hero Mania</Link>
    //         <Link to="heroSearch">Hero Search</Link>
    //     </div>
    // </nav>



    );
}

export default Nav;
