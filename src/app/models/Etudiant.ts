import { User } from "./user";

/**
 * Represente l'étudiant
 */
export interface Etudiant {
  /** Détails du compte de l'étudiant */
  compte: User;
  /** identifiant pour repérer l'objet dans la base de donnée */
  _id: string;
  /** Matricule de l'étudiant. Identifiant unique */
  matricule: number;
  /** Nom de l'étudiant */
  nom: string;
  /** Préom de l'étudiant */
  prenom: string;
  niveauDEtude: number;
  /** Numero du groupe auquel appartient l'étudiant */
  num_gp: number;
  /** Nombre d'absences total de l'étudiant (tous modules confondus) */
  nb_absences: number;
  /** Moyenne générale de l'étudiant */
  moyenne: number;
}
