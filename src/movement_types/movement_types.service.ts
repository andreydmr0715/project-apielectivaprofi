import { Injectable } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement_type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement_type.dto';
import { MovementType } from './entities/movement_type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovementTypesService {
  constructor(
    @InjectRepository(MovementType)
    private userRepo: Repository<MovementType>
  ){

  }

  create(createMovementTypeDto: CreateMovementTypeDto) {
    return this.userRepo.save([createMovementTypeDto]);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findBy({id:id});
  }

  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
    return this.userRepo.update(id, updateMovementTypeDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
