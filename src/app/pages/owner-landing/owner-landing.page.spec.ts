import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerLandingPage } from './owner-landing.page';

describe('OwnerLandingPage', () => {
  let component: OwnerLandingPage;
  let fixture: ComponentFixture<OwnerLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
