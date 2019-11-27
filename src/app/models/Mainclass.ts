import { Administration } from "./Administration";
import { Enseignant } from "./Enseignant";
import { Groupe } from "./Groupe";
import { Feedback } from "./Feedback";

/**
 * Classe principale. Regroupe toutes les listes des différents comptes
 */
export interface Mainclass {
  /** Liste de tous les comptes Administrateurs */
  admins: Array<Administration>;
  /** Liste de tous les comptes Enseignants */
  enseignants: Array<Enseignant>;
  /** Liste de tous les comptes Etudiants */
  groupes: Array<Groupe>;
  /** Liste des feedback qu'ont livré les étudiants */
  feedbacks: Array<Feedback>;
}
