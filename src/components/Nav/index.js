
import { useContext } from 'react';
import userContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';


const Nav = () => {

  const user = useContext(userContext)
  console.log('nav : ', user)
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/home.png" alt="" width="40" height="50" />
        </Link>

        {
          !user
            ?
            <Link className="navbar-brand" to="login">
              <img src="/iconLogin.png" alt="" width="40" height="54" />
            </Link>
            :
            <>
              <Link className="navbar-brand" to="character/List">
                <img src="/fraud.png" alt="" width="40" height="50" />
              </Link>

              <Link className="navbar-brand" to="character/Search">
              <img src="/search.png" alt="" width="40" height="50" />
              </Link>
              <Link className="navbar-brand" to="shoppingCart">
                <img src="/scart.png" alt="" width="40" height="50" />
              </Link> 
            </>
        }
        {/* 
              */}

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
