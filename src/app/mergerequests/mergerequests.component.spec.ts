import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { GitlabService } from '../gitlab.service';
import { MergerequestsComponent } from './mergerequests.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MergerequestsComponent', () => {
  let component: MergerequestsComponent;
  let fixture: ComponentFixture<MergerequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergerequestsComponent ],
      providers: [ GitlabService, HttpHandler, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([GitlabService, HttpHandler, HttpClient], () => {
    expect(component).toBeTruthy();
  }));
});
