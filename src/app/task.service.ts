import {Injectable} from "@angular/core";
import {Task} from "./task";

@Injectable()

export class TaskService{
  static data:Task=null;
  static details:Task[]=[{
    date: '5/1/2017',
    title:'Angular Js2',
    description:'Angular Js2 is a framework for single page application',
    priority: 'High'
  },
    {
      date: '15/1/2017',
      title:'HTML',
      description:'HTML is a markup language',
      priority: 'Medium'
    },
    {
      date: '27/2/2017',
      title:'Internal Assessment',
      description:'Test about our progress in training',
      priority: 'High'
    }];

  setDetails(task:Task){
    TaskService.details.push(task);
  }
  store(task:Task){
    TaskService.data=task;
  }
}
