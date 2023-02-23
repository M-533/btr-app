import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { LayersComponent } from './layers/layers.component';
import { AlertsComponent } from './alerts/alerts.component';
import { Chart1Component } from './dashboards/chart/chart.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { FinanceComponent } from './station-details/finance/finance.component';
import { OprationComponent } from './station-details/opration/opration.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarChartComponent } from './alerts/bar-chart/bar-chart.component';
import { StationLayerComponent } from './layers/station-layer/station-layer.component';
import { DispenserComponent } from './layers/dispenser/dispenser.component';
import { CompressorComponent } from './layers/compressor/compressor.component';
import { NozzleComponent } from './layers/nozzle/nozzle.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    SidebarComponent,
    DashboardsComponent,
    LayersComponent,
    AlertsComponent,
    Chart1Component,
    StationDetailsComponent,
    FinanceComponent,
    OprationComponent,
    BarChartComponent,
    StationLayerComponent,
    DispenserComponent,
    CompressorComponent,
    NozzleComponent,
  ],
  imports: [
    NgCircleProgressModule.forRoot({
        "radius": 60,
        "outerStrokeWidth": 10,
        "innerStrokeWidth": 5,
        "showBackground": false,
        "startFromZero": false
      })
    ,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
