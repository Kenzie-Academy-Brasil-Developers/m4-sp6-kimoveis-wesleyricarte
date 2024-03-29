import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { RealEstate } from './realEstate.entity';
import { User } from './user.entity';

@Entity('schedules_users_properties')
export class Schedule {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ type: 'date' })
	date: string;

	@Column({ type: 'time' })
	hour: string;

	@ManyToOne(() => RealEstate)
	@JoinColumn()
	realEstate: RealEstate;

	@ManyToOne(() => User)
	@JoinColumn()
	user: User;
}
