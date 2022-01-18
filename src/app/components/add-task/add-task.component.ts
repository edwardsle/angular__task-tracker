import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component(
  {
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
  }
)
export class AddTaskComponent implements OnInit 
{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subcription: Subscription;

  constructor(private uiService: UiService) 
  { 
    this.subcription = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddTask = value));
  }

  ngOnInit(): void 
  {
  }

  onSubmit()
  {
    if(!this.text)
    {
      alert('Please add a task');
      return;
    }

    if(!this.day)
    {
      alert('Please add day and time');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
    
    // reset form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
