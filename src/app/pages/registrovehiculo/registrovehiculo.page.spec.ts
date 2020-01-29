import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrovehiculoPage } from './registrovehiculo.page';

describe('RegistrovehiculoPage', () => {
  let component: RegistrovehiculoPage;
  let fixture: ComponentFixture<RegistrovehiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrovehiculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrovehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
