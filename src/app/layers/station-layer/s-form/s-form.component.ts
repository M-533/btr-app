import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { DispenserData, stationData } from '../station-model';

@Component({
  selector: 'app-s-form',
  templateUrl: './s-form.component.html',
  styleUrls: ['./s-form.component.scss']
})
export class SFormComponent implements OnInit {

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
      resolve(this.router.navigate(['layers/betrol']));
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
