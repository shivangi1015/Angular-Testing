import {Component, OnInit} from '@angular/core';
import {TaskService} from "./app.service";
import {Task} from "./task";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: 'showtask.component.html',
  styleUrls: ['']


})
export class ShowTaskComponent implements OnInit {
  constructor(private router: Router,
              private service: TaskService) {
  }

  tasks: Task[];

  ngOnInit() {
    this.service.getData().subscribe((data: any) => {
        this.tasks = data
        alert(JSON.stringify(data))
      },
      (err: any) => alert(err), () => {

      });

  }

  deleteByIndex(index: number) {

    this.service.remove(this.tasks[index]._id).subscribe()
    alert('Task Removed')
    this.router.navigate(['create'])
  }


  // editTask(index: number) {
  //   this.router.navigate(['create', index])
  // }

  edit(i:number){
     alert("Attempt to edit index: "+i)

    this.router.navigate(['edit',this.tasks[i]._id])
  }
}
