import { Component, OnInit } from '@angular/core';
import { MergeRequest } from '../mergerequest';
import { GitlabService } from '../gitlab.service';

@Component({
  selector: 'app-mergerequests',
  templateUrl: './mergerequests.component.html',
  styleUrls: ['./mergerequests.component.css']
})
export class MergerequestsComponent implements OnInit {
  mergeRequests: MergeRequest[];

  constructor(
    private gitlabService: GitlabService
  ) { }

  ngOnInit() {
    this.getMergeRequests();
  }

  getMergeRequests(): void {
    this.gitlabService.getMergeRequests()
      .subscribe(mergeRequests => this.mergeRequests = mergeRequests);
  }
}
