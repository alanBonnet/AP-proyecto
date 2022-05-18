import { Component, OnInit } from '@angular/core';
import { PerfilSvService } from 'src/app/services/perfil-sv.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  perfil:PerfilSvService = new PerfilSvService;
  constructor() { }

  ngOnInit(): void {
  }

}
