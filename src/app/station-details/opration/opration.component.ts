import { Component } from '@angular/core';
import { faSnowflake,faOilCan,faSortDown,faChartLine,faEllipsis ,faTransgender ,faFeatherPointed, faChartArea} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-opration',
  templateUrl: './opration.component.html',
  styleUrls: ['./opration.component.scss']
})
export class OprationComponent {
  faChartLine=faFeatherPointed

  threedots = faEllipsis;
  faChartBar = faChartArea;
  tran = faTransgender;
  faSortDown=faSortDown
  faSnowflake=faSnowflake
  faOilCan=faOilCan
btnNav='kpi'
btnNav2='compre'
dispensers=[
  '02-00',
  '03-00',
  '04-00',
  '05-00',
  '06-00',
  '07-00',
]
date = new Date()



}
