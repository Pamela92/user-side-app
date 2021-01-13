import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavouriteSpacePage } from './favourite-space.page';

describe('FavouriteSpacePage', () => {
  let component: FavouriteSpacePage;
  let fixture: ComponentFixture<FavouriteSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
