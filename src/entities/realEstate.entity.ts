import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('real_estate')
export class RealEstate {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ default: false })
	sold: boolean;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	value: number | string;

	@Column({ type: 'integer' })
	size: number;

	@CreateDateColumn({ type: 'date' })
	createdAt: Date | string;

	@UpdateDateColumn({ type: 'date' })
	updatedAt: Date | string;
}
