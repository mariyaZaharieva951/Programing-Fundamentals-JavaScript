import { Link } from 'react-router-dom'
import * as authService from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'


const Register = () => {

  const { user, userLogin } = useContext(AuthContext);
  const navigate =useNavigate();

    const onSubmit = (ev) => {
      ev.preventDefault();

      const formData = new FormData(ev.target);
      const {email,password,confirmPassword} = Object.fromEntries(formData);
      
      if(password !== confirmPassword) {
        alert ("Passwords don't match")
        return
      }
      authService.register(email,password)
      .then( authData => {
        userLogin(authData);
        navigate('/')
      })
      .catch(() => {
        navigate('/')
      })
    }



    return (
<section id="register-page" className="content auth">
    <form id="register" onSubmit={onSubmit}>
      <div className="container">
        <div className="brand-logo" />
        <h1>Register</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="maria@email.com"
        />
        <label htmlFor="pass">Password:</label>
        <input type="password" name="password" id="register-password" />
        <label htmlFor="con-pass">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirm-password" />
        <input className="btn submit" type="submit" defaultValue="Register" />
        <p className="field">
          <span>
            If you already have profile click <Link to="/login">here</Link>
          </span>
        </p>
      </div>
    </form>
  </section>
    )
}

export default Register;