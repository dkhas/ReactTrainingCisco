describe("testing e2e customer filtering", () => {
    it("filter customer using search textbox", () => {
        cy.visit("http://localhost:3000/");
        cy.get('input[placeholder="search by name"]')
            .type("Geller")
            .get('.row')
            .then(rows => {
                expect(rows.length).to.eq(2)
            })
    })
})