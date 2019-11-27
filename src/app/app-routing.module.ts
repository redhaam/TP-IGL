import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { NotFoundComponent } from "./Components/not-found/not-found.component";
import { EnseignantComponent } from "./Components/enseignant/enseignant.component";
import { UiEtudiantComponent } from "./Components/ui-etudiant/ui-etudiant.component";
import { UiFeedbackComponent } from "./Components/ui-feedback/ui-feedback.component";
import { StudentFormComponent } from "./Components/student-form/student-form.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  { path: "login", component: LoginComponent },
  { path: "enseignant", component: EnseignantComponent },
  {
    path: "etudiant",
    component: UiEtudiantComponent
  },
  {
    path: "feedback",
    component: UiFeedbackComponent
  },
  { path: "ajout-etudiant", component: StudentFormComponent },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
