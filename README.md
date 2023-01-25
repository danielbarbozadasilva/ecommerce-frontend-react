# **Reactjs Frontend PrimeTech E-commerce**
## **Escopo do produto**
O Projeto PrimeTech E-commerce é um Sistema web de comércio eletrônico que tem o intuito de facilitar a compra e venda de produtos. Todas as suas funcionalidades foram pensadas e elaboradas para proporcionar facilidade e comodidade aos usuários da plataforma.

O Sistema tem o objetivo de listar os produtos e efetuar o gerenciamento destes. Possibilitando ao administrador o controle do estoque. O cliente poderá consultar, comprar e avaliar produtos. O Sistema garante o total controle dos registros de solicitações, transações, formas de pagamento, avaliações e entregas. 

Os usuários do sistema são o Cliente e o Administrador. Todos possuem acesso ao sistema e a seu respectivo espaço. Além disso o Sistema conta com uma tela inicial que permite ao público navegar de modo simples através de filtros entre as categorias, produtos e avaliações.

A API foi desenvolvida utilizando o NodeJs, ExpressJs e Banco de dados MongoDB. Foi realizada a integração com o PagSeguro. Documentação utilizando o Swagger. Testes unitários e de integração utilizando o Jest e Supertest. E pode ser consultada no link abaixo:
```
https://github.com/danielbarbozadasilva/ecommerce-nodejs-api
```
<br/>
<br/>

## **Instalação**
Clone o repositório na pasta de sua preferência.
```
https://github.com/danielbarbozadasilva/ecommerce-frontend-react
```

Abra a pasta do repositório clonado, e crie um arquivo ".env", exemplo:
```
REACT_APP_API=http://localhost:3011
REACT_APP_VERSION=/v1
REACT_APP_TOKEN_KEY=exemplo
```

Abra a pasta do repositório clonado, e instale as dependências do projeto através do comando:
```
yarn install
```

Execute o comando para rodar o projeto:
```
yarn start
```
<br/>


## **Requisitos funcionais**
<br/>

RF001 – O sistema deve controlar a autenticação dos usuários.

RF002 – O sistema deve manter cadastro de clientes.

RF003 – O sistema deve manter solicitações.

RF004 – O sistema deve alterar o status de solicitações.

RF005 – O sistema deve enviar e-mail confirmando a mudança de status nas etapas da venda.

RF006 – O sistema deve filtrar os clientes por nome ou telefone.

RF007 – O sistema deve manter clientes.

RF008 – O sistema deve manter produtos.

RF009 – O sistema deve manter categorias.

RF010 – O sistema deve favoritar produtos.

RF011 – O sistema deve controlar a venda de produtos.

RF012 – O sistema deve filtrar os produtos por categoria, nome e descrição.

RF013 – O sistema deve listar os produtos por ordem alfabética ou ordem de preço.

RF014 – O sistema deve calcular o valor de entrega dos produtos.

<br/>
<br/>

## **Requisitos não funcionais**
<br/>

| Identificação | Classificação | Descrição |
| --- | --- | --- |
|RNF001   |Implementação     | O back-end do sistema deve ser desenvolvido em NodeJs e ExpressJs.    |
|RNF002   |Usabilidade     | O sistema deve integrar-se ao PagSeguro.    |
|RNF003   |Implementação     | O front-end do sistema deve ser desenvolvido em ReactJs.    |
|RNF004   |Implementação     | O banco de dados a ser utilizado é o MongoDB.     |
|RNF005   |Implementação     | O sistema deve funcionar em Sistemas Operacionais Windows e Linux.    |
|  |  |  |

<br/>
<br/>

## **Regras de negócio**
<br/>

| Identificação | Classificação | Descrição |
| --- | --- | --- |
|RN001   |Controle de acesso     |Os acessos permitidos ao sistema serão: Administrador e Cliente. O usuário anônimo terá acesso apenas ao portal do site.    |
|RN002   |Recuperação de senha    | Para recuperar a senha, o Cliente deverá informar o token recebido por e-mail.     |
|RN003   |Controle de veracidade      | Para que um produto possa ser vendido, este deverá estar cadastrado no sistema.   |
|RN004   |Limite de ação     | Somente o Administrador terá permissão para incluir e alterar as categorias no sistema.    |
|RN005   |Aviso de quantidade       | O sistema notificará o Administrador caso a quantidade de um ou mais produtos seja inferior a 3 (três) unidades.   |
|RN006   |Limite de ação     | Somente o Administrador terá permissão para incluir e alterar os produtos no sistema.   |
|RN007   |Limite de ação     | O Cliente poderá visualizar apenas os dados da sua conta. Tais como: solicitações, avaliações e histórico de compras.  |
|RN008   |Limite de ação     | Apenas o Administrador poderá visualizar informações de todos os clientes, suas respectivas contas, solicitações e histórico de vendas.    |
|  |  |  |

<br/>
<br/>

## **Lista de atores e casos de uso**
<br/>

## Lista de atores que interagem com o sistema:
* Administrador
* Cliente
* Anônimo
<br/>
<br/>

## Lista de Casos de Uso:
<br/>

1 - Fechar compra

2 - Registrar movimentação

3 - Realizar Login

4 - Manter produtos

5 - Manter clientes

6 - Manter categorias

7 - Manter solicitações

8 - Pesquisar produtos    

9 - Visualizar estoque

