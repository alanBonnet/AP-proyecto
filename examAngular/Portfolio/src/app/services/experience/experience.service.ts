import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { experience } from 'src/app/models/experience.mode';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'http://localhost:8080/user/experience/';

  constructor(private http:HttpClient) { }

  public getExperience(): Observable<experience>{
    return this.http.get<experience>(this.URL+'1')
  }
  getExperiences(){
    return this.http.get<experience[]>(this.URL+"all")
  }
}
