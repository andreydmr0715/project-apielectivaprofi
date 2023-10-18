import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class CreateMovementTypeDto {
    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    @IsNotEmpty({message: "Debe si o si digitar la descripci+on del tipo de movimiento"})
    description: string
}
