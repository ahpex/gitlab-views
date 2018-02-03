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
}
