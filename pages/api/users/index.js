import {users} from '../../../userData';
export default function handler(req,res){
    if(req.method === "GET"){
        res.status(200).json(users)
    }else if(req.method === "POST"){
        const user = req.body.user;
        newUser = {
            id: new Date(),
            name : user,
        }
        users.push(newUser)
        res.status(201).json(users)
    }
}