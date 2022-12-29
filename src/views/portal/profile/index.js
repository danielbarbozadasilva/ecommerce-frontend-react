import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProfileForm from '../../../components/portal/auth/profile/index'
import Loading from '../../../components/loading/page/index'
import {
  listByIdClientAction,
  updateClientProfileAction
} from '~/store/client/client.action'

const Profile = () => {
  const dispatch = useDispatch()
  const clientid = useSelector((state) => state.auth.clientid)
  const userid = useSelector((state) => state.auth.userid)
  const loading = useSelector((state) => state.auth.loading)
  const client = useSelector((state) => state.client.clientById)

  const submitForm = (form) => {
    dispatch(updateClientProfileAction(clientid, userid, form))
  }

  if (loading) {
    return <Loading />
  }

  useEffect(() => {
    dispatch(listByIdClientAction(clientid))
  }, [dispatch])

  return (
    <>
      <ProfileForm submit={submitForm} />
    </>
  )
}

export default Profile
