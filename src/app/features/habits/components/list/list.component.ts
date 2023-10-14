import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Habit } from "../../habit";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  {
  @Input() habits$: Observable<Habit[]> = new Observable<Habit[]>();
  @Output() updateHabitEventEmitter = new EventEmitter<Habit>();
  @Output() deleteHabitEventEmitter = new EventEmitter<Habit>();

  displayedHabitColumns: string[] = ['title', 'repeat', 'actions'];

  constructor() {}

  updateHabit(habit: Habit): void {
    this.updateHabitEventEmitter.emit(habit);
  }

  deleteHabit(habit: Habit) : void {
    this.deleteHabitEventEmitter.emit(habit);
  }
}
