import {
  ViewChild,
  ElementRef,
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import {
  faLocationDot,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { map, Subscription } from 'rxjs';
import { StationI } from 'src/app/interface/station';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-station-layer',
  templateUrl: './station-layer.component.html',
  styleUrls: ['./station-layer.component.scss'],
})
export class StationLayerComponent implements OnInit, DoCheck, OnChanges {
  location = faLocationDot;
  delete = faTrashCan;
  pen = faPenToSquare;
  stationDataF: StationI[] = [];
  sData: StationI;
  subscribtion: Subscription;
  showFetchBtn = false;

  @ViewChild('row', { static: false }) row: ElementRef;

  constructor(private dataServce: DataService) {}

  private onGetStations() {
    this.dataServce.getStations().subscribe((stations) => {
      this.stationDataF = stations;
    });
  }

  fetchData() {
    this.onGetStations();
  }

  ngDoCheck(): void {
    this.dataServce.showFbtn.subscribe((order) => (this.showFetchBtn = order));
  }

  ngOnChanges(): void {
  }

  ngOnInit() {
    this.onGetStations();
  }

  deleteR(index: number) {
    const sName =  this.stationDataF[index].name;
    let ask = confirm(`if you are sure about delete '${sName}' station click ok`)

    if (ask==true) {
      this.stationDataF[index].deleteR = true;

      const id = this.stationDataF[index].id;
      setTimeout(() => {
        this.stationDataF.splice(index, 1);
      }, 500);
      this.dataServce.deleteStation(id).subscribe((data) => {});
    }
  }


}
