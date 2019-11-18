import { Administration } from './Administration';
import { Enseignant } from './Enseignant';
import { Groupe } from './Groupe';

export interface Mainclass {
  admins: Array<Administration>;
  enseignants: Array<Enseignant>;
  groupes: Array<Groupe>;
  feedbacks: Array<string>; // string ??
}
