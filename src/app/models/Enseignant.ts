import { User } from "./user";
import { Groupe } from "./Groupe";
import { Edt } from "./emploi_temps";

/**
 * Représente l'enseignant
 */
export interface Enseignant {
  /** Détails du compte de l'enseignant */
  compte: User;
  /** Nom de l'enseignant */
  nom: string;
  /** Préom de l'enseignant */
  prenom: string;
  /** Liste de tous les groupes qu'il enseigne */
  groupes: Array<Groupe>;
  /** L'emploi du temps de l'enseignant */
  emploi_temps: Edt;
}
