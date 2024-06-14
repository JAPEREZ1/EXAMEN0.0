import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZapatosService } from './zapatos.service';
import { ZapatosController } from './zapatos.controller';
import { Zapato } from './zapatos.service';


@Module({
  imports: [TypeOrmModule.forFeature([Zapato])],
  controllers: [ZapatosController],
  providers: [ZapatosService],
})
export class ZapatosModule {}
