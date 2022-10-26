import { TypeUser } from "src/entity/typeuser.entity";

export class UserDto {
    user_id: number;
    firstname:string;
    lastname:string;
    phone:string;
    email:string;
    password:string;
    type:TypeUser;
}