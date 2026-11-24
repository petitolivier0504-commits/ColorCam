# ColorCam

ColorCam aide les personnes qui ont des difficultés à distinguer les couleurs. Le prototype identifie la couleur sous un viseur à partir de la caméra ou d'une photo importée. Il affiche le nom de la couleur CSS la plus proche et permet de l'écouter ou de copier le code HEX mesuré.

Ce premier commit conserve le prototype HTML d'origine. L'objectif du projet est de proposer une PWA accessible sur Internet et installable sur Android et iPhone. L'installation et le déploiement sont prévus pour des étapes ultérieures.

## Essayer le prototype

Depuis la racine du dépôt, lancer un serveur HTTP local avec Python 3.

```sh
python3 -m http.server 8000
```

Ouvrir `http://localhost:8000` dans un navigateur. Pour utiliser la caméra, autoriser son accès. Sur smartphone, utiliser une URL HTTPS.

Le prototype propose un viseur déplaçable, le zoom et le déplacement dans l'image, le verrouillage de la couleur détectée, ainsi que la capture et le téléchargement de photos. Le français est activé par défaut et l'anglais est disponible. La reconnaissance s'appuie sur l'espace CIELab, une implémentation de CIEDE2000 et le dictionnaire des couleurs CSS.

## Problèmes connus

Le changement de caméra peut échouer sur smartphone. Des déplacements involontaires pendant le zoom, des doubles affichages occasionnels et des libellés français incorrects ont également été signalés. Plusieurs événements peuvent démarrer des boucles de rendu concurrentes.
