import React from 'react'
import { Link } from 'react-router-dom'
import InputComponent from './FormComponents/InputComponent'

function SignupForm() {
    const handleSubmit = () => {
        console.log('form submit')
        return false
    }
    const resetForm = () => {
        document.getElementById('signup-form').reset()
    }

    return (
        <form id='signup-form' className='form sign-up-form' onSubmit={handleSubmit}>
            <h4 className='form-heading'>Sign Up</h4>
            <div className='form-inputs'>
                <InputComponent label='First Name' icon='fas fa-user' type='text' name='firstName' fill='true' />
                <InputComponent label='Last Name' type='text' name='lastName' fill='false' />
            </div>
            <div className='form-inputs'>
                <InputComponent label='E-mail' icon='fas fa-envelope' type='text' name='email' fill='true' />
                <InputComponent label='Contact' icon='fas fa-phone' type='text' name='contact' fill='false' />
            </div>
            <div className='form-inputs'>
                <InputComponent label='Password' icon='fas fa-key' type='password' name='password' fill='true' />
                <InputComponent label='Confirm Password' icon='fas fa-key' type='password' name='confirmPassword' fill='false' />
            </div>
            <div className='button-container'>
                <div className='btn btn-secondary' onClick={resetForm}>Reset</div>
                <button className='btn btn-primary'>Submit</button>
            </div>

            <div className='form-footer'>
                Already have an account ? <Link className='anchor-color-primary' to='/sign-in'>Sign In</Link>
            </div>
        </form>
    )
}

export default SignupForm
