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
  codigofuncionario: any;

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.remover(this.codigofuncionario)
      },
    },
  ];

  setCodigo(codigo:any){ 
    this.codigofuncionario = codigo
  }


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

  

  
  remover(funcionario:any){
    this.isLoading = true;
    fetch('http://localhost/xampp/exercicio/funcionario/remover_funcionario.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(funcionario)
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response["mensagem"]);
      this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  atualizar(codigo:any){
    this.isLoading = true;
    fetch('http://localhost/xampp/exercicio/funcionario/atualizar_funcionario.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CodFun: codigo})
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response["mensagem"]);
      this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  inserir(codigo:any){
    this.isLoading = true;
    fetch('http://localhost/xampp/exercicio/funcionario/atualizar_funcionario.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CodFun: codigo})
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response["mensagem"]);
      this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }




}



