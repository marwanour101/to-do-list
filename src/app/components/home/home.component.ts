import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  
  constructor(public taskservice: TasksService){

  }
  ngOnInit(): void {
   
  }

  deleteTask(i:number){
    this.taskservice.deleteTask(i);
  }
  toggleTaskCompletion(i:number)
  {
    this.taskservice.toggleTaskCompletion(i);
  }
 
}
