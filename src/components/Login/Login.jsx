import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthAC } from '../../utils/validators/validators';
import { Iput } from '../common/FormsControls';
import styles from '../common/FormsControls.module.css';
const maxLength = maxLengthAC(25);

class Login extends React.Component {

    render() {
        return ( 
            <form onSubmit = {this.props.handleSubmit}>
                <div>
                    <Field name = {'login'} component={Iput} placeholder={'login'} validate = {[
                            required,
                            maxLength
                        ]}/>
                </div>
                <div>
                    <Field 
                        name = {'password'} 
                        component={ Iput } 
                        type = {'password'} 
                        validate = {[
                            required,
                            maxLength
                        ]}
                        placeholder={'password'}/>
                </div>
                <div>
                    <Field name = {'rememberMe'} type={'checkbox'} component={ Iput }/> Remember Me 
                </div>

                    {this.props.error ? <div className = {styles.formsControlError}>{this.props.error}</div> : ''}
                <button>LogIn</button>
            </form>
        );
    }
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(Login);

export default LoginReduxForm;