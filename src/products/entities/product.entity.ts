import { Movement } from "src/movements/entities/movement.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, IntegerType, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductType, (productType) => productType.product)
    productType: ProductType;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at

    @OneToMany(() => Movement, (movement) => movement.product)
    movement: Movement[]
}
