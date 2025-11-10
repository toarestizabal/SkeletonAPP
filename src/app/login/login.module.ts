import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // CORREGIDO
import { MatButtonModule } from '@angular/material/button';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    // AGREGAR ESTOS MÓDULOS AL ARRAY:
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}