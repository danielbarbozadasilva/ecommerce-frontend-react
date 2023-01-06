import React from 'react'
import { BoxTable } from '../../datagrid/styled'
import Loading from '~/components/loading/page'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2 } from 'react-icons/fi'
import { IconButton } from '@material-ui/core'

const DataList = ({ data, modal, loading }) => {
  const actionRemove = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(1, row)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      width: 230,
      disableColumnMenu: true
    },
    {
      field: 'text',
      headerName: 'Descrição',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'score',
      headerName: 'Nota',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'productName',
      headerName: 'Produto',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
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
    </>
  )
}

export default DataList
