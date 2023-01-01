import React, { useState } from 'react'
import {
  TextField,
  Button,
  Grid,
  Select,
  FormHelperText,
  InputLabel
} from '@material-ui/core'
import { SBox, Image, SButton, SPreview, SFormControl } from '../styled'
import { useDispatch, useSelector } from 'react-redux'
import { fieldValidate, isNotValid } from '~/util/validations/form-product'
import { MenuItem } from '@mui/material'
import { listAllCategories } from '~/store/category/category.action'
import { getMoney, formatPriceField } from '~/util/validations/price-validation'

const FormProductRegister = ({ submit }) => {
  const [preview, setPreview] = useState([])
  const [form, setForm] = useState({})
  const [formValidate, setFormValidate] = useState({})
  const categories = useSelector((state) => state.category.all)
  const loading = useSelector((state) => state.product.loading)
  const dispatch = useDispatch()

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const newForm = {
      category: form.category,
      description: form.description,
      width: form.width,
      height: form.height,
      depth: form.depth,
      quantity: form.quantity,
      sku: form.sku,
      title: form.title,
      weight: form.weight,
      price: formatPriceField(form.price),
      promotion: formatPriceField(form.promotion),
      freeShipping: form.freeShipping === '1' ? true : false,
      files: preview[0]
    }

    submit(newForm)
  }

  React.useEffect(() => {
    dispatch(listAllCategories())
  }, [dispatch])

  const removeImage = (remove) => {
    const data = preview.filter((item) => item !== remove)
    setPreview(data)
  }

  const previewImg = (props) => {
    const image = props.target.files[0]
    const data = preview.length ? preview.concat(image) : [image]
    setPreview(data)
  }

  return (
    <SBox>
      <form noValidate autoComplete="off">
        {preview?.length > 0 ? (
          <Grid container direction="row">
            {
              (console.log('preview' + JSON.stringify(preview)),
              console.log('preview[0]' + JSON.stringify(preview[0])))
            }
            {preview?.map((item) => {
              return (
                <SPreview>
                  <Image src={URL.createObjectURL(item)} />
                  <Button onClick={() => removeImage(item)} component="label">
                    Remover
                  </Button>
                </SPreview>
              )
            })}
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
          error={!!formValidate.title}
          margin="normal"
          id="standard-error-helper-text"
          label="Nome"
          name="title"
          value={form.title || ''}
          onChange={handleChange}
          helperText={formValidate.title || ''}
          disabled={loading}
        />

        <TextField
          fullWidth
          multiline
          size="small"
          error={!!formValidate.description}
          margin="normal"
          name="description"
          label="Descrição"
          type="text"
          id="standard-error-helper-text"
          value={form.description || ''}
          onChange={handleChange}
          helperText={formValidate.description || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.price}
          margin="normal"
          name="price"
          label="Preço"
          type="text"
          id="standard-error-helper-text"
          inputProps={{ maxLength: 8 }}
          value={getMoney(form.price) || ''}
          onChange={handleChange}
          helperText={formValidate.price || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.promotion}
          margin="normal"
          id="standard-error-helper-text"
          label="Promoção"
          name="promotion"
          value={getMoney(form.promotion) || ''}
          onChange={handleChange}
          helperText={formValidate.promotion || ''}
          disabled={loading}
          inputProps={{ maxLength: 8 }}
        />

        <SFormControl error={form.category === 0}>
          <InputLabel>Categoria</InputLabel>
          <Select
            name="category"
            label="Categoria"
            inputProps={{
              name: 'category',
              id: 'outlined-native-simple'
            }}
            value={form.category || '0'}
            onChange={handleChange}
            disabled={loading}
          >
            <MenuItem value="0">selecione</MenuItem>
            {categories?.map(({ id, name }, i) => (
              <MenuItem key={i} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>{formValidate.category || ''}</FormHelperText>
        </SFormControl>

        <SFormControl>
          <TextField
            error={!!formValidate.quantity}
            id="standard-error-helper-text"
            label="Quantidade"
            name="quantity"
            value={form.quantity || ''}
            onChange={handleChange}
            helperText={formValidate.quantity || ''}
            disabled={loading}
            type="number"
            inputProps={{ min: 0, max: 999 }}
          />
        </SFormControl>

        <SFormControl>
          <TextField
            error={!!formValidate.height}
            id="standard-error-helper-text"
            label="Altura(cm)"
            name="height"
            value={form.height || ''}
            onChange={handleChange}
            helperText={formValidate.height || ''}
            disabled={loading}
            type="number"
            inputProps={{ min: 0, max: 999 }}
          />
        </SFormControl>

        <SFormControl>
          <TextField
            error={!!formValidate.width}
            id="standard-error-helper-text"
            label="Largura(cm)"
            name="width"
            value={form.width || ''}
            onChange={handleChange}
            helperText={formValidate.width || ''}
            disabled={loading}
            type="number"
            inputProps={{ min: 0, max: 999 }}
          />
        </SFormControl>

        <SFormControl>
          <TextField
            error={!!formValidate.depth}
            id="standard-error-helper-text"
            label="Profundidade(cm)"
            name="depth"
            value={form.depth || ''}
            onChange={handleChange}
            helperText={formValidate.depth || ''}
            disabled={loading}
            type="number"
            inputProps={{ min: 0, max: 999 }}
          />
        </SFormControl>

        <SFormControl>
          <TextField
            error={!!formValidate.weight}
            id="standard-error-helper-text"
            label="Peso(g)"
            name="weight"
            value={form.weight || ''}
            onChange={handleChange}
            helperText={formValidate.weight || ''}
            disabled={loading}
            type="number"
            inputProps={{ min: 0, max: 999 }}
          />
        </SFormControl>

        <SFormControl>
          <InputLabel>Frete grátis</InputLabel>
          <Select
            id="freeShipping"
            name="freeShipping"
            value={form.freeShipping || ''}
            label="Frete grátis"
            onChange={handleChange}
          >
            <MenuItem value="0">Não</MenuItem>
            <MenuItem value="1">Sim</MenuItem>
          </Select>
          <FormHelperText error>
            {formValidate.freeShipping || ''}
          </FormHelperText>
        </SFormControl>

        <TextField
          fullWidth
          className="form-control"
          size="small"
          error={!!formValidate.sku}
          margin="normal"
          id="standard-error-helper-text"
          label="SKU"
          name="sku"
          value={form.sku || ''}
          onChange={handleChange}
          helperText={formValidate.sku || ''}
          disabled={loading}
        />

        <SButton
          fullWidth
          type="submit"
          disabled={isNotValid(form, formValidate)}
          onClick={submitForm}
        >
          Cadastrar
        </SButton>
      </form>
    </SBox>
  )
}

export default FormProductRegister
