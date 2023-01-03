import React from 'react'
import { BoxTable } from '../../datagrid/styled'
import Loading from '~/components/loading/page'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { SImg } from './styled'
import { IconButton, Tooltip } from '@material-ui/core'
import ListProduct from '~/components/dashboard/admin/product/form/list/index'
import { More as MoreIcon } from '@material-ui/icons'

const DataList = ({ data, modal, loading }) => {
  const [modalProduct, setModalProduct] = React.useState({})

  const thumb = ({ formattedValue }) => {
    return <SImg src={formattedValue} />
  }

  function openProduct(row) {
    setModalProduct({ open: true, data: row })
  }

  const actionModalProduct = ({ row }) => {
    const result = row.product

    return (
      <>
        <Tooltip title="Listar produtos">
          <span>
            <IconButton
              onClick={() => openProduct(result)}
              disabled={result.length ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionEdit = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(2, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    )
  }

  const actionRemove = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(3, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
  }

  const columns = [
    {
      field: 'photo',
      headerName: 'Imagem',
      renderCell: thumb,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'code',
      headerName: 'Código',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'availability',
      headerName: 'Disponível',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'actionsproducts',
      headerName: 'Produtos',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalProduct,
      disableColumnMenu: true
    },
    {
      field: 'actionEdit',
      headerName: 'Editar',
      renderCell: actionEdit,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionRemove',
      headerName: 'Excluir',
      renderCell: actionRemove,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <BoxTable>
        <DataGrid
          rows={data}
          columns={columns}
          loading={loading}
          pageSize={10}
        />
      </BoxTable>
      <ListProduct
        open={modalProduct.open || false}
        products={modalProduct.data}
        close={() => setModalProduct({ ...modalProduct, open: false })}
      />
    </>
  )
}
export default DataList
