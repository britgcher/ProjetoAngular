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
  produtos = [
    { 'id': 0, 'nome': 'PS5',  'preco': 4000},
    { 'id': 1, 'nome': 'PS4',  'preco': 2000},
    { 'id': 2, 'nome': 'SuperNes',  'preco': 250},
    { 'id': 3, 'nome': 'Polistation',  'preco': 800},
    { 'id': 4, 'nome': 'Raspberry',  'preco': 150},
  ]
}
