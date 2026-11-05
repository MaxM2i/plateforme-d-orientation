# MYWAY AI — Prototype d'orientation (version 2)

## Lancer le prototype
1. Décompresser l'archive.
2. Ouvrir `index.html` dans un navigateur récent.
3. Aucune installation, clé API ou inscription n'est nécessaire.

## Ce qui est fonctionnel
- Parcours invité sans création de compte.
- Questionnaire structuré en 11 étapes : situation, environnements, motivations, comportements, valeurs, mode de vie, atouts, apprentissage, contraintes, rapport au risque et projection.
- Questions à choix unique, choix multiples plafonnés et questions à choix multiples classés par priorité.
- Pour les questions classées, l'ordre de sélection définit le classement initial ; les flèches permettent ensuite de réordonner les priorités.
- Progression sauvegardée localement dans le navigateur (`localStorage`), avec possibilité de réinitialiser les réponses.
- Première synthèse structurée et pistes de familles professionnelles, accompagnées de raisons lisibles.

## Limites importantes
Cette version est un prototype de logique produit et d'interface. Les correspondances métiers sont heuristiques et illustratives. Il ne s'agit pas d'une IA, d'un test psychométrique validé, d'un bilan de compétences réglementé ou d'une recommandation de carrière certifiée. Aucun score de compatibilité probabiliste n'est présenté.

## Prochaine étape technique
Remplacer les heuristiques de démonstration par un moteur de profil documenté : dimensions, règles de pondération validées, niveaux de confiance, questions adaptatives, référentiel métiers français (ROME 4.0), compétences et certifications RNCP. Séparer strictement le calcul explicable des synthèses générées par IA. Ajouter ensuite une API sécurisée et un stockage serveur facultatif, avec consentement, export et suppression des données.
