import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private userRepo: Repository<Product>
  ){

  }

  create(createProductDto: CreateProductDto) {
    if (createProductDto === undefined || createProductDto.quantity === null) {
      createProductDto.quantity = 0;
    }
    return this.userRepo.save([createProductDto]);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findBy({id:id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    if (updateProductDto === undefined || updateProductDto.quantity === null) {
      updateProductDto.quantity = 0;
    }
    return this.userRepo.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
