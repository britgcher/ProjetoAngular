import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {
  alunos= [
    /* {} objeto */
   {nome: 'Marcio', telefone: '9999999999',ausente: true},
   {nome: 'Marcos', telefone: '8888888888', ausente: false},
   {nome: 'Luisa', telefone: '7887877877', ausente: false},
   {nome: 'Lucas', telefone: '9988908000',ausente: true},
  ];

/* iteraçao */
}
