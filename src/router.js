const express= require('express');
const router= express.Router();

const users= [
    {
        id: 1,
        nome: 'John',
        email: 'usuario@test.com',
        password: 1234
    }
];

// GET
router.get('/', (req, res)=>{

    res.json({
       users
   })
})



// POST
router.post('/login', (req, res)=>{

    const {email, password}= req.body;

    const user=  users.find((user)=>{ return user.email === email && user.password === password })

    if (user){
        res.status(200).json(user);

    }else{
        res.status(401).json({"message": "Credenciais Inválidas"});
    }
})


module.exports= router;