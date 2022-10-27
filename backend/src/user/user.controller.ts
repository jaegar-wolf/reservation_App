import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { CreateUserDto } from 'src/dto/user/createUserDto';
import { UpdateUserDto } from 'src/dto/user/updateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor (private readonly service: UserService){}

    @Get()
    async index(){
        return await this.service.findAll();
    }

    @Get('/myInfo')
    async getMyInfo(@Request() req: any){
        const user = req.user
        return await this.service.getUser(user.id)
    }

    @Public()
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.service.createUser(createUserDto);
    }

    @Patch()
    async update(@Request() req: any, @Body() updateUserDto: UpdateUserDto){
        const user = req.user
        return await this.service.updateUser(user.id, updateUserDto)
    }


/*     @Get('myInfo')
    async myInfo(@Request() req:any){
        const user = req.user
        return await this.service.findOne(user._id)
    } */
}
