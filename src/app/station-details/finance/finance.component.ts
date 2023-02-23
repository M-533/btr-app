import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, Point } from 'chart.js';
import {
  faBarsStaggered,
  faSortUp,
  faSortDown,
  faEllipsis,
  faChartLine,
  faChartArea,
  faChartGantt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  showSales = false;
  lists = faBarsStaggered;
  threedots = faEllipsis;
  faChartBar = faChartArea;
  faChartGantt = faChartGantt;
  faChartLine = faChartLine;

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;
  private data: Point[];

  constructor() {
    this.data = [
      { x: 1, y: 2 },
      { x: 2, y: 4.5 },
      { x: 2.5, y: 2 },
      { x: 3, y: 5 },
      { x: 3.5, y: 2.5 },
      { x: 4.5, y: 6 },
    ];
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'sales',
            data: this.data,
            fill: false,
            borderColor: '#FF7F5C',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              type: 'linear',
            },
          ],
        },
      },
    });
  }
}
