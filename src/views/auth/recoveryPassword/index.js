import React from 'react'
import { recoveryPasswordAction } from '../../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormRecoveryPassword from '../../../components/portal/auth/recoveryPassword/index'
import { Helmet } from 'react-helmet'

const RecoveryPassword = (props) => {
  const dispatch = useDispatch()

  const submitForm = async (form) => {
    dispatch(await recoveryPasswordAction(form))
  }

  return (
    <>
      <Helmet title={props.title} />
      <FormRecoveryPassword submit={submitForm} />
    </>
  )
}

export default RecoveryPassword
