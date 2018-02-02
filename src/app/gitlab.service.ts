import { Injectable } from '@angular/core';
import { Pipeline } from './pipeline';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GitlabService {

private gitlabUrl = 'http://localhost:12300';
private gitlabProjectId = 42;
private gitlabProjectUrl = this.gitlabUrl + '/api/v4/projects/' + this.gitlabProjectId;
private pipelineUrl = this.gitlabProjectUrl + '/pipelines/index.json';

  constructor(
    private http: HttpClient
  ) {  }

  getPipelines(): Observable<Pipeline[]> {
    return this.http.get<Pipeline[]>(this.pipelineUrl);
  }

}
