# SHOPPING CART FRONTEND
### Interface para consumir uma API de carrinho de compras
### Deploy rodando [aqui](https://leodhb.github.io/shopping-cart-frontend)

### 1. Como roda essa bagaça?

    git clone https://github.com/leodhb/shopping-cart-frontend
    cd shopping-cart-frontend
    npm i
    npm start
    
 O projeto está acessando a API remota. Caso queira usar com o backend em rede local - ou em outro ip - basta alterar a URL no arquivo _/src/services/api.js_
 
 ### 2. Funções
  - Listar produtos
  - Criar carrinho ou pegar o carrinho existente, baseado no id do localStorage
  - Adicionar produtos ao carrinho
  - Aumentar ou diminuir quantidade dos produtos do carrinho
  - Remover produtos do carrinho
  
  ### 3. Testes
  O frontend utiliza o Cypress para realizar os testes e2e, simulando a experiência de um usuário humano
   
  ### 4. Deploy
  O frontend usa a biblioteca do Github Pages para realizar o deploy no próprio repositório, em uma branch separada. Não estando integrado a um pipeline CI/CD

