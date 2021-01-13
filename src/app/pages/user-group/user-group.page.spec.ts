import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserGroupPage } from './user-group.page';

describe('UserGroupPage', () => {
  let component: UserGroupPage;
  let fixture: ComponentFixture<UserGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
