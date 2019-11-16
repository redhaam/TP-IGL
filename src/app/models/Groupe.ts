import { Etudiant } from './Etudiant';
import { Edt } from './emploi_temps';

export interface Groupe {
  nom: string;
  etudiants: Array<Etudiant>;
  moyenne: number;
  emploi_temps: Edt;
}
