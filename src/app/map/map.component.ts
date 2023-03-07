import {
  faRetweet,
  faMemory,
  faChevronDown,
  faFilterCircleDollar,
  faVolcano,
} from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { map, Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';

import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  Volcano = faVolcano;
  faChevronDown = faChevronDown;
  faMemory = faMemory;
  filter = faFilterCircleDollar;
  showMap = true;
  mapBtn = false;
  private map;
  popup = `<div  class="popup">
  <div >station location </div>
  <div > dumy station location, title of some state</div>
  </div>
  `;
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
  orangeIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [10, 20],
  });
  options: L.PopupOptions = {
    maxWidth: 33,
  };
  initMap() {
    this.map = L.map('map').setView([41.80008, -71.009911], 15);

    const tiles = L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 6 ,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
    tiles.addTo(this.map);

    L.marker([41.80108, -71.009914], { icon: this.orangeIcon })
      .addTo(this.map)
      .bindPopup(this.popup, { className: 'popup' })
      .openPopup();
    L.marker([40.81108, -74.009914], { icon: this.orangeIcon })
      .addTo(this.map)
      .bindPopup(this.popup, { className: 'popup' })
      .openPopup();
    L.marker([42.81108, -74.009914], { icon: this.orangeIcon })
      .addTo(this.map)
      .bindPopup(this.popup, { className: 'popup' })
      .openPopup();
    L.marker([42.91108, -71.009914], { icon: this.orangeIcon })
      .addTo(this.map)
      .bindPopup(this.popup, { className: 'popup' })
      .openPopup();
  }
}
