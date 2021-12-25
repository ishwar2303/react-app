import React from 'react'
import { Link } from 'react-router-dom'
import InputComponent from './FormComponents/InputComponent'

function SigninForm() {
    const handleSubmit = () => {
        console.log('form submit')
        return false
    }

    const resetForm = () => {
        document.getElementById('signin-form').reset()
    }

    return (
        <form id='signin-form' className='form sign-in-form' onSubmit={handleSubmit} >
            <h4 className='form-heading'>Sign In</h4>
            <div className='form-inputs'>
                <InputComponent label='E-mail' icon='fas fa-envelope' type='text' name='email' fill='true' />
            </div>
            <div className='form-inputs'>
                <InputComponent label='Password' icon='fas fa-key' type='password' name='password' fill='true' />
            </div>
            <div className='button-container'>
                <div className='btn btn-secondary' onClick={resetForm}>Reset</div>
                <button className='btn btn-primary'>Sign In</button>
            </div>

            <div className='form-footer'>
                Create an account ? <Link className='anchor-color-primary' to='/sign-up'>Sign Up</Link> <br/><br/> <Link className='anchor-color-primary' to='/sign-in'>Forgot Password</Link> 
            </div>
        </form>
    )
}

export default SigninForm
