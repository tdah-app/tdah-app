import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './pages/list/list';
import { ViewMethodes } from './pages/methode/view-methodes.component';

@NgModule({
  imports: [
	  CommonModule,
	  IonicPageModule.forChild(ViewMethodes)
  ],
  declarations: [
	  ListPage,
	  ViewMethodes
  ],
  entryComponents: [
	  ListPage,
	  ViewMethodes
  ],	
})
export class MethodesModule {}
