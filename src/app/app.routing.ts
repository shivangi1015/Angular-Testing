import {Routes} from '@angular/router'
import {ShowTaskComponent} from "./showtask.component";
import {CreateTaskComponent} from "./createtask.component";



export const routes: Routes = [ {


  path: 'show',
  component: ShowTaskComponent
}, {
  path: 'create',
  component: CreateTaskComponent
},
  {
    path : 'create/:index',
    component: CreateTaskComponent
  },{
    path : 'edit/:i',
    component: CreateTaskComponent
  }];
