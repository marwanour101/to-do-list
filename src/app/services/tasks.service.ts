import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[]=[
   { title: "Assignment Hci",
   description: "TO DO LIST WITH ANGULAR",
   date:"2/5/2024",
   completed:false
   } ,
   { title: "Quiz Social",
   description: "ON paper in the lab ",
   date:"2/5/2024",
   completed:false
   } 
  ]
  constructor() { }
  deleteTask(i:number){
    this.tasks.splice(i,1);

  }
  addTask(titl: any,descriptio: any ,dat: any)
  {
    this.tasks.push({
      title:titl,
      description:descriptio,
      date:dat,
      completed:false

    })
  }
  updateTask(id: any, item: any){
     this.tasks[id]=item;
  }
  toggleTaskCompletion(i:number){
    this.tasks[i].completed = !this.tasks[i].completed;
  }
}
