export class user{
    id?:number;
    username:string;
    password:string;
    email:string;

    constructor(username:string,password:string,email:string){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}