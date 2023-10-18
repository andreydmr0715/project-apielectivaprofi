import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Movement } from './entities/movement.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovementsService {
  constructor(
    @InjectRepository(Movement)
    private userRepo: Repository<Movement>
  ){

  }

  create(createMovementDto: CreateMovementDto) {
    return this.userRepo.save([createMovementDto]);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findBy({id:id});
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return this.userRepo.update(id, updateMovementDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
