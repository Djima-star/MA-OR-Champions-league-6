# MA-OR Champions League 6

Projet web du tournoi MA'OR Champions League 6.

## Installation

1. Remplacer la configuration Firebase dans `firebase.js`.
2. Activer Firebase Authentication avec Email/Password.
3. Créer le compte administrateur.
4. Dans Firestore, créer `users/{UID}` avec `role: "admin"`.
5. Créer les collections `teams` et `matches` via l'interface admin.
6. Héberger le dépôt avec GitHub Pages.

## Pages

- `index.html` : accueil
- `équipes.html` : équipes
- `matches.html` : matchs et résultats
- `classement.html` : classement automatique
- `admin.html` : administration et scores
