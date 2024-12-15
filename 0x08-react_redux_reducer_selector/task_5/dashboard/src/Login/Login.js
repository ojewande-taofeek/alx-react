import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", enableSubmit: false};
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEnableSubmit = this.handleChangeEnableSubmit.bind(this);
    }


    handleLoginSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value }, this.handleChangeEnableSubmit);
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value }, this.handleChangeEnableSubmit);
    }

    handleChangeEnableSubmit() {
        const { email, password } = this.state;
        this.setState({ enableSubmit: email.trim() !== "" && password.trim() !== ""});
    }

    render() {
        return(
            <div className={css(logInStyle.appBody)}>
                    <p className={css(logInStyle.p)}>Login to access the full dashboard</p>
                    <form className={css(logInStyle.form)} onSubmit={this.handleLoginSubmit}>
                          <span className={css(logInStyle.small)}>
                              <label htmlFor="email" >Email:</label>
                              <input type="email" id="email" value={this.state.email} onChange={this.handleChangeEmail}  autoComplete='true' className={css(logInStyle.input)}/>
                          </span>
                          <span className={css(logInStyle.small)}>
                              <label htmlFor="password">Password:</label>
                              <input type="password" value={this.state.password} onChange={this.handleChangePassword} id="password" className={css(logInStyle.input)}/>
                          </span>
                        <input type='submit' className={css(logInStyle.button)} value="OK" disabled={!this.state.enableSubmit} />

                    </form>
              </div>
      )
    }
}

const logInStyle = StyleSheet.create({
    appBody: {
        position: 'relative',
        top: '-0.8rem',
    },
    p: {
        marginLeft: '1.5rem',
        marginBottom: '1rem',
    },
    form: {
        marginTop: '0.2rem',
    },
    input: {
        margin: '0 0.5rem',
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'block',
            margin: '1.5rem',
            width: '100%',
        },
    },
    button: {
        '@media (max-width: 900px)': {
            border: '0.005rem solid brown',
        },
    },
   
});

Login.propTypes = {
    logIn: PropTypes.func,
}

Login.defaultProps = {
    logIn: ()=> {},
}
