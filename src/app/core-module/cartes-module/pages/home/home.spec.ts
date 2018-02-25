import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { DataService } from '../../../../data-service/data.service';
import { NotificationsService } from '../../../notifications-service/notifications.service';

import { HomePage } from './home';
import { NavMock, NotifMock, DataMock } from '../../../../../../test-config/mocks-ionic';

describe('HomePage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
	{ provide: NavController, useClass: NavMock },
	{ provide: DataService, userClass: DataMock },
	{ provide: NotificationsService, useClass: NotifMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

});
