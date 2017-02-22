import {Component, OnInit} from '@angular/core';
import {TaskService} from "./app.service";
import {Task} from "./task";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: 'createtask.component.html',
  styles: [''],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  index: String;
  tasks:Task[]=[]
  task: Task = new Task('', '', '', '', '');

  constructor(private service: TaskService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = data.i;
      if (this.index) {

        this.service.getData().subscribe((data: any) => {
            this.task = data
            this.task = this.tasks.filter(x=>x._id==this.index)[0];
          },
          (err: any) => alert(err), () => {
            alert('Error')
          });
      }
    });
  }

  submit() {
    if (this.index) {

      this.service.updateTask(this.task).subscribe()
    } else {
      this.service.addTask(this.task).subscribe()
    }

    this.router.navigate(['show']);

  }
}
