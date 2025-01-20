import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-routing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar-routing.component.html',
  styleUrl: './navbar-routing.component.scss',
})
export class NavbarRoutingComponent {}
