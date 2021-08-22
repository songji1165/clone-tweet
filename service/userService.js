import {UserData} from "../model/table.js";

const userService = {
    getUser,
    setUser
}

function getUser(userId){
    return UserData.find(user => user.userId == userId);
}

function setUser(userId, name, img){
    let user;
    if(userId){
        user = new User(userId, name, img);
        UserData.push(user);
    }

    return getUser(user && user.userId);
}

function flagUser(){

}

export default userService;