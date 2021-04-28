export type BugState = 'opened' | 'pending' | 'closed';
export class Bug {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public state:  BugState
  ) {}
}
