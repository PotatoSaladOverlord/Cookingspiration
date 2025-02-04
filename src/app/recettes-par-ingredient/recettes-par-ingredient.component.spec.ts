import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesParIngredientComponent } from './recettes-par-ingredient.component';

describe('RecettesParIngredientComponent', () => {
  let component: RecettesParIngredientComponent;
  let fixture: ComponentFixture<RecettesParIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesParIngredientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesParIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
