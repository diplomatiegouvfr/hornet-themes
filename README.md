
# Hornet-themes

Hornet-themes est le projet qui permet de construire les thèmes du framework Hornet. 
Pour cela, il met à disposition un thème par défaut : `intranet`

Il est basé sur le framework `purecss` qui est référencé dans le sous projet hornet-themes-commun.

## Pré-requis

- nodejs 4.X
- hornet-js-builder 5.X

## Installation

- Récupérer le projet hornet-themes
- Lancer la commande `hb install` sur le sous-répertoire `hornet-themes-commun`
- Lancer la commande `hb install` sur le sous-répertoire `hornet-themes-intranet`


Dans le cas où l'accès à npm n'est pas possible, deux possiblités sont offertes : 

- Publier `hornet-themes-commun` dans un repository local, ex sinopia
```shell
$ npm publish 
```
- ou bien copier le répertoire `hornet-themes-commun` dans le `node_modules\app` du theme `hornet-themes-intranet` 


## Exécution en mode console

```shell
$ node C:\Users\{userName}\AppData\Roaming\npm\node_modules\hornet-js-builder\src\server-themes.js {CHEMIN_WORKSPACE}\hornet-themes\hornet-themes-intranet\bin
```

## Exécution sous Webstorm

- Sous WebStorm, Cliquer sur le menu `Run > Edit Configurations`
- Se positionner sur `Defaults > node.js` puis cliquer sur `Ajouter`

Champs à valoriser:
- name: server themes
- Node Interpreter: par défaut, `C:\Program Files\nodejs\node.exe`
- Working Directory: chemin du workspace {CHEMIN_WORKSPACE}
- Javascript File: `C:\Users\{userName}\AppData\Roaming\npm\node_modules\hornet-js-builder\src\server-themes.js`
- Application parameter: `{CHEMIN_WORKSPACE}\hornet-themes\hornet-themes-intranet\bin`

Lancer le serveur de themes.

## Vérification

Accès aux ressources du CDN via un navigateur web : `[PROTOCOLE]://[URL]:[PORT]/hornet/5.0.0/intranet/css/theme.css` 

Par défaut : `http://localhost:7777/5.0.0/intranet/`

Le fichier ainsi affiché doit commencer par ceci :

```css
/*!
Pure v0.5.0
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yui/pure/blob/master/LICENSE.md
*//*!
```

## Packaging

```shell
$ hb package
```

Récupérer le livrable dans le répertoire : `hornet-themes\hornet-themes-intranet\bin\hornet-themes-intranet-5.0.0.zip`

## Déploiement Apache

### Pré-requis

Le Frontal Apache doit être configuré avec un `DocumentRoot`, ou un alias permettant d'accéder au répertoire qui contiendra les thèmes.

La configuration du Apache doit permettre les `Cross-Domains` afin de pouvoir charger les polices d'écritures.

Pour celà la configuration doit comporter les lignes suivantes :

```xml
	<IfModule mod_headers.c>
		Header set Access-Control-Allow-Origin *
	</IfModule>
```

### Déploiement

1. Récupérer le zip contenant les thèmes.
2. Le décompresser dans le répertoire cible.

L'arborescence obtenue doit ressembler à ceci :

```
[DocumentRoot ou Alias]
	/hornet
		/5.0.0
			/intranet
```


## Licence

applitutoriel-service est sous [licence cecill 2.1](./LICENCE.md).

Site web : [![http://www.cecill.info](http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html)](http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html)
