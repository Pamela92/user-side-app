import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateSpacePage } from './update-space.page';

describe('UpdateSpacePage', () => {
  let component: UpdateSpacePage;
  let fixture: ComponentFixture<UpdateSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
