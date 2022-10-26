import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Prestation } from './prestation.entity';
import { _Service } from './service.entity';

@Entity("prestation_services")
export class PrestationService{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Prestation, presta => presta.id )
    @JoinColumn()
    prestation_id: Prestation;

    @OneToMany(type => _Service, serv => serv.service_id )
    @JoinColumn()
    service_id: _Service

    @Column({default:1})
    quantity: number
}