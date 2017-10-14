import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ActionButtonComponent } from './action-button/action-button';
import { TweetComponent } from './tweet/tweet';
import { TimelineComponent } from './timeline/timeline';
import { TimelineHeadComponent } from './timeline-head/timeline-head';
@NgModule({
	declarations: [
		ActionButtonComponent,
		TweetComponent,
    TimelineComponent,
    TimelineHeadComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		ActionButtonComponent,
		TweetComponent,
    TimelineComponent,
    TimelineHeadComponent
	]
})
export class ComponentsModule {}
