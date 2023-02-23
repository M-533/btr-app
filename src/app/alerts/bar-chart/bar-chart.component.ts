import { Component,ViewChild,ElementRef } from '@angular/core';
import { Chart, Point } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {


  constructor() {
  }



  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
          type: 'bar',
          data: {
              datasets: [{
                  label: 'alerts',
                  data: [33,30, 30, 40 , 10 ,45,2,25,53,],
                  borderColor: "#FF7F5C",
                  fill: false,
                  backgroundColor:"#FF7F5C",
              },
              {
                  label: 'warnings',
                  data: [10,33, 20, 50 , 20 ,10 ,34,33,20],
                  borderColor: "#FF7F5C",
                  fill: false,
              }],
              labels: [ 'April 2019' , '2023 jan','2023 feb','2023 march','2023 march','2023 march','2023 march','2023 march','2023 march']
          },
          options:{
            responsive: true
          }
      });
  }
}
