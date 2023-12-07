// etapa Modelo
class UsuarioModel{

    constructor(nome){

    this.nome = nome
    }

}

//visão(view)
class UsuarioView{
    exibirdetalhes(usuario){
        alert(`Nome do usuario: ${usuario.nome}`)
    }
}


//controlador (controller)
class UsuarioController{
    constructor(model, view){
        this.model = model
        this.view = view
    }
    atualizarDetalhes(nome){
        this.model.nome = nome
        this.view.exibirdetalhes(this.model)
    }
}
const usuarioModel = new UsuarioModel("João")
const usuarioView = new UsuarioView()
const usuarioController = new UsuarioController(usuarioModel, usuarioView)

usuarioController.atualizarDetalhes("Maria")
