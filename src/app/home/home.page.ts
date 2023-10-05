// Importando módulos necessários
import { CommonModule } from '@angular/common'; // Módulo comum do Angular
import { Component } from '@angular/core'; // Componente do Angular
import { IonicModule } from '@ionic/angular'; // Módulo de UI do Ionic
import { AlertController } from '@ionic/angular';

@Component({
  // Nome do seletor HTML para este componente
  selector: 'app-home',

  // Caminho para o arquivo HTML do componente
  templateUrl: 'home.page.html',

  // Estilos CSS específicos para este componente
  styleUrls: ['home.page.scss'],

  // Define se este componente é independente (standalone)
  standalone: true,

  // Importação de módulos necessários
  imports: [IonicModule, CommonModule],
})

export class HomePage {
  // Propriedades do componente
  isLoading: boolean = false; // Indicador de carregamento
  funcionarios: any; // Lista de funcionários
  codigoFuncionario: any; // Código do funcionário selecionado
  modalAtualizar = false; // Indicador de abertura do modal
  modalInserir= false;
  

    // Construtor do componente
    constructor(public alertController: AlertController) {
      this.listarFuncionarios(); // Inicia a listagem de funcionários
    }

     // Função para definir o código do funcionário selecionado
  setCodigo(codigo: any) {
    this.codigoFuncionario = codigo;
  }

  //////////////////////////////////////////////////////////////////////////////////

 // Função para listar funcionários
 listarFuncionarios() {
  this.isLoading = true; // Indica que está carregando
  fetch('http://localhost/xampp/exercicio/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response['funcionarios']; // Define a lista de funcionários
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(() => {
      this.isLoading = false; // Indica que terminou o carregamento
    });
}
  
//////////////////////////////////////////////////////////////////
  
  //Excluir Funcionario

  // Função para remover um funcionário
  remover(funcionario: any) {
    this.isLoading = true;
    
    fetch('http://localhost/xampp/exercicio/funcionario/remover_funcionario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario),
    })
    .then(response => response.json())
    .then(response => {
      console.log(response[":)"]);
      this.listarFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(() => {
      this.isLoading = false;
    });
  }


  //interligar
  async exibirAlertaExclusao(codigoFuncionario: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir esse funcionário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.remover(codigoFuncionario);
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  /////////////////////////////////////////////////////////////////
  
  // Atualizar Funcionario

  // Função para atualizar um funcionário
  atualizar(codigo: any, novoNome: string, novoCargo: string, novaCidade: string, novoFone: string) {
    this.isLoading = true;
    
    fetch('http://localhost/xampp/exercicio/funcionario/atualizar_funcionario.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ CodFun: codigo, Nome: novoNome, Cargo: novoCargo, Cidade: novaCidade, Fone: novoFone}),
        }
    )
    .then(response => response.json())
    .then(response => {
        console.log(response);
        this.listarFuncionarios();
    })
    .catch(erro => {
        console.log(erro);
    })
    .finally(() => {
        this.isLoading = false;
    });
}


 // Função para abrir ou fechar o modal
 abrirModalAtualizar(isOpen: boolean) {
  this.modalAtualizar = isOpen;
}



  //interligar
  async exibirAlertaAtualizar(codigoFuncionario: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja Atualizar esse funcionário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.remover(codigoFuncionario);
          }
        }
      ]
    });
  
    await alert.present();
  }


// Função para inserir um funcionário
inserir(codigo: any, novoNome: string, novoCargo: string, novaCidade: string, novoFone: string) {
  this.isLoading = true;
  
  fetch('http://localhost/xampp/exercicio/funcionario/inserir_funcionario.php',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ CodFun: codigo, Nome: novoNome, Cargo: novoCargo, Cidade: novaCidade, Fone: novoFone}),
      }
  )
  .then(response => response.json())
  .then(response => {
      console.log(response);
      this.listarFuncionarios();
  })
  .catch(erro => {
      console.log(erro);
  })
  .finally(() => {
      this.isLoading = false;
  });
}


// Função para abrir ou fechar o modal
abrirModalInserir(isOpen: boolean) {
this.modalInserir = isOpen;
}



//interligar
async exibirAlertInserir(codigoFuncionario: any) {
  const alert = await this.alertController.create({
    header: 'Confirmação',
    message: 'Deseja Inserir esse funcionário?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Exclusão cancelada');
        }
      }, {
        text: 'OK',
        handler: () => {
          this.remover(codigoFuncionario);
        }
      }
    ]
  });

  await alert.present();
}





  
  
  
  
  
  
  
  
  
  
  
 

  
  
 


  
 


 
 

  
}
  