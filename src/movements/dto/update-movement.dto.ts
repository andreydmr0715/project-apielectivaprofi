import { PartialType } from '@nestjs/mapped-types';
import { CreateMovementDto } from './create-movement.dto';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class UpdateMovementDto extends PartialType(CreateMovementDto) {
    
    @Column()
    @IsNotEmpty({message: "debe diligenciar el id del producto"})
    product_id: number;

    @IsNotEmpty({message: "debe diligenciar el id del tipo de movimiento"})
    movement_type_id: number;

    quantity: number;
    
}
