import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from '../../app/salas.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
})
export class SalaPage implements OnInit {
  //sala alvo
  target: any;
  salas: any;
  nomeUser: string;
  icone: any
  texto: any;
  //sala selecionada
  id: any;
  sala: any;
  salaService: any;
  joao: any;
  
  //Recuperando nome do cache
  constructor(private route: ActivatedRoute, private router: Router, private salasService: SalasService) {
    this.salaService = salasService;
    this.joao =  this.salaService.salas[0].id;
    this.route.queryParams.subscribe(params => {
      //verifica se navigation possui um valor e recebe ele caso possua
      if (this.router.getCurrentNavigation().extras.state) {
        this.nomeUser = this.router.getCurrentNavigation().extras.state.nomeUser;
        this.id = this.router.getCurrentNavigation().extras.state.sala.id;
        this.icone = this.router.getCurrentNavigation().extras.state.icone;
        //carrega a sala do service 
        this.sala = salasService.salas[this.id];
        console.log(salasService.salas[this.id].user);
        //salasService.entrarNaSala(this.id,this.nomeUser);
      }
    });
     // this.sala = this.salas[this.target];
    
  }
  //Metodo acionado ao desenpilhar uma pagina
 ionViewWillLeave (){
    const index = this.sala.user.indexOf(this.nomeUser, 0);
    if (index > -1) {
      
      console.log(this.sala.user);
      this.sala.user.splice(index, 1);
      console.log(this.nomeUser + ' Destruido');
      console.log(this.sala.user);

    }
  }
  enviarMensagem(){
    this.novaMensagem(this.sala,this.texto,this.icone);
  }
  novaMensagem (sala,message,icone){
    message = {
      user: this.nomeUser,
      text: this.texto,
      icone: this.icone

    }
    sala.message.push(message);
    this.texto = "";
   }
   

  ngOnInit() {
  }

}
