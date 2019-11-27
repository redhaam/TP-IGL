import { User } from "./user";

export interface Etudiant {
  compte: User;
  _id: string;
  matricule: number;
  nom: string;
  prenom: string;
  niveauDEtude: number;
  nom_gp: string;
  nb_absences: number;
  moyenne: number;
}
