import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesDetailComponent } from './recettes-detail.component';

describe('RecettesDetailComponent', () => {
  let component: RecettesDetailComponent;
  let fixture: ComponentFixture<RecettesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
