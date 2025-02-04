import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionInscriptionComponent } from './connexion-inscription.component';

describe('ConnexionInscriptionComponent', () => {
  let component: ConnexionInscriptionComponent;
  let fixture: ComponentFixture<ConnexionInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionInscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
