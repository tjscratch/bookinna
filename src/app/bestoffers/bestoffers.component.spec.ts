import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestoffersComponent } from './bestoffers.component';

describe('BestoffersComponent', () => {
  let component: BestoffersComponent;
  let fixture: ComponentFixture<BestoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
