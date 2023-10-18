import { MovementType } from "src/movement_types/entities/movement_type.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, IntegerType, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Movement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Product, (product) => product.movement)
    product: Product;

    @ManyToOne(() => MovementType, (movementType) => movementType.movement)
    movementType: MovementType;

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at

    

}
