import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/models/experience.mode';
import { ExperienceService } from 'src/app/services/experience/experience.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp:experience = new experience("","","","");
  exps:experience[]=[];
  constructor(public ExpSv:ExperienceService) { }
  
  ngOnInit(): void {
    //this.ExpSv.getExperience().subscribe(data =>{ this.exp = data })
    this.ExpSv.getExperiences().subscribe(data=>{this.exps=data} )
    setTimeout(()=>{
      console.log(this.exp)
      console.log(this.exp.dateEnd)
      console.log(this.exp.dateStart)
      
    },2000)
  }
  
}
