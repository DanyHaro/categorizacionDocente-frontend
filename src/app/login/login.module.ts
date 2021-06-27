import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginRoutingModule } from './login-routing.module';

//IMPORTS FROM ANGULAR MATERIAL
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';





@NgModule({
  declarations: [LogincomponentComponent, MetodoPagoComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    //MODULE OF ANGULAR MATERIAL
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
