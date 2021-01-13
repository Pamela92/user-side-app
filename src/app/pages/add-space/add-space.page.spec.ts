import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSpacePage } from './add-space.page';

describe('AddSpacePage', () => {
  let component: AddSpacePage;
  let fixture: ComponentFixture<AddSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
