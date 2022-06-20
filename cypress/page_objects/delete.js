class DeleteBoard{

    get board(){
        return cy.get('.vs-c-list__btn').eq(3)
    }
    get configureBtn(){
        return cy.get('a[class="vs-c-site-logo"]').eq(8)
    }
    get deleteBtn(){
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced')
    }

   
    get yesButton(){
        return cy.get('button[name="save-btn"]')
    }

    get getOrganization(){
        return cy.get('.vs-c-media__object').eq(0)
    }
    get boardLength(){
        return cy.get('.vs-c-organization__body')
    }

    get boardsModal() {
        return cy.get(".vs-c-modal__body");
      }
    get okBtn() {
        return this.boardsModal.find("button").last();
      }
    get projectMenu(){
        return cy.get('.vs-l-project__nav')
    }

    delete(){
        this.board.click()
        this.configureBtn.click()
        this.deleteBtn.click()
        this.yesButton.click()
        this.okBtn.click()
        
    }
    

}
export const deletePage = new DeleteBoard()