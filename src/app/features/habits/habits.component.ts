import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, tap } from 'rxjs';
import { HabitsFirestoreService } from "../../core/habits-firestore.service";
import { Habit } from "./habit";
import { FormComponent } from "./components/form/form.component";


@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent implements OnInit {
  habits$: Observable<Habit[]> = new Observable<Habit[]>();

  constructor(
    private readonly habitsFirestoreService: HabitsFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.habits$ = this.habitsFirestoreService.getAll();
  }

  addHabit() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '90%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((habit) => this.habitsFirestoreService.create(habit))
      )
      .subscribe();
  }

  updateHabit(habit: Habit) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...habit },
      width: '90%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((habit) => this.habitsFirestoreService.update(habit)),
      )
      .subscribe();
  }


  deleteHabit(habit: Habit) : void {
    this.habitsFirestoreService.delete(habit);
  }
}
