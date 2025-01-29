import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  CountryISO,
  NgxIntlTelInputModule,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import { OurServicesContentService } from '../../../../core/services/our-services-content.service';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
})
export class ContactUsFormComponent {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  startValidation: boolean = false;
  PhoneNumberFormat = PhoneNumberFormat;
  isRTL: boolean = false;

  constructor(
    private _Router: Router,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: object,
    private _TranslateService: TranslateService,
    public _OurServicesContentService: OurServicesContentService
  ) {}

  messagesForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/),
    ]),
    services: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onSubmit(): void {
    this.startValidation = true;
    const USER_DATA = this.messagesForm.value;
    if (this.messagesForm.valid) {
      console.log('Form Submitted:', USER_DATA);
      // this._ContactUsService.submitUserContactForm(USER_DATA).subscribe({
      //   next: (response) => {
      //     console.log(response);
      //     this.messagesForm.reset();

      //     this._Router.navigate(['/contact-us-success']);
      //   },
      //   error: (error) => {
      //     console.log(error);
      //   },
      // });
      this.messagesForm.reset();
      this.startValidation = false;
    } else {
      console.log('Form is invalid.');
    }
  }

  get phoneInputStyles() {
    return {
      height: '100%',
      padding: '1rem',
      'text-align': this.isRTL ? 'right' : 'left',
      border:
        this.startValidation && this.messagesForm.get('phone')?.errors
          ? '1px solid red'
          : '1px solid #ccc',
    };
  }
  ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe((params: LangChangeEvent) => {
      if (params.lang === 'ar') {
        this.isRTL = true;
      } else {
        this.isRTL = false;
      }
    });
    if (this._TranslateService.currentLang == 'ar') {
      this.isRTL = true;
    } else {
      this.isRTL = false;
    }
  }
}
