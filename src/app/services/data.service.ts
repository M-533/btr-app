import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StationI } from '../interface/station';
import { map, Observable, Subject, Subscription } from 'rxjs';
import { dispenserI } from '../interface/dispenser';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  @Output() showFbtn = new EventEmitter<boolean>();

  OrderShow() {
    this.showFbtn.emit(true);
  }

  constructor(private http: HttpClient) {}

  apiUrl = 'https://btrs-app-25cb8-default-rtdb.firebaseio.com/stations.json';

  addStation(station: StationI) {
    return this.http.post<StationI>(this.apiUrl, station);
  }

  getStations() {
    return this.http.get<{ [key: string]: StationI }>(this.apiUrl)
    .pipe(
      map((res) => {
        const stations = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            stations.push({ ...res[key], id: key });
          }
        }
        return stations;
      })
    );
  }

  deleteStation(id: any) {
    return this.http.delete<any>(
      `https://btrs-app-25cb8-default-rtdb.firebaseio.com/stations/${id}.json`
    );
  }

  getCurrentData(id: any) {
    return this.http.get<any>(
      `https://btrs-app-25cb8-default-rtdb.firebaseio.com/stations/${id}.json`
    );
  }

  updateData(body: {}, id: any) {
    return this.http.put<StationI>(
      `https://btrs-app-25cb8-default-rtdb.firebaseio.com/stations/${id}.json`,
      body
    );
  }
}
