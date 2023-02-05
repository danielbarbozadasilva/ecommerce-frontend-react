import React from 'react'
import { SContainerHeader, HeadLine, TextHeadLine } from './styled'

const HeadCart = () => {
  return (
    <>
      <SContainerHeader>
        <HeadLine>
          <TextHeadLine>Imagem</TextHeadLine>
        </HeadLine>
        <HeadLine>
          <TextHeadLine>Título</TextHeadLine>
        </HeadLine>
        <HeadLine>
          <TextHeadLine>Quantidade</TextHeadLine>
        </HeadLine>
        <HeadLine>
          <TextHeadLine>Preço Unitário</TextHeadLine>
        </HeadLine>
        <HeadLine>
          <TextHeadLine>Preço Total</TextHeadLine>
        </HeadLine>
        <HeadLine>
          <TextHeadLine>Excluir</TextHeadLine>
        </HeadLine>
      </SContainerHeader>
    </>
  )
}

export default HeadCart
