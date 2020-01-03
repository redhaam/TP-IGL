/**
 * Représente l'emploi du temps d'un groupe ou d'un enseignant
 * **Remarque d'implémentation : les détails d'une séance ont tous le même indice dans les differentes listes **
 * Exemple :
 * seances[i] = "8h30-9h30"
 * modules[i] = "IGL"
 * salles[i] = "S10"
 * nom_enseignant[i] = "Yessad"
 */
export interface Edt {
  /** Les horraires des séances */
  seances: Array<string>;
  /** Le module enseigné pour chaque séance */
  modules: Array<string>;
  /** La salle dans laquelle se déroule la séance */
  salles: Array<string>;
  /** Le nom de l'enseignant chargé de la séance */
  nom_enseignant: Array<string>;
}
