import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{
     constructor(private taskservice: TasksService,private router:  Router ){}
  

     addTask(name: any ,des: any ,date: any){
      this.taskservice.addTask(name.value,des.value,date.value);
      this.router.navigate(['/']);
     }
     ngOnInit(): void {
       
     }
}
