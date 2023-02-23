import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { LayersComponent } from './layers/layers.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { FinanceComponent } from './station-details/finance/finance.component';
import { OprationComponent } from './station-details/opration/opration.component';
import { StationLayerComponent } from './layers/station-layer/station-layer.component';
import { DispenserComponent } from './layers/dispenser/dispenser.component';
import { CompressorComponent } from './layers/compressor/compressor.component';
import { NozzleComponent } from './layers/nozzle/nozzle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'dashboard', component: DashboardsComponent },
  { path: 'station', component: StationDetailsComponent , children:[
    { path: 'finance', component: FinanceComponent },
    { path: 'operation', component: OprationComponent },
  ] },
  { path: 'layers', component: LayersComponent ,children:[
    {path:'stations' ,component:StationLayerComponent},
    {path:'dispenser' ,component:DispenserComponent},
    {path:'compressor' ,component:CompressorComponent},
    {path:'nozzle' ,component:NozzleComponent},
  ] },
  { path: 'alerts', component: AlertsComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
