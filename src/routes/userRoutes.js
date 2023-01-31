//config do arquivo router
const express = require("express");
const router = express.Router();

//importação do controller
const userController = require("../controllers/userController")

//funções que são enviadas do controller


//Rota de Teste(GET)
router.get("/teste" , userController.Teste)


//Rota que mostra todos os usuários cadastrados no banco (GET)
router.get("/all" , userController.getAll)

//Rota que irá adicionar usuários no banco (POST)

router.post("/", userController.createUser)

//Rota que irá atualizar um usuário existente no banco de dados(UPDATE - PUT)
router.put("/:id" , userController.updateUserById)


//Rota que irá deletar o usuário do banco de dados (DELETE)

router.delete("/:id" , userController.deleteUserById)






//exportação do modulo router

module.exports = router

