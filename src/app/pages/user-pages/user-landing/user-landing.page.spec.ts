import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLandingPage } from './user-landing.page';

describe('UserLandingPage', () => {
  let component: UserLandingPage;
  let fixture: ComponentFixture<UserLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
