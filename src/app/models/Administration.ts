import { User } from "./user";
/**
 * Représente l'administration
 */
export interface Administration {
  /** Détails du compte de l'administrateur */
  user: User;
  /** Nom de l'administrateur */
  nom: string;
  /** Prénom de l'administrateur */
  prenom: string;
  /** identifiant pour repérer l'objet dans la base de donnée */
  _id: string;
}
