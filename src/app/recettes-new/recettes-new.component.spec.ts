import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesNewComponent } from './recettes-new.component';

describe('RecettesNewComponent', () => {
  let component: RecettesNewComponent;
  let fixture: ComponentFixture<RecettesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecettesNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
