import { Component, OnInit } from '@angular/core';
import { PerfilSvService } from 'src/app/services/perfil-sv.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  perfil : PerfilSvService = new PerfilSvService;
  constructor() { }

  ngOnInit(): void {
  }

}
