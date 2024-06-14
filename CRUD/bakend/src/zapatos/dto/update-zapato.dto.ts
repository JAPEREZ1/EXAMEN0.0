// create-zapato.dto.ts
export class CreateZapatoDto {
    modelo: string;
    talla: number;
    color: string;
  }
  
  // update-zapato.dto.ts
  import { PartialType } from '@nestjs/mapped-types';
  import { CreateZapatoDto } from './create-zapato.dto';
  
  export class UpdateZapatoDto extends PartialType(CreateZapatoDto) {}
  