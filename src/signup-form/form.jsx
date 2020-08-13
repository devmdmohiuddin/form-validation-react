import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './text-input'



const Form = ({values, handleChange, agreement, handleAgreement, handleSubmit, errors}) => {
    return (

        <form onSubmit={handleSubmit}>
            
                <TextInput
                    name='name'
                    label='Name'
                    error={errors.name}
                    placeholder='Enter Your Name'
                    value={values.name}
                    onChange={handleChange}
                />

                <TextInput
                    name='email'
                    label='Email'
                    type='email'
                    error={errors.email}
                    placeholder='Enter Your Email'
                    value={values.email}
                    onChange={handleChange}
                />

                <TextInput
                    name='password'
                    error={errors.password}
                    label='Password'
                    type='password'
                    placeholder='Enter Your Password'
                    value={values.password}
                    onChange={handleChange}
                />

                <TextInput
                    name='birthDate'
                    label='BirthDate'
                    error={errors.birthDate}
                    type='date'
                    placeholder='Enter Your BirthDate'
                    value={values.birthDate}
                    onChange={handleChange}
                />

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        />
                        Male
                  </label>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                        />
                        Female
                  </label>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Other"
                            onChange={handleChange}
                        />
                        Other
                  </label>
                </div>

                <div className=" my-3">
                    <label className="form-check-label">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="agreement"
                            checked={agreement}
                            onChange={handleAgreement}
                        />
                        Terms & Conditions
                    </label>
                </div>

                <button className='btn btn-primary' type='submit' >Create User</button>

            </form>

    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form