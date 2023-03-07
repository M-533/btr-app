import { Component ,OnInit , DoCheck } from '@angular/core';
import { DecePipe } from 'src/app/dece.pipe';
import {
  faLaptopCode,
  faLocation,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { dispenserI } from 'src/app/interface/dispenser';
import { DispenserService } from 'src/app/services/dispenser.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.scss'],
})
export class DispenserComponent  implements OnInit , DoCheck{
  faLaptopCode = faLaptopCode;
  location = faLocation;
  deledetR = faTrashCan;
  pen = faPenToSquare;
  showFetchBtn=false
  dispenserData :dispenserI[]
  constructor(private dispenserService: DispenserService) {}

ngOnInit(){
  this.onFetchDispensers()
}

 private onFetchDispensers(){
  this.dispenserService.fetchDispensers().subscribe(
    data => this.dispenserData=data
  )
}

fetchData(){
  this.onFetchDispensers()
}
ngDoCheck(): void {
  this.dispenserService.showFbtn.subscribe((order) => (this.showFetchBtn = order));
}


deleteR(index: number) {
  const sName =  this.dispenserData[index].dispenser;
  let ask = confirm(`if you are sure about delete '${sName}' dispenser click ok`)

  if (ask==true) {
    this.dispenserData[index].deleteR = true;

    const id = this.dispenserData[index].id;
    setTimeout(() => {
      this.dispenserData.splice(index, 1);
    }, 500);
    this.dispenserService.deleteDispenser(id ).subscribe((data) => {});
  }
}

}
