import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTypeDto } from './create-product_type.dto';
import { Column } from 'typeorm';

export class UpdateProductTypeDto extends PartialType(CreateProductTypeDto) {
    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    description: string;
}
