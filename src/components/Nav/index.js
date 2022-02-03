
import { useContext } from 'react';
import userContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';


const Nav = () => {

    const user = useContext(userContext)
    console.log(user)
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/home.png" alt="" width="40" height="50"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/iconLogin.png" alt="" width="40" height="54"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/fraud.png" alt="" width="40" height="50"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/search.png" alt="" width="40" height="50"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/scart.png" alt="" width="40" height="50"/>
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
