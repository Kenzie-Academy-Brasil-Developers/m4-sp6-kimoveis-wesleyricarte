import { getRounds, hashSync } from 'bcryptjs';
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 45, unique: true })
	email: string;

	@Column({ default: false })
	admin: boolean;

	@Column({ length: 120 })
	password: string;

	@CreateDateColumn({ type: 'date' })
	createdAt: string;

	@UpdateDateColumn({ type: 'date' })
	updatedAt: string;

	@DeleteDateColumn({ type: 'date' })
	deletedAt: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if (!isEncrypted) this.password = hashSync(this.password, 10)
    }

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Array<Schedule>
}
