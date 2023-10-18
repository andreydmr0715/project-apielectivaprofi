import { MovementType } from "src/movement_types/entities/movement_type.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, IntegerType, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@Entity()
export class Movement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: "product_id" })
    product: Product;

    @RelationId((movement: Movement) => movement.product)
    @Column({ type: 'integer' })
    product_id: number;

    @ManyToOne(() => MovementType, (movementType) => movementType.id)
    @JoinColumn({ name: "movement_type_id" })
    movementType: MovementType;

    @RelationId((movement: Movement) => movement.product)
    @Column({ type: 'integer' })
    movement_type_id:number;

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at

}
