import { Component, OnInit } from '@angular/core';
import { Pipeline } from '../pipeline';
import { GitlabService } from '../gitlab.service';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.css']
})
export class PipelinesComponent implements OnInit {
  pipelines: Pipeline[];

  constructor(
    private gitlabService: GitlabService
  ) { }

  ngOnInit() {
    this.getPipelines();
  }

  getPipelines(): void {
    this.gitlabService.getPipelines()
      .subscribe(pipelines => this.pipelines = pipelines);
  }
}
