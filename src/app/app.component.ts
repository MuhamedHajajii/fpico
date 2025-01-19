import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected to `styleUrls`
})
export class AppComponent {
  title = 'fipco';

  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  @HostListener('window:load', []) onWindowLoad() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }
}
