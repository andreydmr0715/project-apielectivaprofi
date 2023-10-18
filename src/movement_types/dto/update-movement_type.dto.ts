import { PartialType } from '@nestjs/mapped-types';
import { CreateMovementTypeDto } from './create-movement_type.dto';
import { Column } from 'typeorm';

export class UpdateMovementTypeDto extends PartialType(CreateMovementTypeDto) {
    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    description: string;
}
