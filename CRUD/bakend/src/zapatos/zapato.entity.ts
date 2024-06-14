import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Zapato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  talla: number;

  @Column()
  color: string;
}