10 - Gerenciar reposição de produto

<br/>
<br/>

> ## Licença
- Licença GPLv3
<br/>
<br/>
<br/>

> ## Metodologias e Padrões
* Responsive Layout
* Conventional Commits
* GitFlow
<br/>
<br/>
<br/>

> ## Bibliotecas e Ferramentas
* React
* Pagseguro
* Reach Router
* Styled-components
* Axios
* Git
* Eslint
* Material UI
* React-icons
* React-redux-toastr
* React-toast
* React-bootstrap
* Redux-multi
* Redux-thunk
* React-helmet
<br/>
<br/>
<br/>

> ## **Telas**
<br/>

## **Portal - Tela Inicial**
<br/>
<img src="./src/assets/img/prints/7.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de login**
<br/>
<img src="./src/assets/img/prints/8.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Cliente - Recuperar senha**
<br/>
<img src="./src/assets/img/prints/20.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Redefinir senha**
<br/>
<img src="./src/assets/img/prints/21.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de cadastro**
<br/>
<img src="./src/assets/img/prints/9.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela detalhes do produto**
<br/>
<img src="./src/assets/img/prints/10.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de carrinho**
<br/>
<img src="./src/assets/img/prints/16.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Finalizar pedido**
<br/>
<img src="./src/assets/img/prints/17.png" alt=""/>
<br/>
<br/>
<br/>
<br/>


## **Portal - Pedido concluído**
<br/>
<img src="./src/assets/img/prints/18.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Imprimir boleto**
<br/>
<img src="./src/assets/img/prints/19.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Cliente - Atualizar cadastro**
<br/>
<img src="./src/assets/img/prints/11.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Cliente - listar pedidos**
<br/>
<img src="./src/assets/img/prints/12.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Cliente - listar os produtos por pedido**
<br/>
<img src="./src/assets/img/prints/13.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Cliente - listar os dados de entrega por pedido**
<br/>
<img src="./src/assets/img/prints/14.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Cliente - Buscar por pedidos**
<br/>
<img src="./src/assets/img/prints/15.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar pedidos dos clientes**
<br/>
<img src="./src/assets/img/prints/22.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar produtos referentes aos pedidos**
<br/>
<img src="./src/assets/img/prints/23.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar dados do cliente que efetuou o pedido**
<br/>
<img src="./src/assets/img/prints/24.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar dados de entrega do pedido**
<br/>
<img src="./src/assets/img/prints/25.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Buscar por um pedido específico**
<br/>
<img src="./src/assets/img/prints/26.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar categorias cadastradas**
<br/>
<img src="./src/assets/img/prints/27.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar produtos referentes a categoria**
<br/>
<img src="./src/assets/img/prints/28.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Cadastrar nova categoria**
<br/>
<img src="./src/assets/img/prints/30.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Editar categoria**
<br/>
<img src="./src/assets/img/prints/29.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Remover a categoria e os seus respectivos produtos**
<br/>
<img src="./src/assets/img/prints/31.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar produtos cadastrados**
<br/>
<img src="./src/assets/img/prints/32.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Cadastrar novo produto**
<br/>
<img src="./src/assets/img/prints/33.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Editar produto**
<br/>
<img src="./src/assets/img/prints/34.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Excluir produto**
<br/>
<img src="./src/assets/img/prints/35.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Buscar por produto**
<br/>
<img src="./src/assets/img/prints/36.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar clientes cadastrados**
<br/>
<img src="./src/assets/img/prints/37.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar endereço do cliente**
<br/>
<img src="./src/assets/img/prints/38.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Excluir cliente**
<br/>
<img src="./src/assets/img/prints/39.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Buscar por cliente**
<br/>
<img src="./src/assets/img/prints/40.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Listar avaliações**
<br/>
<img src="./src/assets/img/prints/41.png" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Excluir avaliação**
<br/>
<img src="./src/assets/img/prints/42.png" alt=""/>
<br/>
<br/>
<br/>
<br/>


> ## **Transações**
<br/>

## **Processar pagamento - Cliente**
Ao realizar uma compra o Sistema envia um e-mail notificando o Cliente sobre o processamento do pagamento.

<br/>
<img src="./src/assets/img/prints/1.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Processar pagamento - Administrador**
Quando o Cliente realiza uma compra o Sistema envia um e-mail notificando o administrador sobre o pedido. 

<br/>
<img src="./src/assets/img/prints/2.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Pagamento aprovado - Cliente**
Quando o cliente realiza o pagamento e este é aprovado pelo PagSeguro. O Sistema envia um e-mail ao Cliente notificando que o pedido foi pago.

<br/>
<img src="./src/assets/img/prints/6.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Pagamento aprovado - Administrador**
Quando o pagamento é aprovado pelo PagSeguro. O Sistema envia um e-mail ao Administrador para que este separe e envie os produtos referentes ao pedido.

<br/>
<img src="./src/assets/img/prints/3.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Pagamento cancelado - Cliente**
Quando o cliente não realiza o pagamento, o Sistema envia um e-mail ao Cliente notificando que o seu pedido não foi pago, e por isso foi cancelado.

<br/>
<img src="./src/assets/img/prints/4.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Envio do pedido - Cliente**
Quando o Administrador envia o pedido para a transportadora. O Sistema notifica o Cliente e informa o código de rastreamento.

<br/>
<img src="./src/assets/img/prints/5.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>
