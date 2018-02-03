import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergerequestsComponent } from './mergerequests.component';

describe('MergerequestsComponent', () => {
  let component: MergerequestsComponent;
  let fixture: ComponentFixture<MergerequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergerequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
