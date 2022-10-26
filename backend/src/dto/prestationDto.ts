import { User } from "src/entity/user.entity";

export class PrestationDto {
    id: number;
    dateStart: Date;
    status: number
    user: User
}