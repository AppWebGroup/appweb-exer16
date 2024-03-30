---
outline: deep
---

# Revue de Code Tp1 Aboue Abigail Helene Beke


[GitHub-project-link](https://github.com/abihelene2/TP1_Audio_AbigailBeke.git)


Cette page montre la revue de code sur le TP1 ( Audio Song Player )

## Niveau Code
### Lisibilité et clarté

Dans le code partagé du TP1 par Abigail, le code est très clair et présente une facilité à lire. 
L'utilisation de petites fonctions qui font chacuns leurs tâches permet une plus grande facilité d'adpatation :

```md

function toShowAudio(elementToShow: any): void 
{
    elementToShow.remove("d-none")
}

function toHideAudio(elementToHide: any): void 
{
    elementToHide.add("d-none")
}
```
Cela permet aussi d'eviter le DRY en programmation 
( en appelant à chaque fois la fonction au lieu de reécrire à chaque fois l'élement à ajouter ou à supprimer)

### Séparation du code

Essayer d'intégrer dans des fichiers à part les fonctions qui ont pour but d'interroger le serveur. 
Par exemple, fetchSongs() et fetchArtists() dans un fichier songService.

```songService.ts

// Dans un fichier songService ou dans ce genre

async function fetchArtists() {
  let response = await fetch("http://localhost:3000/artists");
  if (!response.ok) {
    throw new Error(`HTTP error! list artists Status: ${response.status}`);
  }
  let artists = await response.json();
  return artists;
}

async function fetchArtists() {
  let response = await fetch("http://localhost:3000/artists");
  if (!response.ok) {
    throw new Error(`HTTP error! list artists Status: ${response.status}`);
  }
  let artists = await response.json();
  return artists;
}

```

## Belle gestion des erreurs

La gestion des erreurs n'est point négligé dans son travail pratique. 
En effet, lancer des exceptions dans le cas échéant où la requête n'est pas valide

```
if (!response.ok) {
  throw new Error(`HTTP error! list artists Status: ${response.status}`);
}

```

Dans l'ensemble, le travail pratique est très bien codé. Un très beau Tp!
