import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./Components/login/login.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { EnseignantComponent } from "./Components/enseignant/enseignant.component";
import { HttpClientModule } from "@angular/common/http";
import { UiEtudiantComponent } from "./Components/ui-etudiant/ui-etudiant.component";
<<<<<<< HEAD
import { NotFoundComponent } from './Components/not-found/not-found.component';
=======
import { UiFeedbackComponent } from "./Components/ui-feedback/ui-feedback.component";
>>>>>>> 25bf2af67112d2a7a14973190ca5a80fc5c3a0d3

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiEtudiantComponent,
    EnseignantComponent,
    NavbarComponent,
<<<<<<< HEAD
    NotFoundComponent
=======
    UiFeedbackComponent
>>>>>>> 25bf2af67112d2a7a14973190ca5a80fc5c3a0d3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
