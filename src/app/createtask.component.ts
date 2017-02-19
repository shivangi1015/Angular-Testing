import {Component} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task";

@Component({
  selector: 'my-create',
  template: `<br> <br>
  <form (ngSubmit)="submit(date.value,title.value,description.value,priority.value)">
  <input type="date" class="form-control" placeholder="dd/mm/yyyy" value="{{data.date}}" #date><br>
  <input type="text" class="form-control" placeholder="Title" #title value="{{data.title}}"><br>
  <input type="text" class="form-control" placeholder="Description" #description value="{{data.description}}"><br>
      <label>Priority: </label><select #priority   >
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select><br><br>
  <button type="submit" style="background-color:#eee; font-size: 20px; border: none;
 font-family: Arial;padding: 5px 10px;
  border-radius: 4px;">Add</button>
</form>`,
  styles: [' .button: { background-color: red; '],
  providers: [TaskService]
})
export class CreateTaskComponent {
  details: Task[];
  data: Task;
  constructor(private service: TaskService) {
    this.details = TaskService.details;
  }

  submit(date: string, title: string, description: string, priority: string) {
    let service = new TaskService()
    let task = new Task()
    task.date = date;
    task.title = title;
    task.description = description;
    task.priority = priority;
    service.setDetails(task);
  }
  public ngOnInit() {
    if (TaskService.data != null) {
      this.data = TaskService.data;
    }else {
      this.data=new Task()
    }
  }
}
