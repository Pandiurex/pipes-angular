import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Pepe';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClientName(): void {
    this.name = 'Romina';
    this.gender = 'female';
  }

  // i18nPlural
  public clients = [
    'Pedro',
    'Maria',
    'Roberto',
    'Cristiano',
    'Angela',
    'Carlos',
    'Michel',
  ];
  public clientsMap = {
    '=0': 'No hay nadie esperando',
    '=1': 'Hay una persona esperando',
    '=2': 'Hay dos clientes esperando',
    other: 'Hay # personas esperando',
  };

  public deleteClient() {
    this.clients.shift();
  }

  public person = {
    name: 'Pedro',
    age: 45,
    address: 'home',
  };

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa'),
        console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
