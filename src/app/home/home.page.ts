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
  isLoading: boolean = false;
  funcionarios: any;

  constructor(){
    this.getFuncionarios();
  }

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/xampp/exercicio/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios=response['funcionarios'];
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }
}
