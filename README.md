# YeCity-Mobile
## _La documentation_
Voici la documentation pour pouvoir utiliser l'application mobile YeCity-mobile.

## Pré-requis

- [Node.js](https://nodejs.org/)


## Installation

Installation du projet depuis le repository github

```sh
git clone https://github.com/Yellow-Network/Yecity-Mobile.git
cd Yecity-Mobile
npm install
```
Après avoir installé le projet, aller sur la branche api (la plus récente) pour avoir les derniers modifications stable de l'application :
```sh
git checkout api
git pull origin api
npm install
```

Pour générer un APK suivre les instructions suivantes :
```sh
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```
Vous trouverez votre apk à ce chemin => yourProject/android/app/build/outputs/apk/debug/app-debug.apk

