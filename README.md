Undercover Game in React 18


# Rules

Vous choisissez 2 mots similaires (ex: eau et lave).
Parmis ces 2 mots il y en a 1 qui est le mot de "l'undercover" ce mot est uniquement attribue a une seule personne.
Un autre joueur est designe comme "Mr. White" ce joueur n'aura pas de mot et donc devra decouvrir les mots en jeu pour pouvoir se fondre dans la masse.
Tout les joueurs (les inspecteurs) se verront attribues le deuxieme mot.

La partie se constitue en 3 manche ou chaque joueur devra devoiler un mot en rapport avec celui qu'il a recu au debut de la partie (ou non si Mr.White)
Au bout de ces 3 manches un debat est lance entre les joueurs pour essayer de trouver l'undercover et le Mr. White
Lorsque le debat est fini les resultats sont affiches et les masques tombent. 
Ceci marque la fin d'une partie.

Le but de l'undercover et de Mr. White est de ne pas se faire reperer par les autres joueurs en devinant le mot des inspecteurs et donc de brouiller les pistes.

# Systeme de points 
Joueurs "inspecteur" : 
* Si vote pour la mauvaise personne perds X points (X = nombre de joueurs ayant voté pour la mauvaise personne)
* Ne subit pas de changement si vote blanc
* Si vote pour la bonne personne gagne X points (X = nombre de joueurs ayant voté pour la bonne personne)

Joueur "undercover" ou "Mr. White" :
* Gagne 1 point pour chaque "inspecteur" n'ayant pas voté pour lui
* Perds 1 point pour chaque "inspecteur" ayant voté pour lui
* Bonus 1-2 points (selon nombre de joueur) si il n'est pas la personne ayant le plus de vote
