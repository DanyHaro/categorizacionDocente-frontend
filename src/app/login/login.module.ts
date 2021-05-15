import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LogincomponentComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
