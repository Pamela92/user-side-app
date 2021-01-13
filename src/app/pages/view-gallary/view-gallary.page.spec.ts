import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewGallaryPage } from './view-gallary.page';

describe('ViewGallaryPage', () => {
  let component: ViewGallaryPage;
  let fixture: ComponentFixture<ViewGallaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGallaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGallaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
