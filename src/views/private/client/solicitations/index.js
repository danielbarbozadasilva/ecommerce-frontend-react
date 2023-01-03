import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { listClientSolicitationsAction } from '../../../../store/solicitation/solicitation.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/solicitations/index'

const SolicitationsClient = () => {
  const dispatch = useDispatch()
  const client = useSelector((state) => state.solicitation.client)
  const loading = useSelector((state) => state.solicitation.loading)

  const callSolicitation = useCallback(() => {
    dispatch(listClientSolicitationsAction())
  }, [dispatch])

  useEffect(() => {
    callSolicitation()
  }, [callSolicitation])

  const actions = () => null

  return (
    <>
      <Title title="Pedidos" subTitle="Página de Pedidos" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={client} loading={loading} />
        </Grid>
      </Grid>
    </>
  )
}

export default SolicitationsClient
