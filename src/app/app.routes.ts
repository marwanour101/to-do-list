import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NgModule } from '@angular/core';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    {path: '',component :HomeComponent},
    {path:'add-task',component: AddTaskComponent},
    {path: 'task-detail/:id',component:TaskDetailComponent},
    {path: 'task-detail',component:TaskDetailComponent},
    {path:'**',component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }