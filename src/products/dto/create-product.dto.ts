import { IsInt, IsNotEmpty, IsOptional } from "class-validator";
import { Column } from "typeorm";

export class CreateProductDto {
    
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
