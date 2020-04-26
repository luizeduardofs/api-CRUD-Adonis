'use strict'

const Contacts = use('App/Models/Contact')

class ContactController {
    async index(){
        const contatos = await Contacts.all()
        return contatos
    }
    async store({ request, response }){
        const data = request.only([
            'name', 'email', 'age', 'salary'
        ])
        const contatos = await Contacts.create(data)
        return 'Contato criado com sucesso!'
    }
    async update({ request, response, params }){
        const contato = await Contacts.findOrFail(params.id)
        const data = request.only(['name', 'email', 'age', 'salary'])

        contato.merge(data)
        return contato
    }
    async destroy({ request, response, params }){
        const contato = await Contacts.findOrFail(params.id)
        await contato.delete()
        return 'Contado Deletado...'
    }
}

module.exports = ContactController
