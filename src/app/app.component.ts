import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { filter, map, timer } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

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

  ngOnInit(): void {
    this.spinner.show();
  }
  @HostListener('window:load')
  onWindowLoad() {
    timer(1000).subscribe(() => this.spinner.hide());
  }
  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private spinner: NgxSpinnerService
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.router.routerState.root;
          while (child.firstChild) {
            child = child.firstChild;
          }
          return child.snapshot.data;
        })
      )
      .subscribe((data) => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
        if (data['description']) {
          this.meta.updateTag({
            name: 'description',
            content: data['description'],
          });
        }
      });
  }
}
