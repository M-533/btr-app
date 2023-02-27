import { faRetweet ,faMemory ,faChevronDown ,faFilterCircleDollar ,faVolcano } from '@fortawesome/free-solid-svg-icons';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {
  faMemory =faMemory
  faChevronDown=faChevronDown
  filter=faFilterCircleDollar
  Volcano=faVolcano
showMap=true
mapBtn = false


sso(){
  this.mapBtn = false


}


mapOptions: MapOptions;

constructor() {
}

ngOnInit() {
  this.initializeMapOptions();

}

private initializeMapOptions() {

  this.mapOptions = {
    center: latLng(51.505, 0),
    zoom: 14,
    touchZoom:true,dragging:true,
    layers: [
      tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
        })
    ],
  };
}


}
