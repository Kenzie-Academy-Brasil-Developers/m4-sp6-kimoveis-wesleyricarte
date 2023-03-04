import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('real_estate')
export class RealEstate {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
