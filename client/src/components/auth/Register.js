import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";

const Register = ({ handleRegister, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', name: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
    } else {
      alert('Password do not match')
    }
  }

  return (
    <>
      { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={ (e) => setUser({ ...user, email: e.target.value })}
          required
          placeholder="Email"
        />
        <label>First Name</label>
        <input
          name='name'
          value={user.name}
          onChange={ (e) => setUser({ ...user, name: e.target.value })}
          required
          placeholder="Name"
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={ (e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <label>Password Confirmation</label>
        <input
          type='password'
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          onChange={ (e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;