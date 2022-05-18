import { Component, OnInit } from '@angular/core';
import { PerfilSvService } from 'src/app/services/perfil-sv.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  perfil : PerfilSvService= new PerfilSvService;
  constructor() { }

  ngOnInit(): void {
  }

}
