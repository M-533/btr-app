import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DispenserService } from 'src/app/services/dispenser.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-df-form',
  templateUrl: './df-form.component.html',
  styleUrls: ['./df-form.component.scss'],
})
export class DfFormComponent {
  DForm: FormGroup;
  move = false;
  constructor(
    private router: Router,
    private dataService: DataService,
    private dispenserSerivce: DispenserService
  ) {}

  ngOnInit(): void {
    this.DForm = new FormGroup({
      dispenser: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  addNew() {
    this.dispenserSerivce.addDispenser(this.DForm.value).subscribe();
    this.move = true;
    this.close();
    this.dispenserSerivce.OrderShow()

  }

  close() {
    this.move = true;
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.router.navigate(['layers/dispenser']));
      }, 305);
    });
    this.dispenserSerivce.OrderShow()
  }


}
