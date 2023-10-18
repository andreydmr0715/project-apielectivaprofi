import { Column } from "typeorm";

export class CreateProductTypeDto {
    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    description: string;
}
