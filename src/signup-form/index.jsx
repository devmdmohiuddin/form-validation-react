import React from 'react'
import Form from './form'
import PropTypes from 'prop-types'

const initValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    birthDate: ''
    
}

class SignupForm extends React.Component {


    state = {
        values: initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value   
            }
        })
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const { isValid, errors } = this.validate()
        
        if (isValid) {
            this.props.createUser (this.state.values)
        
            event.target.reset()
            this.setState({
                values: initValues,
                agreement: false,
                error: {}
            })
        } else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}

        const {values: {name, email, password, birthDate, gender}} = this.state

        if (!name) {
            errors.name = 'Please provide your name'
        }

        if (!email) {
            errors.email = 'Please provide your email'
        }

        if (!password) {
            errors.password = 'Please provide your password'
        }

        if (!gender) {
            errors.gender = 'Please select your gender'
        }

        if (!birthDate) {
            errors.birthDate = 'Please provide your birthDate'
        }

        return {
            errors,

            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Sign Up Form</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SignupForm