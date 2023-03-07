import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DispenserService } from 'src/app/services/dispenser.service';

@Component({
  selector: 'app-update-dispenser',
  templateUrl: './update-dispenser.component.html',
  styleUrls: ['./update-dispenser.component.scss']
})
export class UpdateDispenserComponent  implements OnInit{
  move = false;
  routeId = this.curentRout.snapshot.params['id'];

  constructor(
    private router: Router,
    private dataService: DispenserService,
    private curentRout: ActivatedRoute
  ) {}

  theUpdateF = new FormGroup({
    dispenser: new FormControl(''),
    class: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit() {
    this.onGetCurrentData();
  }


  onGetCurrentData() {
    this.dataService.getCurrentData(this.routeId).subscribe((data) => {
      this.theUpdateF = new FormGroup({
        dispenser: new FormControl(data['dispenser'], Validators.required),
        class: new FormControl(data['class'], Validators.required),
        location: new FormControl(data['location'], Validators.required),
        phone: new FormControl(data['phone'], Validators.required),
      });
    });
  }

  onUpdate() {
    this.dataService.updateData(this.theUpdateF.value, this.routeId)
      .subscribe();
    this.dataService.fetchDispensers().subscribe();
    this.dataService.OrderShow();
  }
  close() {
    this.move = true;
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.router.navigate(['layers/dispenser']));
      }, 305);
    });
  }
}
