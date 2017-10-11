import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { TimelineComponent } from '../../components/timeline/timeline';
import { TimelineHeadComponent } from '../../components/timeline-head/timeline-head';
import { TweetComponent } from '../../components/tweet/tweet';
import { ActionButtonComponent } from '../../components/action-button/action-button';

// import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage,
    TimelineComponent,
    TimelineHeadComponent,
    TweetComponent,
    ActionButtonComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
