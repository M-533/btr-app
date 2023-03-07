import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  constructor(private router: Router) {}
  currentRoute = this.router.url;
  onDashboard: boolean;
onLayers:boolean

  ee = 10;
  checkMrout(route: any) {
    if (route.includes('dashboard') || route.includes('gasStat')) {
      return (this.onDashboard = true);
    } else {
      return (this.onDashboard = false);
    }
  }
  checkLrout(route: any) {
    if (route.includes('layers') || route.includes('station')) {
      return (this.onLayers = true);
    } else {
      return (this.onLayers = false);
    }
  }




  ngOnInit() {
    this.checkMrout(this.currentRoute);
    this.checkLrout(this.currentRoute);
  }
}
