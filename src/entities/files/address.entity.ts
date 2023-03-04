import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export class Address {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
