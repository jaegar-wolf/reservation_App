import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity("service")
export class _Service{
    @PrimaryGeneratedColumn()
    service_id: number;

    @Column({ length: 255, unique:true })
    name_service: string;

    @Column()
    price: number

    @Column()
    time: number
}