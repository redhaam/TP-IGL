import { User } from './user';
import { Groupe } from './Groupe';
import { Edt } from './emploi_temps';

export interface Enseignant {
  compte: User;
  nom: string;
  prenom: string;
  groupes: Array<Groupe>;
  emploi_temps: Edt;
}
