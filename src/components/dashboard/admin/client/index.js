import React from 'react'
import { BoxTable } from '../../datagrid/styled'
import Loading from '~/components/loading/page'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2 } from 'react-icons/fi'
import ListAddress from '~/components/dashboard/admin/client/form/list/index'
import { IconButton, Tooltip } from '@material-ui/core'
import { More as MoreIcon } from '@material-ui/icons'

const DataList = ({ data, modal, loading }) => {
  const [modalAddress, setModalAddress] = React.useState({})

  function openInfoAddress(row) {
    setModalAddress({ open: true, data: row })
  }

  const actionModalAddress = ({ row }) => {
    return (
      <>
        <Tooltip title="Endereço">
          <span>
            <IconButton
              onClick={() => openInfoAddress(row.address)}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionRemove = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Código',
      align: 'center',
      headerAlign: 'center',
      width: 230,
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
      field: 'cpf',
      headerName: 'Cpf',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'birthDate',
      headerName: 'Data nascimento',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'status',
      headerName: 'Status',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'phone01',
      headerName: 'Telefone',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'actionsDetails',
      headerName: 'Endereço',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalAddress,
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
      <ListAddress
        open={modalAddress.open || false}
        data={modalAddress.data}
        close={() => setModalAddress({ ...modalAddress, open: false })}
      />
    </>
  )
}

export default DataList
