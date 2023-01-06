import React, { useState } from 'react'
import { TextField, Button, Grid, Select, InputLabel } from '@material-ui/core'
import { SBox, Image, SButton, SPreview, SFormControl } from '../styled'
import { useSelector } from 'react-redux'
import { MenuItem } from '@mui/material'

const FormCategoryRegister = ({ submit }) => {
  const [preview, setPreview] = useState([])
  const [form, setForm] = useState({})
  const loading = useSelector((state) => state.category.loading)

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const formData = new FormData()
    formData.append('files', preview[0])

    const newForm = {
      name: form.name,
      code: form.code,
      availability: form.availability === '1' ? true : false
    }

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]))
    submit(formData)
  }

  const removeImage = () => setPreview([])

  const previewImg = (props) => {
    const image = props.target.files[0]
    setPreview([image])
  }

  const handleError = () => !!form.name?.length && !!form.code?.length && !!preview?.length
  
  return (
    <SBox>
      <form noValidate autoComplete="off">
        {preview.length ? (
          <Grid container direction="row">
            <SPreview>
              <Image src={URL.createObjectURL(preview[0])} />
              <Button onClick={() => removeImage()} component="label">
                Remover
              </Button>
            </SPreview>
          </Grid>
        ) : (
          ''
        )}

        <Grid container direction="column">
          <Button
            variant="contained"
            color="primary"
            size="small"
            component="label"
          >
            Upload Foto
            <input
              accept="image/*"
              type="file"
              name="image"
              hidden
              onChange={previewImg}
              disabled={loading}
            />
          </Button>
        </Grid>

        <TextField
          autoFocus
          fullWidth
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          label="Nome"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          disabled={loading}
        />

        <TextField
          fullWidth
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          label="Código"
          name="code"
          value={form.code || ''}
          onChange={handleChange}
          disabled={loading}
        />

        <SFormControl>
          <InputLabel>Disponível</InputLabel>
          <Select
            id="availability"
            name="availability"
            value={form.availability || ''}
            label="Disponível"
            onChange={handleChange}
          >
            <MenuItem value="0">Não</MenuItem>
            <MenuItem value="1">Sim</MenuItem>
          </Select>
        </SFormControl>

        <SButton
          fullWidth
          type="submit"
          disabled={!handleError()}
          onClick={submitForm}
        >
          Cadastrar
        </SButton>
      </form>
    </SBox>
  )
}

export default FormCategoryRegister
