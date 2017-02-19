import {Component} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task";
import {Router} from "@angular/router";

@Component({
  selector: 'my-show',
  template: `<h1>My Tasks</h1>
<p *ngFor="let task of tasks">
<label>Date: </label>{{task.date}}<br>
<label>Title: </label>{{task.title}}<br>
<label>Description: </label>{{task.description}}<br>
<label>Priority: </label>{{task.priority}}<br>
<input type="button" style="background-color:#CFD8DC; font-size: 15px; padding: 5px 10px; border: none; font-family: Arial "  value="Edit" (click)=edit(detail)> 
<input type="button" style="background-color:#CFD8DC; font-size: 15px; padding: 5px 10px; border: none; font-family: Arial" value="Delete" (click)=delete(detail)><br></p>'

`,

})
export class ShowTaskComponent {
  tasks: Task[];
  date = "";

  constructor(private router: Router) { }
  public ngOnInit(): any {
    this.tasks = TaskService.details;
  }

  edit(detail: Task) {
    let storeage=new TaskService;
    TaskService.details.splice(this.tasks.indexOf(detail), 1);
    storeage.store(detail);
    this.router.navigate(['create']);
  }

  delete(detail: Task) {
    TaskService.details.splice(this.tasks.indexOf(detail), 1);
    this.tasks = TaskService.details;
  }
}
