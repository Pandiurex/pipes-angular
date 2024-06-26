import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'cristopher';
  public nameUpper: string = 'CRISTOPHER';
  public fullName: string = 'cRiSTOpheR esTrADa';

  public customDate: Date = new Date();
}
