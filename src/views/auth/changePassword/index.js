import React from 'react'
import { changePasswordAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormChangePassword from '../../../components/portal/auth/changePassword/index'
import { Helmet } from 'react-helmet'

const ChangePassword = (props) => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await changePasswordAction(form))
  }

  return (
    <>
      <Helmet title={props.title} />
      <FormChangePassword submit={submitForm} />
    </>
  )
}

export default ChangePassword
