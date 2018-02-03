import { Author } from './author';
import { Assignee } from './assignee';
import { Milestone } from './milestone';
import { TimeStats } from './timestats';

export class MergeRequest {
    id: number;
    iid: number;
    target_branch: string;
    source_branch: string;
    project_id: string;
    title: string;
    state: string;
    created_at: string;
    updated_at: string;
    upvotes: number;
    downvotes: number;
    author: Author;
    assignee: Assignee;
    source_project_id: number;
    target_project_id: number;
    labels: string[];
    description: string;
    work_in_progress: boolean;
    milestone: Milestone;
    merge_when_pipeline_succeeds: boolean;
    merge_status: string;
    sha: string;
    merge_commit_sha: string;
    user_notes_count: number;
    changes_count: number;
    should_remove_source_branch: boolean;
    force_remove_source_branch: boolean;
    web_url: string;
    discussion_locked: boolean;
    time_stats: TimeStats;
}
