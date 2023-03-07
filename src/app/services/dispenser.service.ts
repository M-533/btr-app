import { Injectable ,EventEmitter ,Output} from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { map } from 'rxjs';
import { dispenserI } from '../interface/dispenser';

@Injectable({
  providedIn: 'root',
})
export class DispenserService {
  @Output() showFbtn = new EventEmitter<boolean>();


  constructor(private http: HttpClient) {}

  apiUrl = 'https://btrs-app-25cb8-default-rtdb.firebaseio.com/dispensers.json';

  addDispenser(body: dispenserI) {
    return this.http.post(this.apiUrl, body);
  }

  fetchDispensers() {
    return this.http.get(this.apiUrl).pipe(
      map((res) => {
        const dispensers = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            dispensers.push({ ...res[key], id: key });
          }
        }
        return dispensers
      })
    );
  }

  deleteDispenser(   id:string){
    return this.http.delete<dispenserI>(   `https://btrs-app-25cb8-default-rtdb.firebaseio.com/dispensers/${id}.json`
  )
  }

  getCurrentData(id: any) {
    return this.http.get<any>(
      `https://btrs-app-25cb8-default-rtdb.firebaseio.com/dispensers/${id}.json`
    );
  }

  updateData(body: {}, id: any) {
    return this.http.put<dispenserI>(
      `https://btrs-app-25cb8-default-rtdb.firebaseio.com/dispensers/${id}.json`,
      body
    );
  }

  OrderShow() {
    this.showFbtn.emit(true);
  }
}
