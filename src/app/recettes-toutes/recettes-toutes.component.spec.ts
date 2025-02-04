import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesToutesComponent } from './recettes-toutes.component';

describe('RecettesToutesComponent', () => {
  let component: RecettesToutesComponent;
  let fixture: ComponentFixture<RecettesToutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesToutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesToutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
