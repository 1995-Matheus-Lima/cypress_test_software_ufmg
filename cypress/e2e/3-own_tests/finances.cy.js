
const criarTransacao = (description, valor, date) => {
  /* Seleciona o elemento que contem o texto Nova Transação e clica nele */
  cy.contains("Nova Transação").click()
  // Seleciona o Elemento com id Descripton e insere um texto
  cy.get('#description').type(description)
  // Seleciona o elemento com id amount e insere um valor
  cy.get('#amount').type(valor)
  // Seleciona o elemento com id date e insere uma data
  cy.get('#date').type(date)
  //Seleciona o elemento button
  cy.get('button').click()
  //cy.contains('button', 'Salvar').click()

  //Acessa a tabela renderizada e ver se nela existe um elemento com texto freela
  cy.get("tbody tr td.description").should("contain.text", description)
}

const excluirTransacao = (description, value) =>  {
  //Cria transações
  criarTransacao(description,value,"2024-10-08")
  criarTransacao("Freela",500, "2024-10-08")

  //Seleciona somente a transação em description
  // cy.contains(".description",description)
  //   .parent() //Seleciona elemento pai
  //   .find('img') // seleciona o elemento img dentro do site
  //   .click() // clica no elemento

  cy.contains(".description",description)
    .siblings()
    .find('img')
    .click()
  
  //checa de se número de linhas na tabela final é igual a 1
  cy.get('tbody tr').should("have.length", 1)
}

describe('Transações', () =>{

  beforeEach(() =>{
    cy.visit("https://devfinance-agilizei.netlify.app/#")
  }) 

  it('Cadastrar uma entrada', () =>{
    criarTransacao("Freela",500, "2024-10-08")
  })
  it('Cadastrar uma Saida', () =>{
    criarTransacao("cinema",-60, "2024-10-04")
  })
  it("Excluir uma transação cadastrada", () =>{
    excluirTransacao("pão de queijo", -300)
  })
})



