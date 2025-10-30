import { NgModule } from '@angular/core';
import { LoginLayoutComponent } from '../features/login/pages/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginLayoutComponent, InputComponent],
  exports: [LoginLayoutComponent, InputComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
