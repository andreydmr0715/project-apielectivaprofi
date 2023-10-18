import { Movement } from "src/movements/entities/movement.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    description: string;

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at

    @OneToMany(() => Product, (product) => product.product_type_id)
    product: Product[]
    
}
