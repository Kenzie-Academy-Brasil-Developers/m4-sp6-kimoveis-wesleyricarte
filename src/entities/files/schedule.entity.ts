import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedules_users_properties')
export class Schedule {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
