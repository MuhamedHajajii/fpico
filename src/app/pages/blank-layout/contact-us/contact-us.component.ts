import { Component } from '@angular/core';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContactUsMapComponent } from './contact-us-map/contact-us-map.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsFormComponent, TranslateModule, ContactUsMapComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
