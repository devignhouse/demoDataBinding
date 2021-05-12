import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundDataComponent } from './bound-data.component';

describe('BoundDataComponent', () => {
  let component: BoundDataComponent;
  let fixture: ComponentFixture<BoundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
