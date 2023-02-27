import {ViewChild,ElementRef, Component , OnInit} from '@angular/core';
import { faLocationDot ,faTrashCan ,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
@Component({
  selector: 'app-station-layer',
  templateUrl: './station-layer.component.html',
  styleUrls: ['./station-layer.component.scss']
})
export class StationLayerComponent  implements OnInit {
location =faLocationDot
delete=faTrashCan
pen=faPenToSquare
@ViewChild( 'row' ,{static:false})row:ElementRef

constructor( private dataServce:DataService){}
stationDataF=this.dataServce.stationFormData

ngOnInit(){

}

deleteR(index:number){
  this.stationDataF[index].deleteR=true
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve( this.stationDataF.splice(index, 1));
    }, 500);

  });








}

}
