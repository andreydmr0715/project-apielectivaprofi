import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypesModule } from './product_types/product_types.module';
import { ProductsModule } from './products/products.module';
import { MovementsModule } from './movements/movements.module';
import { MovementTypesModule } from './movement_types/movement_types.module';
import { Product } from './products/entities/product.entity';
import { ProductType } from './product_types/entities/product_type.entity';
import { Movement } from './movements/entities/movement.entity';
import { MovementType } from './movement_types/entities/movement_type.entity';

@Module({
  imports: [ProductTypesModule,
    ProductsModule,
    MovementsModule,
    MovementTypesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'andreydmr123',
      database: 'postgres',
      entities: [
        Product, ProductType, Movement, MovementType
      ],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
