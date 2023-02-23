import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class Chart1Component {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'radar',
      data: {
        datasets: [
          {
            label: '',
            data: [50, 70, 30, 35],
            backgroundColor: '#ff7f5cc4',
            borderColor: '#3d516197',
          },
          {
            label: '',
            data: [20, 50, 60],
            backgroundColor: '#ff7f5cc4',
            borderColor: '#3d516197',
          },
        ],
        labels: [
          'at morning',
          'at afternoon',
          'at evening',
          'at night',
          'at sunset',
        ],
      },
      options: {
        responsive: true,}
    });
  }
}
