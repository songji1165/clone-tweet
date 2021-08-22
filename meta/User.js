import {UserData} from "../model/table";

class User {
    id;
    userId;
    name;
    img;

    constructor(userId, name, img) {
        this.id = UserData.length;
        this.userId = userId;
        this.name = name;
        this.img = img;
    }

}

export default User