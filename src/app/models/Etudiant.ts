import { User } from './user';

export interface Etudiant {
  compte: User;
  matricule: number;
  nom: string;
  prenom: string;
  nom_gp: string;
  nb_absences: number;
  moyenne: number;
}
