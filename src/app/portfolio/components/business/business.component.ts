import { Component, OnInit } from '@angular/core';
import { CardContent } from '../../models/portfolio-models';

@Component({
  selector: 'portfolio-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessTitle = 'Business';
  businessContent: CardContent[] = [{
    title: 'Working Student',
    date: 'March 2018',
    location: 'Munich, Germany - Tekaris GmbH',
    text: 'Microservice-Management with the container\
     technology <a href="https://www.docker.com/">Docker</a>.\
      Container orchestration with\
       <a href="https://docs.docker.com/engine/swarm/">Docker Swarm</a>\
        and <a href="https://kubernetes.io/">Kubernetes</a> and\
         according <a href="https://azure.microsoft.com/de-de/services/container-service/">Microsoft Azure integration</a>.'
  },
  {
    title: 'International Cooperative Study Program',
    date: 'August 2016 to February 2018',
    location: 'Munich, Germany - Tekaris GmbH',
    text: 'Using <a target="blank" href="https://angular.io/">Google\'s Angular</a>\
     Framework and Microsoft\'s JavaScript Superset\
      <a target="blank" href="https://www.typescriptlang.org/">TypeScript</a>\
       to build scalable Single-Page-Applications and PWAs. Supporting\
        the client <a target="blank" href="https://www.munichre.com/de/homepage/index.html">Munich Re</a>\
         by visualizing customer data with <a target="blank" href="https://d3js.org/">D3.js</a>.\
          Building RESTful and cross-platform Web-APIs with the new\
           <a target="blank" href="https://docs.microsoft.com/en-us/aspnet/core/">ASP.NET Core</a>.\
            Managing cloud resources on <a target="blank" href="https://azure.microsoft.com/de-de/">Microsoft Azure</a>.'
  },
  {
    title: 'Working Student',
    date: 'October 2015 to May 2015',
    location: 'Augsburg, Germany - Böwe Systec GmbH',
    text: 'Evaluating the running Help Desk Software.\
     Specificing a list of criteria. Detailed comparison\
      of eligible products. Installation of the new self\
       hosted Help Desk Software by following the\
        guidelines and requirements of the company. <br> Tools,\
         methods etc.: <a target="blank" href="https://www.ubuntu.com/">Linux Ubuntu Server</a>,\
          <a target="blank" href="https://www.mysql.de/">MySQL Server</a>,\
           <a target="blank" href="https://httpd.apache.org/">Apache2 Webserver</a>,\
            <a target="blank" href="http://osticket.com/">Help Desk Software - osTicket</a>.'
  }];

  constructor() { }

  ngOnInit() {
  }

}
