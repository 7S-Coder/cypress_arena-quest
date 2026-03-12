/// <reference types="cypress" />


describe('Arrivé sur le jeu', ()=>{
    it('Lancer un combat', ()=>{
      cy.visit('https://mini-rpg-arana-quest-upgrade.vercel.app/')
      cy.get('.center-top > .btn').click()
    })
})