import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllRatingAction,
  removeRatingAction
} from '../../../../store/rating/rating.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/rating/index'
import DialogModal from '../../../../components/dialog'
import Remove from '../../../../components/dashboard/admin/rating/form/remove/index'
import { Helmet } from 'react-helmet'

const Rating = (props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})
  const rating = useSelector((state) => state.rating.all)
  const loading = useSelector((state) => state.rating.loading)

  const callRating = useCallback(() => {
    dispatch(listAllRatingAction())
  }, [dispatch])

  useEffect(() => {
    callRating()
  }, [callRating])

  const toogleModal = (type = 1, id = null) => {
    setModal({ type, id, status: true })
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (data) => {
    dispatch(removeRatingAction(modal.id.product, modal.id.client)).then(() =>
      setModal(false)
    )
  }

  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title
        title="Avaliações"
        subTitle="Página de avaliações"
        actions={actions}
      />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={rating} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>

      <DialogModal
        title="Cliente"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          <Remove open={!!modal} close={closeModal} remove={submitForm} />
        </>
      </DialogModal>
    </>
  )
}

export default Rating
