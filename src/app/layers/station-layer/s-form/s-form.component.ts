import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-s-form',
  templateUrl: './s-form.component.html',
  styleUrls: ['./s-form.component.scss'],
})
export class SFormComponent implements OnInit {
  sForm: FormGroup;
  move = false;


  constructor(private router: Router, private dataService: DataService) {}
dd=false
  ngOnInit() {
    this.sForm = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onAddStation() {
    this.dataService.addStation(this.sForm.value).subscribe(
      (res)=>{
console.log(res);

      }
    );

    this.close();
    this.dataService.OrderShow()
  }

  close() {
    this.move = true;
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.router.navigate(['layers/betrol']));
      }, 305);
    });
  }


}
