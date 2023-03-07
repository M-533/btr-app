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
import { SFormComponent } from './layers/station-layer/s-form/s-form.component';
import { DfFormComponent } from './layers/dispenser/d-form/df-form.component';
import { Path } from 'leaflet';
import { UpdateDataComponent } from './layers/station-layer/update-data/update-data.component';
import { UpdateDispenserComponent } from './layers/dispenser/update-dispenser/update-dispenser.component';

const routes: Routes = [  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'dashboard', component: DashboardsComponent },
  {
    path: 'gasStation',
    component: StationDetailsComponent,
    children: [
      { path: 'finance', component: FinanceComponent },
      { path: 'operation', component: OprationComponent },
    ],
  },
  {
    path: 'layers',
    component: LayersComponent,
    children: [
      {
        path: 'betrol',
        component: StationLayerComponent,
        children: [
          { path: 'sForm', component: SFormComponent },
          { path: 'updateS/:id', component: UpdateDataComponent },
        ],
      },
      {
        path: 'dispenser',
        component: DispenserComponent,
        children: [{ path: 'dForm', component: DfFormComponent },
        { path: 'updateD/:id', component: UpdateDispenserComponent },
      ],
      },
    ],
  },
  { path: 'alerts', component: AlertsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
