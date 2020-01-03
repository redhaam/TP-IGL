/**
 * Represente un feedback donné par un certain étudiant
 */
export interface Feedback {
  /** Identifiant unique du feedback */
  _id: string;
  /** Nom du module concerné par le feedback */
  nomModule: string;
  /** Niveau d'étude de l'étudiant */
  anneDetude: string;
  /** Corps du feedback */
  contenu: string;
}
