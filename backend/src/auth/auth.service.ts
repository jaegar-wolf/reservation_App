import { Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(login: string, pass: string): Promise<any>{
        const user = await this.userService.findUser(login).catch(err => console.log(err))
        if(!user){
            return null
        }
        else if(user.email && await this.match(user.password, pass)){
            return user
        }
        return null;
    }

    async login(user: any){
        const payload = {
            login: user.email, 
            id: user.user_id,
            name: user.firstname, 
        }
        return {
            acces_token: this.jwtService.sign(payload)
        }
    }

    async match(hashedPassword: any, password: string){
        const isMatch = await bcrypt.compare(password, hashedPassword)
        return isMatch
    }
}
