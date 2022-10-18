describe("testing e2e customer delete", () => {
    it("delete customer on button click", () => {
        cy.visit("http://localhost:3000/");
        cy.get('button')
            .eq(2)
            .click()
            .get('.row')
            .then(rows => {
                expect(rows.length).to.eq(5)
            })
    })
})