import React from 'react'
import { changePasswordAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormChangePassword from '../../../components/portal/auth/changePassword/index'

const ChangePassword = () => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await changePasswordAction(form))
  }

  return (
    <>
      <FormChangePassword submit={submitForm} />
    </>
  )
}

export default ChangePassword
