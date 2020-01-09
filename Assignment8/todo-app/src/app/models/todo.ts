// TO-DO item schema
export class Todo {
    id: number;
    title: string;
    status: boolean;
    description: string;
    dueDate: Date;
    createdDate: Date;
    constructor(title: string, description: string, dueDate: Date) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.createdDate = new Date();
    }
}
