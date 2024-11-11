import React from 'react'
import Home from './page'

describe('Teste componente: <Home />', () => {
  it('Teste H1 Name Home', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home name="Quintiliano QA" />)
    cy.get('#name').should('contain', 'Quintiliano QA')
  })
})