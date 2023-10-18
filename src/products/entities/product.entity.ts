import { Movement } from "src/movements/entities/movement.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, IntegerType, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProductType, (productType) => productType.id)
    @JoinColumn({ name: "product_type_id" })
    productType: ProductType

    @Column({ type: 'integer'})
    product_type_id: number; 

    @Column()
    description: string;

    @Column({nullable: true})
    quantity: number;

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at

    @OneToMany(() => Movement, (movement) => movement.product_id)
    movement: Movement[]
}
