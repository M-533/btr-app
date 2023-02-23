import { Component, ElementRef, ViewChild  } from '@angular/core';
import {
  faMemory,faAngleDown,
  faLocationDot,
  faCalendarWeek,faScroll,faTransgender,faSnowflake ,faChartLine,faEllipsis,faSortDown,faChartBar,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
}) 
export class AlertsComponent {
  faChartLine=faChartLine
  faSortDown=faSortDown
  faChartBar=faChartBar
  threedots = faEllipsis;
  tran = faTransgender;
  faMemory = faMemory;
  faSnowflake=faSnowflake
  dateIcon = faCalendarWeek;
  faAngleDown=faAngleDown
  classes=faScroll
  faLocationDot=faLocationDot

date = new Date()

constructor() {

}


}
