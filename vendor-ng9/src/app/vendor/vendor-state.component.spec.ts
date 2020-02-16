import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorStateComponent } from './vendor-state.component';

describe('VendorStateComponent', () => {
  let component: VendorStateComponent;
  let fixture: ComponentFixture<VendorStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
