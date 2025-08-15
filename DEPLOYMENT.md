# 🚀 Déploiement Netlify - Wake Up Academy

## 📋 Prérequis

- Compte Netlify (gratuit)
- Repository GitHub connecté
- Build de production réussi

## 🔧 Configuration

### 1. Fichiers de configuration

- ✅ `netlify.toml` - Configuration Netlify optimisée
- ✅ `next.config.mjs` - Configuration Next.js avec export statique
- ✅ `.gitignore` - Fichiers exclus du déploiement

### 2. Variables d'environnement

Dans Netlify, configurez :
```
NODE_VERSION=18
NPM_FLAGS=--version
```

## 🚀 Déploiement automatique

### Option 1 : Connecter GitHub (Recommandé)

1. **Connectez-vous à Netlify** : https://app.netlify.com
2. **Cliquez sur "New site from Git"**
3. **Choisissez GitHub** et autorisez l'accès
4. **Sélectionnez le repository** : `wakeupacademy/wakeup`
5. **Configuration automatique** :
   - Build command : `pnpm build`
   - Publish directory : `out` ⚠️ **IMPORTANT : Utilisez `out` et non `.next`**
6. **Cliquez sur "Deploy site"**

### Option 2 : Déploiement manuel

1. **Build local** : `pnpm build`
2. **Dossier à déployer** : `out` ⚠️ **Utilisez le dossier `out`**
3. **Glissez-déposez** le dossier `out` sur Netlify

## ⚠️ **Points critiques pour éviter l'erreur 404**

1. **Dossier de publication** : Utilisez `out` et non `.next`
2. **Configuration Next.js** : `output: 'export'` est activé
3. **Redirections** : Configurées dans `netlify.toml`
4. **Build** : Doit générer des fichiers HTML statiques

## 📱 Configuration du domaine

- **URL Netlify** : `https://votre-site.netlify.app`
- **Domaine personnalisé** : Configurez dans les paramètres du site
- **HTTPS** : Automatiquement activé

## 🔄 Déploiements continus

- **Automatique** : À chaque push sur `main`
- **Preview** : Branches de fonctionnalités
- **Rollback** : Versions précédentes disponibles

## 📊 Monitoring

- **Build logs** : Disponibles dans Netlify
- **Performance** : Analytics intégrés
- **Uptime** : Monitoring automatique

## 🆘 Dépannage

### Erreurs courantes

1. **Page 404** : Vérifiez que le dossier de publication est `out`
2. **Build échoue** : Vérifiez `pnpm build` en local
3. **Routes cassées** : Vérifiez les redirections dans `netlify.toml`

### Vérifications

- ✅ Build génère le dossier `out`
- ✅ Fichiers HTML présents dans `out`
- ✅ Configuration Netlify pointe vers `out`
- ✅ Redirections configurées

## 🔧 Configuration technique

### Next.js config
```javascript
output: 'export',
trailingSlash: true,
distDir: 'out'
```

### Netlify config
```toml
publish = "out"
command = "pnpm build"
```

---

**🎉 Votre site Wake Up Academy sera bientôt en ligne sans erreur 404 !**
