import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Column, IntegerType } from 'typeorm';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNotEmpty({message: "Debe diligenciar el id del tipo de producto"})
    product_type_id:number;
    
    @Column({
        length: 15
    })
    description: string;

    @IsInt()
    @IsOptional()
    quantity: number;
}
