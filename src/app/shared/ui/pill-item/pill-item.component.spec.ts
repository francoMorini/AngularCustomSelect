import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillItemComponent } from './pill-item.component';

describe('PillItemComponent', () => {
  let component: PillItemComponent;
  let fixture: ComponentFixture<PillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
