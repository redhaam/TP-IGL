import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UiEtudiantComponent } from './Components/ui-etudiant/ui-etudiant.component';
=======
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./Components/login/login.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { EnseignantComponent } from "./Components/enseignant/enseignant.component";
import { HttpClientModule } from "@angular/common/http";
import { UiEtudiantComponent } from "./Components/ui-etudiant/ui-etudiant.component";

>>>>>>> 44759c5b5db16fe05f54a3a12ec7ffe6e504bae9
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiEtudiantComponent,
    EnseignantComponent,
    NavbarComponent
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
