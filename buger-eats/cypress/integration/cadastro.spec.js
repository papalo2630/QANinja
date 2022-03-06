import SignupPage from '../pages/SignupPage'


describe('cadastro', () => {
    it('Usuário deve se tornar um deliver ', () => {
        // possui um espaço há mais.//Isso é um cheack point.

        var deliver = {
            name: 'Paulo',
            cpf: '00011122233',
            email: 'js@gmail.com',
            whatsapp: '999995555',
            address: {
                postalCode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'ap.142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    it('CPF incorreto', () => {       

        var deliver1 = {
            name: 'Paulo',
            cpf: '00073073073AA',
            email: 'js@gmail.com',
            whatsapp: '999995555',
            address: {
                postalCode: '04534011',
                street: 'Rua joaquim Floriano',
                number: '1000',
                details: 'ap.142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
        var signup = new SignupPage()
        signup.go()
        signup.fillForm(deliver1)
        signup.submit()       

        cy.get('.alert-error').should('have.text',"Oops! CPF inválido")

    })
})