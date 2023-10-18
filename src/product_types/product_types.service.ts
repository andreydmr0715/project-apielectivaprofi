import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { ProductType } from './entities/product_type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductType)
    private userRepo: Repository<ProductType>
  ){

  }

  create(createProductTypeDto: CreateProductTypeDto) {
    return this.userRepo.save([createProductTypeDto]);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findBy({id:id});
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.userRepo.update(id, updateProductTypeDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
