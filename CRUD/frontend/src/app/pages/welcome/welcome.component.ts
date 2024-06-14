import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZapatosComponent } from '../../zapatos/zapatos.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ZapatosComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {}
