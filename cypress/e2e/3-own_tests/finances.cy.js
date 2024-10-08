
const criarTransação = (description, valor, date) => {
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
  cy.get("tbody tr td.description").should("have.text", description)
}


describe('Transações', () =>{

  beforeEach(() =>{
    cy.visit("https://devfinance-agilizei.netlify.app/#")
  }) 

  it('Cadstrar uma entrada', () =>{
    criarTransação("Freela",500, "2024-10-08")
  })
  it('Cadstrar uma Saida', () =>{
    criarTransação("cinema",-60, "2024-10-04")
  })
})



