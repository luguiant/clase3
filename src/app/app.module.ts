import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { MipipePipe } from './mipipe.pipe';
import { Clase2Component } from './clase2/clase2.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormService } from './services/form/form.service';
import { ValidationDirective } from './dirctive/validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    MipipePipe,
    Clase2Component,
    ErrorComponent,
    FormComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
