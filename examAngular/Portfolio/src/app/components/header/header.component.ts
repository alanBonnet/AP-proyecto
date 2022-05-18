import { Component, OnInit } from '@angular/core';
import { PerfilSvService } from "../../services/perfil-sv.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfil: PerfilSvService = new PerfilSvService; 
  constructor() { }

  ngOnInit(): void {
  }

}
