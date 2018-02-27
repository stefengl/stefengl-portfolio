import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  data = [
    { icon: 'ion-social-linkedin-outline', url: 'https://www.linkedin.com' },
    { icon: 'ion-social-twitter-outline', url: 'https://www.twitter.com' },
    { icon: 'ion-ios-email-outline', url: "mailto:stef.engl.se@gmail.com" },
    { icon: 'ion-social-instagram-outline', url: 'https://www.instagram.com' },
    { icon: 'ion-social-github-outline', url: 'https://www.github.com' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
