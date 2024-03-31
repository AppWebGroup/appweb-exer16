---
outline: deep
---

# Revue de Code Tp1 Andry Ravelomanantsoa

[GitHub-project-link](https://github.com/AndryRv/tp1_AndryRavelomanantsoa.git)

Ce lien redirige vers le TP1 d'application web d'Andry Ravelomanantsoa.

## Code

**Lisibité du code**

Le code est facile à lire, car il y a des commentaires placés pour
la description de la tâche de certaines parties du code.

```
//init song list
fetchSongs().then(input => { songs.value = input }).catch( err => { displayErrorToast(err) });
```

Il y a aussi une bonne indentation, un bon nommages au niveau
des fonctions et des variables ce qui rend plus facile la compréhension
du code.

Finalement, la création d'objets a aidé
a avoir une meilleure séparation des tâches de chacun de ses onjets
ce qui améliore la lisité du code.

```
export type Song = {
    id : number,
    fileName: string,
    songName: string,
    desc : string,
    infosUrl : string,
    artistId: string
}

export type Author = {
    id : number,
    name : string,
    desc : string
}

```

**Conformité du code aux bonnes pratiques de programmation**

Pour la conformité aux bonnes pratiques de programmation, le code est propre.
Les fonctions ont tous des noms significatifs propres à leurs actions.

Il n'y aucun commentaires inutiles, tous les commentaires présents
sont là pour une meilleure compréhension du code.

Il y a une bonne gestion d'erreurs que ce soit au niveau de l'api
ou des erreurs qui peuvent subvenir lorsqu'il y a une mauvaise manipulation
du côté de l'utilisateur.

```
function initSongAudio() {
  try {
    playControllerRef.value?.stopButton()
    currentPlayedSong.src = "/api/files/songs/" + props.song?.fileName
  } catch {
     displayWarningToast(ERROR_SONG_NOT_FOUND)
  }

}

function handlePlaySong() {
  if(isNaN(currentPlayedSong.duration) || currentPlayedSong.duration === 0)  {
      displayWarningToast(WARNING_NO_SELECTED_SONG)
      playControllerRef.value?.stopButton()
    } else {
      currentPlayedSong.play()
    }
}
```

**Conformité du code aux normes et standards de programmation**

Il y a une bonne conformités aux normes et aux standarts de programmations,
car les différentes variables et constantes respectent la syntaxe appropriée.

```
const ERROR_SONG_NOT_FOUND = "Chanson Introuvable"
let currentPlayedSong = new Audio();
let elapsedTime = ref<string>();
```

Les fonctions n'ont pas plus de deux paramètres. Elles respectent toutes la
tâche qu'elles doivent effectuer.

## Autres

**Considération de la sécurité**

Dans le contexte du TP1, la sécurité a été bien gérer.
En effet, la gestion des erreurs au niveau de l'api, lorsqu'une chanson
n'a pas été trouvé où n'a pas été trouvé a été bien identifié.

**Suggestions d'amélioration de l'algorithme**

Les suggestions que j'aurais à faire seront d'éviter la redondance,
même si les cas de redondances étaient vraiment minimes.

```
currentPlayedSong.addEventListener("loadeddata", () => {
    const durationTime = currentPlayedSong.duration;
    const minutes = Math.floor(durationTime / 60);
    const seconds = Math.floor(durationTime % 60);
    duration.value = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

function getElapsedTime() {
   const currentTime = currentPlayedSong.currentTime;
   const minutes = Math.floor(currentTime / 60);
   const seconds = Math.floor(currentTime % 60);
   return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
```

Sinon, pour le reste des suggestions je n'ai rien à dire,
car j'ai trouvé le travail vraiment bien fait.
