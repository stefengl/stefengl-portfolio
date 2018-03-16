import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseImageService } from './services/firebase-services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FirebaseImageService
  ]
})
export class FirebaseModule { }
