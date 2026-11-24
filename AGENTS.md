# Instructions pour ColorCam

## Objectif

Faire évoluer ColorCam vers une application web progressive accessible sur Internet et installable sur Android et iPhone. L'application aide notamment les personnes qui distinguent difficilement les couleurs à identifier celles de leur environnement ou d'une photo.

## Version de référence

Le premier commit conserve le prototype fourni octet pour octet sous `index.html`. Il ajoute uniquement ce document et le `README.md`. Les corrections et le travail PWA relèvent des étapes suivantes.

## Fonctionnalités à préserver

- Reconnaissance des couleurs en temps réel depuis la caméra et sur les photos importées.
- Accès aux caméras avant et arrière.
- Importation, capture et téléchargement de photos.
- Viseur déplaçable, zoom et dézoom au pincement, et déplacement dans l'image.
- Verrouillage de la couleur détectée, lecture vocale de son nom et copie de son code HEX.
- Français par défaut et anglais en option.
- Reconnaissance colorimétrique en CIELab avec la distance CIEDE2000 et le dictionnaire des couleurs CSS.

## Validation des évolutions

Vérifier la syntaxe JavaScript et les parcours caméra et photo après les changements concernés. Tester le changement de caméra, les gestes tactiles et l'installation PWA dans les navigateurs mobiles ciblés. Utiliser HTTPS pour les essais de la caméra sur smartphone.

Tenir compte des défauts signalés lors des améliorations. Ils concernent la bascule de caméra, les déplacements involontaires au zoom, le double affichage, les traductions françaises et la multiplication des boucles de rendu.
