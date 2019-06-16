import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database'



@Injectable()
export class SalasService {
    constructor (private db: AngularFireDatabase){
    }
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
    fetchSalas (){
        return this.db.list("/salas/");
       }
    fetchMessages (){
        return this.db.list("/salas/message");
       }
    novaMensagem (id,message){
        //this.salas[id].message.push(message);
        this.db.list("/salas/").push(message);
       }
    
    icons= [
        'logo-apple',
        'md-aperture',
        'basketball',
        'beer',
        'flask',
        'md-flame',
        'flash',
        'finger-print',
        'game-controller',
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
                    icone: 'beer',
                    text: 'texto',
                    data: 15052019
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