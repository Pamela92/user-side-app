import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkingSpacesPage } from './working-spaces.page';

describe('WorkingSpacesPage', () => {
  let component: WorkingSpacesPage;
  let fixture: ComponentFixture<WorkingSpacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingSpacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkingSpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
