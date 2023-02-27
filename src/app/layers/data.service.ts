import { Injectable } from '@angular/core';
import { stationData } from './station-layer/station-model';
import { DispenserData } from './station-layer/station-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

stationFormData=[

  new stationData('any name' , 20533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
  new stationData('some name' , 30533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 40533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 50533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 60533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ',false ),
  new stationData('some name' , 70533 , 'Iraq, babylon ,40 street ' ,'some text description and bla pipe clice bla bla  ' ,false),
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
