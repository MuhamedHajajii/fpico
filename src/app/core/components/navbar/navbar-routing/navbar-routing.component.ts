import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-routing',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-routing.component.html',
  styleUrl: './navbar-routing.component.scss',
})
export class NavbarRoutingComponent {}
