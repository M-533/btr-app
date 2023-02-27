import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { DispenserData } from '../../station-layer/station-model';

@Component({
  selector: 'app-df-form',
  templateUrl: './df-form.component.html',
  styleUrls: ['./df-form.component.scss']
})
export class DfFormComponent {

  sForm:FormGroup
  move=false
  constructor(private router :Router , private dataService:DataService){}

   addNew() {
    this.dataService.dispenserData.push(
      new DispenserData(this.sForm.value.name ,this.sForm.value.id,this.sForm.value.location,this.sForm.value.description, false)
      )

      this.move=true

      this.close()
    }

  close(){
    this.move=true
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.router.navigate(['layers/dispenser']));
      }, 305);
    });

    ;
  }


  ngOnInit(): void {
    this.sForm = new FormGroup({
   name : new FormControl("" , Validators.required),
   id : new FormControl("" , Validators.required),
   location : new FormControl("" , Validators.required),
   description : new FormControl("" , Validators.required)
      })
    }

}
