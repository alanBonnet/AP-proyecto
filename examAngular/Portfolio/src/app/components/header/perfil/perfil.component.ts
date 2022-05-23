import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil:perfil = new perfil("","","","","","","","","","","");
  edit:boolean = false;
  @Input () value :string = "";
  constructor(public perfilSv : PerfilService) { 

  }
  public editProfile():void{
    this.edit = !this.edit;
  }
  ngOnInit(): void {
    this.perfilSv.getPerfil().subscribe(data =>{this.perfil = data})
  }
  public autoImgPhoto():any{
    return this.perfil.imgPhoto ==null ? 'http://placeimg.com/2000/2000/any':this.perfil.imgPhoto;
  }
  
}
