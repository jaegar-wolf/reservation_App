import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { TypeUser } from './typeuser.entity';

@Entity("utilisateur")
export class User{
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 255 })
    firstname:string;

    @Column({ length: 255 })
    lastname:string;
    
    @Column({ length: 12 })
    phone:string;

    @Column({ length: 255, unique:true })
    email:string;

    @Column('text', { select: false})
    password:string;

    @OneToOne(type => TypeUser, role => role.id)
    @JoinColumn({name:'typeuser_id'})
    typeuser:TypeUser;

}
