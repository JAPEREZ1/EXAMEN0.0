import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';

interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NzCardModule,
    NzGridModule,
    NzImageModule,
  ],
  template: `
    <div nz-row [nzGutter]="16">
      <div nz-col [nzSpan]="6" *ngFor="let drink of drinks">
        <nz-card nzHoverable style="width:240px" [nzCover]="coverTemplate">
          <nz-card-meta [nzTitle]="drink.strDrink"></nz-card-meta>
        </nz-card>
        <ng-template #coverTemplate>
          <img [src]="drink.strDrinkThumb" />
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      nz-card {
        margin-bottom: 16px;
      }
    `,
  ],
})
export class AppComponent {
  drinks: Drink[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<{ drinks: Drink[] }>(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
      )
      .subscribe((response) => {
        this.drinks = response.drinks;
        console.log(this.drinks);
      });
  }
}
