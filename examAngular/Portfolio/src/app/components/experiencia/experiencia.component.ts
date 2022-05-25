import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { experience } from 'src/app/models/experience.mode';
import { ExperienceService } from 'src/app/services/experience/experience.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp:experience = new experience("","","","");
  public exps:experience[]=[];
  edit:boolean = false;
  constructor(private ExpSv:ExperienceService) { }
  
  ngOnInit(): void {
    
    this.getExperiences()
  }
  public editExperience():void{this.edit = !this.edit;}

  public getExperiences():void{
    this.ExpSv.getExperiences().subscribe({
      next:(Response:experience[]) =>{
        this.exps=Response;},
        error:(error:HttpErrorResponse)=>{
          alert(error.message)
        }
    })
  }
  
}
