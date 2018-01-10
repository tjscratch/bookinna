import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviaComponent } from './avia.component';

describe('AviaComponent', () => {
  let component: AviaComponent;
  let fixture: ComponentFixture<AviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
