import React from 'react'
import { recoveryPasswordAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormRecoveryPassword from '../../../components/portal/auth/recoveryPassword/index'

const RecoveryPassword = () => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await recoveryPasswordAction(form))
  }

  return (
    <>
      <FormRecoveryPassword submit={submitForm} />
    </>
  )
}

export default RecoveryPassword
