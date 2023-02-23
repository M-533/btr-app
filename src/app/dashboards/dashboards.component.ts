import { Component } from '@angular/core';
import {faMemory ,faBarsStaggered, faCalendarWeek,faSortUp,faSortDown ,faChartSimple , faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent {
  faMemory=faMemory
dateIcon=faCalendarWeek
faSortUp =faSortUp
faSortDown=faSortDown
  btns='dd'
showSales=false
bars=faChartSimple
lists =faBarsStaggered
threedots=faEllipsis

stations=[
'**',
'**',
'**',
'$$'

]


}


