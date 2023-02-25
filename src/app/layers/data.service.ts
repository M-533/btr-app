import { Injectable } from '@angular/core';
import { stationData } from './station-layer/station-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

stationFormData=[

  new stationData('some name' , 2000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
  new stationData('some name' , 3000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 4000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 5000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 6000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 7000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
]


  constructor() { }
}
