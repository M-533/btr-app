import { Component } from '@angular/core';
import {
  faLaptopCode,
  faLocation,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.scss'],
})
export class DispenserComponent {
  faLaptopCode = faLaptopCode;
  location = faLocation;
  deledetR = faTrashCan;
  pen = faPenToSquare;

  dispenserData = this.serviceData.dispenserData;
  constructor(private serviceData: DataService) {}

  deleteR(index: number) {
    this.dispenserData[index].deleteR = true;

    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.dispenserData.splice(index, 1));
      }, 500);
    });
    console.log('ddddddddddlllllllllllllllllllllllle2');

  }



}
