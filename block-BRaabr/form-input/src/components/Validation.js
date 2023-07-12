import React from 'react';
class Valid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {
        username: '',
        email: '',
        password: '',
        password2: '',
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    this.setState({ errors, [name]: value });
    switch (name) {
      case 'username':
        errors.username =
          value.length > 3 ? '' : 'Username must be atleast 3 characters';

        break;
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'email is Not Valid';

        break;
      case 'password':
        errors.password =
          value.length < 6 ? 'password cant not less then 6 charactors' : '';

        break;
      case 'password2':
        errors.password2 =
          this.state.password === value
            ? ''
            : 'Password2 is required to be same';
        break;
      default:
        break;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.email + ' ' + this.state.password);
  };
  render() {
    let { email, username, password, password2 } = this.state.errors;

    return (
      <>
        <div className="container">
          <h1>Register With Us</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username :</label>
            <span>{username}</span>

            <input
              onChange={this.handleInput}
              type="text"
              name="username"
              id="username"
              className={username && 'error'}
              value={this.state.username}
              placeholder="Enter userName"
            />
            <label htmlFor="email">Email :</label>
            <span>{email}</span>

            <input
              onChange={this.handleInput}
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              placeholder="Enter Email"
              className={email && 'error'}
            />
            <label htmlFor="password">password :</label>
            <span>{password}</span>

            <input
              onChange={this.handleInput}
              type="password"
              name="password"
              id="password"
              className={password && 'error'}
              value={this.state.password}
              placeholder="Enter Password"
            />

            <label htmlFor="password">Confirm Password :</label>
            <span>{password2}</span>

            <input
              onChange={this.handleInput}
              type="password"
              name="password2"
              id="password2"
              className={password2 && 'error'}
              value={this.state.password2}
              placeholder="Enter Password"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}

export default Valid;
