import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSpacePage } from './view-space.page';

describe('ViewSpacePage', () => {
  let component: ViewSpacePage;
  let fixture: ComponentFixture<ViewSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
