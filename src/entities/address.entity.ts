import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RealEstate } from './realEstate.entity';

@Entity('addresses')
export class Address {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ length: 45 })
	street: string;

	@Column({ length: 8 })
	zipCode: string;

	@Column({ length: 6, nullable: true })
	number: string;

	@Column({ length: 20 })
	city: string;

	@Column({ length: 2 })
	state: string;

	@OneToMany(() => RealEstate, (realEstate) => realEstate.address)
	realEstate: Array<RealEstate>;
}
