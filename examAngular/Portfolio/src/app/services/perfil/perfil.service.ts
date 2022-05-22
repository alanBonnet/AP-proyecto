import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perfil } from 'src/app/models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = 'http://localhost:8080/user/perfil/';
  constructor(private http:HttpClient) { }
  public getPerfil(): Observable<perfil>{
    return this.http.get<perfil>(this.URL+'get')
  }
}
