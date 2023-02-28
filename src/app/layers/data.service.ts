import { Injectable } from '@angular/core';
import { stationData } from './station-layer/station-model';
import { DispenserData } from './station-layer/station-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

stationFormData=[

  new stationData('some name' , 2000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe cliceblabla  ' ,false),
  new stationData('some name' , 3000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 4000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 5000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 6000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 7000533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
]

dispenserData=[
  new DispenserData('some name' , 10533 , 'Iraq, Al-basra ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 20533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 30533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 40533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 50533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 60533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 70533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),
  new DispenserData('any name' , 90533 , 'Iraq, Al-basra ,40 street ' ,'any text description and bla pipe clice bla bla  ' ,false),

]

}
