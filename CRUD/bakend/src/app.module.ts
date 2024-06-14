import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZapatosModule } from './zapatos/zapatos.module';
import { ZapatosModule } from './zapatos/zapatos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'zapatos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ZapatosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
