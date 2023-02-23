import { Component, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {
  faMemory,
  faCloudArrowUp,
  faBarsStaggered,
  faCalendarWeek,
  faSortUp,
  faSortDown,
  faChartSimple,
  faEllipsis,
  faChartLine,
  faChartArea,
  faChartGantt,
} from '@fortawesome/free-solid-svg-icons';
import { Chart, Point } from 'chart.js';
@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
})
export class StationDetailsComponent {
  faMemory = faMemory;
  dateIcon = faCalendarWeek;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  showSales = false;
  bars = faChartSimple;
  lists = faBarsStaggered;
  threedots = faEllipsis;
  cloudIc = faCloudArrowUp;
  finance = true;
  faChartLine = faChartLine;
  faChartBar = faChartArea;
  faChartGantt = faChartGantt;

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private data: Point[];

  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
