import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { UiFeedbackComponent } from "./Components/ui-feedback/ui-feedback.component";

const routes: Routes = [
  {
    path: "",
    component: /* LoginComponent */ UiFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
