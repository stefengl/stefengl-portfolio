import { Component, OnInit } from '@angular/core';
import { SocialIconInformation } from '../../models/portfolio-models';

@Component({
  selector: 'portfolio-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {

  data: SocialIconInformation[] = [
    { icon: 'ion-social-linkedin-outline', url: 'https://www.linkedin.com/in/stefengl' },
    { icon: 'ion-social-twitter-outline', url: 'https://twitter.com/EnglStef' },
    { icon: 'ion-ios-email-outline', url: 'mailto:stef.engl.se@gmail.com' },
    { icon: 'ion-social-instagram-outline', url: 'https://www.instagram.com/stefengl_' },
    { icon: 'ion-social-github-outline', url: 'https://www.github.com/stefengl' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onIconClick(event: Event, url: string) {
    window.open(url);
  }

}


