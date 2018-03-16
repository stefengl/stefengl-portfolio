import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from '../../models/portfolio-models';

@Component({
  selector: 'portfolio-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardTitle = '';
  @Input() cardContent: CardContent[] = [];

  constructor() { }

  ngOnInit() {
  }

}


