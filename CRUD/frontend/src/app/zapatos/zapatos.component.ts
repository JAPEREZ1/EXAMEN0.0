import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

interface Zapato {
  id: number;
  modelo: string;
  talla: number;
  color: string;
}

@Component({
  selector: 'app-zapatos',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzButtonModule, NzInputModule],
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css']
})
export class ZapatosComponent implements OnInit {
  zapatos: Zapato[] = [];
  modelo: string = '';
  talla: number | undefined; // Use 'undefined' instead of 'null'
  color: string = '';
  idCounter: number = 1;
  editMode: boolean = false;
  zapatoEditando: Zapato | null = null;

  ngOnInit() {
    this.cargarZapatos();
  }

  cargarZapatos() {
    if (typeof localStorage !== 'undefined') {
      const zapatosGuardados = localStorage.getItem('zapatos');
      if (zapatosGuardados) {
        this.zapatos = JSON.parse(zapatosGuardados);
        this.idCounter = this.zapatos.length ? Math.max(...this.zapatos.map(z => z.id)) + 1 : 1;
      }
    } else {
      console.warn('localStorage is not available');
    }
  }

  guardarZapatos() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('zapatos', JSON.stringify(this.zapatos));
    } else {
      console.warn('localStorage is not available');
    }
  }

  agregarZapato() {
    if (this.modelo && this.talla !== undefined && this.color) {
      const nuevoZapato: Zapato = { id: this.idCounter++, modelo: this.modelo, talla: this.talla, color: this.color };
      this.zapatos.push(nuevoZapato);
      this.guardarZapatos();
      this.resetForm();
    }
  }

  editarZapato(zapato: Zapato) {
    this.editMode = true;
    this.zapatoEditando = { ...zapato };
    this.modelo = zapato.modelo;
    this.talla = zapato.talla;
    this.color = zapato.color;
  }

  actualizarZapato() {
    if (this.zapatoEditando) {
      const index = this.zapatos.findIndex(z => z.id === this.zapatoEditando!.id);
      if (index !== -1) {
        this.zapatos[index] = { ...this.zapatoEditando, modelo: this.modelo, talla: this.talla!, color: this.color };
        this.guardarZapatos();
        this.resetForm();
      }
    }
  }

  eliminarZapato(id: number) {
    this.zapatos = this.zapatos.filter(z => z.id !== id);
    this.guardarZapatos();
  }

  resetForm() {
    this.modelo = '';
    this.talla = undefined; 
    this.color = '';
    this.editMode = false;
    this.zapatoEditando = null;
  }
}
