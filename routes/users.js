import express from 'express';

const router=express.Router();

const users=[
    {
        firstName: "John",
        lastName: "Doe",
        age: 24
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 33
    }
]

router.get('/',(req,res) => {
    console.log(users);
    res.send(users);
});

router.post('/',(req,res) => {
    console.log("POST ROUTE REACHED");

    const user=req.body;

    users.push(user);

    res.send("POST ROUTE REACHED");
})

export default router;