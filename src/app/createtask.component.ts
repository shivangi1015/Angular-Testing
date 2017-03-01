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

  index: string;
  newTask:Task[];

  task: Task = new Task('', '', '', '', '');

  constructor(private service: TaskService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = data.indexSent;
      if (this.index) {
        this.service.getData().subscribe(data => {
            this.newTask = data;
            this.task = this.newTask.filter((task: Task) => task._id === this.index)[0]
          },
          (err: any) => alert(err), () => {
            console.log("Success");
          });
      }

    });
  }

  submit() {
    // if (this.index) {
    //   this.service.updateTask(this.task).subscribe((data:any)=>alert(JSON.stringify(data)));
    // } else {
    //   this.service.addTask(this.task).subscribe((data:any)=>alert(JSON.stringify(data)))
    //   this.router.navigate(['show']);
    // }

    if (this.index) {
      //this.service.update(this.index, this.task);
      // this.service.remove(this.task._id).subscribe((data: any) => alert(JSON.stringify(data)));
      this.service.updateTask(this.task).subscribe((data: any) => {
        alert('Task Updated')
        this.router.navigate(['show']);
      }, err => {
        console.error(err);
      })
    } else {
      //this.service.add(this.task);
      this.service.addTask(this.task).subscribe((data: any) => {
        alert('Task Added')
        this.router.navigate(['show']);
      }, err => {
        console.error(err);
      })
    }

  }



  }

