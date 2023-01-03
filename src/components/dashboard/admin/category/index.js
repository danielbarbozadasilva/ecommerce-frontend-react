import React from 'react'
import { BoxTable } from '../../datagrid/styled'
import Loading from '~/components/loading/page'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { SImg } from './styled'
import { IconButton } from '@material-ui/core'

const DataList = ({ data, modal, loading }) => {
  const thumb = ({ formattedValue }) => {
    return <SImg src={formattedValue} />
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
    <BoxTable>
      <DataGrid rows={data} columns={columns} loading={loading} pageSize={10} />
    </BoxTable>
  )
}

export default DataList
