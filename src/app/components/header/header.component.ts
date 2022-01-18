import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faClock = faClock;
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subcription!: Subscription;

  constructor(private uiService:UiService) 
  { 
    this.subcription = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
