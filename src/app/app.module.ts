import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { UiEtudiantComponent } from './Components/ui-etudiant/ui-etudiant.component';
>>>>>>> 3c2038f2be96cf89eb3890e26cf02c3e9de86a99
@NgModule({
  declarations: [AppComponent, LoginComponent, UiEtudiantComponent],
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
export class AppModule { }
