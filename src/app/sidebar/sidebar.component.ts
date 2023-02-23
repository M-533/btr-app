import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faLayerGroup = faLayerGroup;
  constructor(private router: Router) {}
  currentRoute = this.router.url;
}
