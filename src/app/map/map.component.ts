import { Component ,OnInit } from '@angular/core';
import { faRetweet ,faMemory ,faChevronDown ,faFilterCircleDollar ,faVolcano } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  faMemory =faMemory
  faChevronDown=faChevronDown
  filter=faFilterCircleDollar
  Volcano=faVolcano
showMap=true


ngOnInit(){
  
}

}
