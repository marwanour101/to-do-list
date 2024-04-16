import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit{
  taskId: any;
  task: any;
  constructor(private route: ActivatedRoute ,private taskservice: TasksService,private router:Router){

  }
  ngOnInit(): void {
    this.taskId= this.route.snapshot.paramMap.get('id');
    this.task= this.taskservice.tasks[this.taskId];

  }
  updateTask(){
    this.taskservice.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }
  deleteTask(){
    this.taskservice.deleteTask(this.taskId);
    this.router.navigate(['/']);
  }

  
}
