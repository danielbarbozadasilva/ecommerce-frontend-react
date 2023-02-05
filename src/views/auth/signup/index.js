import React from 'react'
import { signUpAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormSignUp from '../../../components/portal/auth/signup/index'
import { Helmet } from 'react-helmet'

const SignUp = (props) => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await signUpAction(form))
  }

  return (
    <>
      <Helmet title={props.title} />
      <FormSignUp submit={submitForm} />
    </>
  )
}

export default SignUp
