import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitsComponent } from './habits.component';
import {TestComponent} from "./components/test/test.component";

const routes: Routes = [
  {path: 'habits', component: HabitsComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsRoutingModule {
}
