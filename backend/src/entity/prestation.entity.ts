import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity("prestation")
export class Prestation{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateStart: Date;

    @Column()
    status: number

    @ManyToOne(type => User, role => role.user_id)
    @JoinColumn()
    user: User
}