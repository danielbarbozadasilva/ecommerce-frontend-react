import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { More as MoreIcon } from '@mui/icons-material'
import Loading from '../../../loading/page/index'
import { BoxTable } from '../../datalist/styled'
import ListProduct from './details/index'
import ListDelivery from './delivery/index'

const DataList = ({ data, loading }) => {
  const [modelProduct, setModalProduct] = React.useState({})
  const [modelDelivery, setModalDelivery] = React.useState({})

  const actionModalProduct = ({ id, row }) => {
    const solicitation = Array(row).find((data) => id === data.id)
    return (
      <>
        <Tooltip title="Consultar">
          <span>
            <IconButton
              onClick={() =>
                setModalProduct({ open: true, data: solicitation.cart })
              }
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalDelivery = ({ id, row }) => {
    const data = Array(row).find((data) => id === data.id)
    return (
      <>
        <Tooltip title="Consultar">
          <span>
            <IconButton
              onClick={() => setModalDelivery({ open: true, data: data.deliveries })}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const columns = [
    {
      field: 'solicitationNumber',
      headerName: 'Código',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: 'Preço total',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'shipping',
      headerName: 'Frete',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'type',
      headerName: 'Tipo',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModal',
      headerName: 'Produtos',
      renderCell: actionModalProduct,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModalDelivery',
      headerName: 'Entrega',
      renderCell: actionModalDelivery,
      align: 'center',
      flex: 1,
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
          disableColumnSelector
          disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }
          }}
        />
      </BoxTable>
      <ListProduct
        open={modelProduct.open || false}
        data={modelProduct.data}
        close={() => setModalProduct({ ...modelProduct, open: false })}
      />
      <ListDelivery
        open={modelDelivery.open || false}
        data={modelDelivery.data}
        close={() => setModalDelivery({ ...modelDelivery, open: false })}
      />
    </>
  )
}

export default DataList
