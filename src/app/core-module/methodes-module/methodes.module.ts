import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';

import { ViewMethodes } from './pages/methode/view-methodes.component';

@NgModule({
  imports: [
	  CommonModule,
	  IonicPageModule.forChild(ViewMethodes)
  ],
  declarations: [
	  ViewMethodes
  ],
  entryComponents: [
	  ViewMethodes
  ],	
})
export class MethodesModule {}
