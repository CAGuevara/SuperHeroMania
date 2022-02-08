import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Login = ({ setUser }) => {

    const [username, setUserName] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUserName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setUser(username)
        //redirect user to the Character List 
        navigate('/')
    }
  
    return (
        <form className='mx-auto border p-2 m-2' id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                {/* <div id="userHelp" className="form-text">Type your User Name and Password.</div> */}
                <label htmlFor="exampleInputUser1"
                    className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputUser1"
                    aria-describedby="userHelp"
                    value={username}
                    onChange={handleChange}
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <h3 id="reg-note">Registration will give you access to review and purchase our products</h3>
        </form>
    );
}

export default Login;
