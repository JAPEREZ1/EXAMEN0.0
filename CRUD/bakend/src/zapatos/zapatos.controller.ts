import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZapatosService } from './zapatos.service';
import { CreateZapatoDto } from './dto/update-zapato.dto';
import { UpdateZapatoDto } from './dto/update-zapato.dto';

@Controller('zapatos')
export class ZapatosController {
  constructor(private readonly zapatosService: ZapatosService) {}

  @Post()
  create(@Body() createZapatoDto: CreateZapatoDto) {
    return this.zapatosService.create(createZapatoDto);
  }

  @Get()
  findAll() {
    return this.zapatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zapatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZapatoDto: UpdateZapatoDto) {
    return this.zapatosService.update(+id, updateZapatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zapatosService.remove(+id);
  }
}
