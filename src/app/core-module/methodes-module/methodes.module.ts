import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './pages/list/list';

@NgModule({
  imports: [
	  CommonModule,
	  IonicPageModule.forChild(ListPage)
  ],
  declarations: [
	  ListPage
  ],
  entryComponents: [
	  ListPage
  ],	
})
export class MethodesModule {}
