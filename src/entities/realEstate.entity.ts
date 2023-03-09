import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Category } from './category.entity';

@Entity('real_estate')
export class RealEstate {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column({ default: false })
	sold: boolean;

	@Column({ type: 'decimal', precision: 12, scale: 2 })
	value: number | string;

	@Column({ type: 'integer' })
	size: number;

	@CreateDateColumn({ type: 'date' })
	createdAt: Date | string;

	@UpdateDateColumn({ type: 'date' })
	updatedAt: Date | string;

	@OneToOne(() => Address)
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Category)
	@JoinColumn()
	category: Category;
}
