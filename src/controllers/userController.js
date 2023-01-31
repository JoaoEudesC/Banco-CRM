const userController = {}
const Bcrypt = require("bcrypt")
const UserSchema = require("../models/userSchema")



// Rota que irá pegar todos os usuários do banco de dados cadastrados(READ - GET)
userController.getAll =  (req ,res) =>{
    UserSchema.find(function(err , users){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(200).send(users)
    })
}

// Rota que irá fazer o metodo post para a criação de um novo usuário(POST) com a utilização do bcrypt( portando há duas maneiras de se utilizar o bcryptt)


userController.createUser = async (req , res)=>{

    const hashedPassword = Bcrypt.hashSync(req.body.Password, 10);
    req.body.Password = hashedPassword

    try{

        const newUser = new UserSchema(req.body)
        const savedUser = await newUser.save();

        res.status(201).json({
            statusCode:201,
            message:"User adicionado com sucesso",
            data:{
                savedUser
            }
        })
    } catch(err){
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }

};



//Rota que irá fazer  update do Usuário ja existente(UPDATE - PUT)

userController.updateUserById = async(req , res) =>{
    try{
        const user = await UserSchema.findByIdAndUpdate(req.params.id , req.body);

        res.status(200).json({
            statusCode: 200,
            message: "User atualizada com sucesso",
            data:{
                user,
            },
        });
    }catch(err){
        console.log(err);
    }
};


//Rota que irá apagar o usuário do banco de dados(DELETE)

userController.deleteUserById = async(req, res)=>{
    try{
        await UserSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            statusCode:200,
            mensagem: "User deletada com sucesso",
        });
    }catch(err){
        res.status(400).json({
            statusCode: 400,
            message:err.message,
        });
    }
};




//Rota de teste
userController.Teste =  (req , res) =>{
    res.send("Working teste")
}




module.exports = userController