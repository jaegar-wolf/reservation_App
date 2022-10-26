import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user/createUserDto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SALT_WORK_FACTOR } from 'src/auth/constants';
import { UpdateUserDto } from 'src/dto/user/updateUserDto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findUser(login: string): Promise<User>{
        return await this.usersRepository.findOne({ where: { "email": login }, select: ['user_id', 'firstname', 'lastname', 'email', 'password', 'phone', 'typeuser']});
    }

    async getUser(id: number): Promise<User> {
        return await this.usersRepository.findOne({ where: {"user_id": id}})
    }

    async createUser(user: CreateUserDto): Promise<User> {
        if(user.password){
            const password= user.password;
            const saltOrRounds = SALT_WORK_FACTOR;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }
        return await this.usersRepository.save(user)
    }

    async updateUser(id: number, user: UpdateUserDto): Promise<User> {
        if(user.password){
            const password= user.password;
            const saltOrRounds = SALT_WORK_FACTOR;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }

        const result = await this.usersRepository.createQueryBuilder()
            .update(user)
            .where({user_id: id})
            .returning('*')
            .execute()

        return result.raw[0]
    }
}
