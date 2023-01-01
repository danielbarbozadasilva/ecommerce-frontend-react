import React, { useEffect, useCallback } from 'react'
import { Button, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllProducts,
  createProduct
} from '../../../../store/product/product.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/product/index'
import DialogModal from '../../../../components/dialog'
import FormProductRegister from '../../../../components/dashboard/admin/product/form/register/index'
import FormProductUpdate from '../../../../components/dashboard/admin/product/form/update/index'
import Remove from '../../../../components/dashboard/admin/product/form/remove/index'

const Product = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})
  const products = useSelector((state) => state.product.all)
  const loading = useSelector((state) => state.product.loading)

  const callProducts = useCallback(() => {
    dispatch(listAllProducts())
  }, [dispatch])

  useEffect(() => {
    callProducts()
  }, [callProducts])

  const toogleModal = (type = 1, id = null) => {
    if (id) {
      dispatch(editCategory(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (form) => {
    switch (modal.type) {
      case 1:
        dispatch(createProduct(form))
        setModal(false)
        return

      case 2:
        dispatch(updateCategory(form))
        setModal(false)
        return

      case 3:
        dispatch(removeCategory(modal.id)).then(() => setModal(false))
        return

      default:
        return false
    }
  }

  const actions = () => (
    <Button
      onClick={() => toogleModal(1, null)}
      variant="contained"
      color="primary"
      size="small"
    >
      Novo
    </Button>
  )

  return (
    <>
      <Title title="Produtos" subTitle="Página de Produtos" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={products} loading={loading} />
        </Grid>
      </Grid>

      <DialogModal
        title="Produto"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormProductRegister submit={submitForm} />
          ) : modal.type === 2 ? (
            <FormProductUpdate submit={submitForm} />
          ) : modal.type === 3 ? (
            <Remove open={!!modal} close={closeModal} remove={submitForm} />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Product
