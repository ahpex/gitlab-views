import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { GitlabService } from './gitlab.service';
import { HttpHandler } from '@angular/common/http';

describe('GitlabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitlabService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([GitlabService, HttpClient, HttpHandler], (service: GitlabService) => {
    expect(service).toBeTruthy();
  }));
});
