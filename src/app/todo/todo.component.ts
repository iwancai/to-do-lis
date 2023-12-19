import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {

  taskArray = [{taskName: 'Clean Room', isCompleted: false, }]
  
  onSubmit(form: NgForm){
    console.log(form,'form')

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
  }
}
