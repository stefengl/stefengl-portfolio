import { Component, OnInit } from '@angular/core';
import { CardContent } from '../../models/portfolio-models';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationTitle = 'Education';
  educationContent: CardContent[] = [
    {
      title: 'Master Of Sciene, Business Information Systems',
      date: 'March 2018 to July 2019',
      location: 'University of Applied Sciences Augsburg',
      text: 'Gathering advanced knowledge of integrating, managing and developing enterprise-level systems.'
    },
    {
      title: 'Student Exchange Program',
      date: 'August 2016 to October 2016',
      location: 'VIA University Horsens, Denmark',
      text: 'Creating a Data - Warehouse by following the star - scheme database\
       design principles.<br>Visualizing electricity related data with the\
        visualization tool <a target="blank" href="https://www.tableau.com/de-de">Tableau</a>.'
    },
    {
      title: 'Bachelor Of Science, Economic Computer Science',
      date: 'October 2014 to February 2018',
      location: 'University of Applied Sciences Augsburg',
      text: 'Acquiring the neccessary, theoretical and practical skillsets to build enterprise-level software.'
    },
    {
      title: 'Abitur, Gymnasium Königsbrunn',
      date: 'September 2005 to June 2013',
      location: 'Königsbrunn, near Augsburg, Germany',
      text: undefined
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
