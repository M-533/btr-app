import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss'],
})
export class UpdateDataComponent implements OnInit {
  move = false;
  routeId = this.curentRout.snapshot.params['id'];

  theUpdateF = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    private curentRout: ActivatedRoute
  ) {}
  onGetCurrentData() {
    this.dataService.getCurrentData(this.routeId).subscribe((data) => {
      this.theUpdateF = new FormGroup({
        name: new FormControl(data['name'], Validators.required),
        code: new FormControl(data['code'], Validators.required),
        location: new FormControl(data['location'], Validators.required),
        description: new FormControl(data['description'], Validators.required),
      });
    });
  }

  onUpdate() {
    this.dataService
      .updateData(this.theUpdateF.value, this.routeId)
      .subscribe();
    this.dataService.getStations().subscribe();
    this.dataService.OrderShow();
  }

  ngOnInit() {
    this.onGetCurrentData();
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
