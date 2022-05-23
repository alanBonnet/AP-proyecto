import { Component, OnInit } from '@angular/core';
import { perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  perfil:perfil = new perfil("","","","","","","","","","","");
  facebook:string = "";
  constructor(private perfilSv:PerfilService) { }

  ngOnInit(): void {
    this.perfilSv.getPerfil().subscribe(data =>{this.perfil = data})
  }
  
}

