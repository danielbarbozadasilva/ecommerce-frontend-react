import React from 'react'
import { BoxTable } from '../../datagrid/styled'
import Loading from '~/components/loading/page'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { SImg } from './styled'
import { IconButton } from '@material-ui/core'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const DataList = ({ data, modal, loading }) => {
  const thumb = ({ formattedValue }) => {
    return <SImg src={formattedValue[0]} />
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
      field: 'photos',
      headerName: 'Imagem',
      renderCell: thumb,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'title',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'description',
      headerName: 'Descrição',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'promotion',
      headerName: 'Promoção',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'sku',
      headerName: 'sku',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'quantity',
      headerName: 'Quantidade',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
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

  const theme = createTheme()

  const styles = makeStyles((theme) => ({
    root: {
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
      '& .cold': {
        backgroundColor: '#b9d5ff91',
        color: '#1a3e72'
      },
      '& .hot': {
        backgroundColor: '#ff943975',
        color: '#1a3e72'
      }
    }
  }))

  const classes = styles()

  return (
    <BoxTable>
      <DataGrid
        rows={data}
        autoHeight
        className={classes.root}
        getCellClassName={(params) => {
          if (params.field === 'quantity') {
            return params.value < 5 ? 'hot' : ''
          }
          return ''
        }}
        columns={columns}
        loading={loading}
        pageSize={10}
      />
    </BoxTable>
  )
}

export default DataList
