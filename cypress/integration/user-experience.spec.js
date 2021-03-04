/// <reference types="cypress" />

context('Ações e2e', () => {
  it('Acessado url', () => {
    cy.visit('http://localhost:8080');
  });

  it('Chacando carrinho vazio', () => {
    cy.get('.empty-cart-container')
      .contains('h4', /sua sacola ainda está vazia/i)
      .should('be.visible');
  });

  it('Adicionando produto', () => {
    cy.wait(1500);
    cy.get('.comprar-btn').first().click();

    cy.get('.change-qty-btn').contains('+').click();

    cy.wait(500);

    cy.get('.change-qty-btn').contains('+').click();

    cy.wait(500);

    cy.get('.change-qty-btn').contains('+').click();

    cy.wait(500);

    cy.get('.qty-amount').first().should('contain', '4');
    cy.get('strong.total-text').should('contain', 'R$ 239.60');
  });

  it('Adicionando mais um', () => {
    cy.wait(1500);
    cy.get('.comprar-btn').eq(2).click();
    cy.wait(1000);
    cy.get('.change-qty-btn').last().contains('+').click();
    cy.wait(500);
    cy.get('.qty-amount').eq(1).should('contain', '2');
  });

  it('Adicionando um clicando so no botão comprar', () => {
    cy.wait(1500);
    cy.get('.comprar-btn').eq(1).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(1).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(1).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(1).click();
    cy.wait(1000);
    cy.get('.qty-amount').eq(2).should('contain', '4');
    cy.get('strong.total-text').should('contain', 'R$ 719.00');
  });

  it('Adicionando um além do estoque', () => {
    cy.wait(1500);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.comprar-btn').eq(3).click();
    cy.wait(1000);
    cy.get('.qty-amount').eq(3).should('contain', '2');
  });

  it('Checando preço final', () => {
    cy.wait(1500);
    cy.get('strong.total-text').should('contain', 'R$ 858.80');
  });

  it('Checar quantidade de itens', () => {
    cy.wait(500);
    cy.get('.items-table').find('tr').its('length').should('eq', 4);
  });

  it('Deletar 1 item', () => {
    cy.wait(500);
    cy.get('.delete-product-btn').first().click();
    cy.wait(500);
    cy.get('.items-table').find('tr').its('length').should('eq', 3);
    cy.get('strong.total-text').should('contain', 'R$ 619.20');
  });

  it('Deletar todos os itens', () => {
    cy.wait(500);
    cy.get('.delete-product-btn').first().click();
    cy.wait(500);
    cy.get('.delete-product-btn').first().click();
    cy.wait(500);
    cy.get('.delete-product-btn').first().click();
    cy.wait(500);

    cy.get('.empty-cart-container')
      .contains('h4', /sua sacola ainda está vazia/i)
      .should('be.visible');
  });
});
