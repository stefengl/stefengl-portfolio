import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseReference } from '../../../shared/enums/enums';
import { FirebaseImageService } from '../../../firebase/services/firebase-image-service/firebase-image.service';

@Component({
  selector: 'portfolio-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  images: string[];

  constructor(private fbImageService: FirebaseImageService) {
    this.loadImages();
  }

  ngOnInit() { }

  loadImages(): void {
    this.fbImageService.getImageUrlsFromStorage(FirebaseReference.PersonalImages)
      .then((urls: string[]) => this.images = [...urls]);
  }

}
