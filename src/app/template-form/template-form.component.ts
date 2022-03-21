import { Component, OnInit } from '@angular/core';
import { User } from './class-model';
import { Country } from './countries-interface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  /*log(x:any){
    console.log(x)
  }*/

  onsubmit(userform:any){
    console.log(userform)
  }

  countries:Country[]=[{name:"Egypt"},{name:"Hend"},{name:"Giza"},{name:"Tanta"}]
  
  userModel = new User("","", "","",true,"")

  constructor() { }

  ngOnInit(): void {
  }

}
