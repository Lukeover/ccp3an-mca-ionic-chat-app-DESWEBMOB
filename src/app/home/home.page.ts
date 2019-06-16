import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { SalasService } from '../salas.service';
import { AlertController } from '@ionic/angular';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomeUser: string;
  sala: any;
  pagina: any;
  salaService: SalasService;
  icon: any;
  icons: any;
  salas: any;
  constructor(private router: Router, private dataService: DataService, private salaServices: SalasService,
     public alertController: AlertController, db:AngularFireDatabase) {
     // console.log(db);
     
    this.salaService = salaServices;
    this.icons = this.salaService.icons;
  }
  ngOnInit (){
    this.salas = this.salaService.fetchSalas();
   }
   
  //Adicionando nome ao cache
  enviaParaSala(pagina: any) {
    if (this.salaService.userDisponivel(this.sala.id, this.nomeUser)) {
      let navigationExtras: NavigationExtras = {
        state: {
          sala: this.sala,
          nomeUser: this.nomeUser,
          icone: this.icon

        }
      };
      this.router.navigate(['/sala'], navigationExtras);
    }
    else{
     
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  //Clik para sala
  onItemClick() {
    console.log("Nome ", this.nomeUser)
    console.log("passei aqui ", this.sala);
    this.enviaParaSala(this.sala);
    /* Old switch
      switch(this.sala) { 
        case "Cinema": { 
          this.enviaParaSala(0); 
           break; 
        } 
        case "Curiosidades": { 
          this.enviaParaSala(1); 
           break; 
        } 
        case "Esportes": { 
          this.enviaParaSala(2); 
          break; 
       } 
     }
     */
  }


  /*onItemClick (){
   this.router.navigateByUrl('/cinema');
   console.log("passei aki");
  }*/
}
