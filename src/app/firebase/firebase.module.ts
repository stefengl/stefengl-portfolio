import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './services/firebase-services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FirebaseService
  ]
})
export class FirebaseModule { }
