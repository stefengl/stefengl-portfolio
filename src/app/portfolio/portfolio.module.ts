// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import {
  BusinessComponent,
  CardComponent,
  EducationComponent,
  EntryComponent,
  FooterComponent,
  IntroductionComponent,
  PersonalComponent,
  PlaygroundComponent,
  QuoteComponent,
  SocialsComponent,
  PortfolioComponent
} from './components/components';

// Routes
import { portfolioRoutes } from './portfolio.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(portfolioRoutes)
  ],
  declarations: [
    BusinessComponent,
    CardComponent,
    EducationComponent,
    EntryComponent,
    FooterComponent,
    IntroductionComponent,
    PersonalComponent,
    PlaygroundComponent,
    QuoteComponent,
    SocialsComponent,
    PortfolioComponent
  ]
})
export class PortfolioModule { }
