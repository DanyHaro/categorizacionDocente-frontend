import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginRoutingModule } from './login-routing.module';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { PagosComponent } from './pagos/pagos.component';

//IMPORTS FROM ANGULAR MATERIAL
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [LogincomponentComponent, MetodoPagoComponent, PagosComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    //MODULE OF ANGULAR MATERIAL
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
})
export class LoginModule {}
