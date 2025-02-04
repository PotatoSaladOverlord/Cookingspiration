import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesParNomComponent } from './recettes-par-nom.component';

describe('RecettesParNomComponent', () => {
  let component: RecettesParNomComponent;
  let fixture: ComponentFixture<RecettesParNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesParNomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
