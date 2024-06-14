import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zapato } from './zapato.entity';
import { CreateZapatoDto } from './dto/update-zapato.dto';
import { UpdateZapatoDto } from './dto/update-zapato.dto';

@Injectable()
export class ZapatosService {
  constructor(
    @InjectRepository(Zapato)
    private zapatosRepository: Repository<Zapato>,
  ) {}

  create(createZapatoDto: CreateZapatoDto): Promise<Zapato> {
    const zapato = this.zapatosRepository.create(createZapatoDto);
    return this.zapatosRepository.save(zapato);
  }

  findAll(): Promise<Zapato[]> {
    return this.zapatosRepository.find();
  }

  findOne(id: number): Promise<Zapato> {
    return this.zapatosRepository.findOneBy({ id });
  }

  async update(id: number, updateZapatoDto: UpdateZapatoDto): Promise<Zapato> {
    await this.zapatosRepository.update(id, updateZapatoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.zapatosRepository.delete(id);
  }
}
export { Zapato };

