import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Etudiant } from "src/app/models/Etudiant";
import { StudentService } from "src/app/Services/student.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  @ViewChild("formulaire", null) form: any;
  @Input() student: Etudiant = {
    _id: "",
    compte: {
      email: "",
      password: ""
    },
    nom: "",
    prenom: "",
    matricule: null,
    moyenne: null,
    niveauDEtude: null,
    nb_absences: 0,
    num_gp: null
  };
  constructor(private studentService: StudentService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.studentService.addStudent(this.student);
      alert("student added");
    }
  }
}
