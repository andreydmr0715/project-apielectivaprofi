import { Test, TestingModule } from '@nestjs/testing';
import { MovementTypesController } from './movement_types.controller';
import { MovementTypesService } from './movement_types.service';

describe('MovementTypesController', () => {
  let controller: MovementTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementTypesController],
      providers: [MovementTypesService],
    }).compile();

    controller = module.get<MovementTypesController>(MovementTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
