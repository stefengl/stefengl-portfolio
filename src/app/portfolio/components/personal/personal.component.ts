import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../firebase/services/firebase-services';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  images: string[] = [];

  constructor(private fbService: FirebaseService) { }

  async ngOnInit() { 
    this.images = await this.fbService.getDownloadUrlsFromStorage();
  }

}
