import { Etudiant } from "./Etudiant";
import { Edt } from "./emploi_temps";

/**
 * Represente le groupe d'etudes
 */
export interface Groupe {
  /**
   * Nom du groupe ( doit contenir le niveau d'etude + numéro séquentiel)
   * **Exemple : 1CS07
   */
  nom: string;
  /** Liste des étudiants appartenants à ce groupe */
  etudiants: Array<Etudiant>;
  /** Moyenne générale du groupe */
  moyenne: number;
  /** Emploi du temps du groupe */
  emploi_temps: Edt;
}
