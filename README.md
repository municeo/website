# Municeo Website

Landing page officielle de [Municeo](https://github.com/municeo/municeo) — plateforme participative open source pour les communes.

## Stack

- [Astro](https://astro.build/) — framework de site statique
- [Tailwind CSS](https://tailwindcss.com/) — design utilitaire
- [Netlify](https://netlify.com/) — hébergement (domaine: [municeo.fr](https://municeo.fr))

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Le site est généré dans le dossier `dist/`.

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.
La configuration Netlify est dans `netlify.toml`.
Le fichier `public/CNAME` pointe vers `municeo.fr`.
