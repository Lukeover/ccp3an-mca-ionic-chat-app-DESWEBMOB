import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class SalasService {
public router: Router;
public alertController: AlertController;

    userDisponivel(id,username){
        if(!this.salas[id].user.includes(username)){
            return true;
        }else{
            return false;
        }
    }
    entrarNaSala (id,username){
        if (!this.salas[id].user.includes(username)){
            this.salas[id].user.push(username);
            console.log(id,username);
        }else{
            this.router.navigate(['/home']);
        }
    }
    novaMensagem (id,message){
        this.salas[id].message.push(message);
       }
    
    icons= [
        'logo-apple',
        'md-aperture',
        'basketball',
        'beer-outline',
        'flask',
        'md-flame',
        'flash',
        'finger-print',
        'game-controller-a',
        'hammer',
        'ice-cream',
        'images'
    ];
       

    salas = [
        {
            id: '0',
            nome: 'Cinema',
            user: [
                {
                    nome: 'Itaim'
                }
            ],
            message: [
                {
                    user: '0',
                    text: 'texto'
                },
                {
                    user: '1',
                    text: 'Texto 2'
                },
            ],
        },

        {
            id: '1',
            nome: 'Curiosidades',
            user: [
                {
                    nome: 'Robert'
                }
            ],
            message: [
                {
                    user: '0',
                    text: 'texto'
                },
            ],
        },

        {
            id: '2',
            nome: 'Esportes',
            user: [
                {
                    nome: 'Cleydison'
                }
            ],
            message: [
                {
                    user: '0',
                    text: 'texto'
                },
            ],
        }
    ]

}