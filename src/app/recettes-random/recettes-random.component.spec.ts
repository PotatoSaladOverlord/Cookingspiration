import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesRandomComponent } from './recettes-random.component';

describe('RecettesRandomComponent', () => {
  let component: RecettesRandomComponent;
  let fixture: ComponentFixture<RecettesRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
