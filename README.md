# Hangman-Game



Jeu de pendu en javascript(DOM)

-Jouer : prends un mot au hasard dans une array et le convertis en tableau avec des "_" qui s'affiche dans 
la partie violette.

-Tester Lettre : remplace le "_" par l'input si présent dans le mot issu du premier array;
Incrémente en compteur avec les erreurs dont dépend un deuxième compteur pour faire changer l'image en fonction des mauvaises réponses.
S'il n'y a plus de "_", affiche = "you win"

input avec .focus() : évite de cliquer dans l'input à chaque fois que l'on veut écrire;
addEventListener avec "keypress" pour que la touche entrer soit activée. 

Les lettres déjà utilisées sont stockées dans la barre verte à droite. 

Choix du mot au clic avec une fonctionr random dans un tableau. Le même clic génère un nouveau tableau de longueur égale au mot avec des _ pour entrées.
