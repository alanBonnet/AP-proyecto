import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilSvService {
  perfilPhoto:string = "http://placeimg.com/2000/2000/any"; 
  perfilBanner:string = "http://placeimg.com/2000/1000/any";
  perfilNombre:string = "Alan Bonnet";
  perfilAcercaDe:string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque mollitia, odio impedit tempora voluptatum, eius optio fugit omnis consequuntur laboriosam?";
  
  constructor() { }
}
