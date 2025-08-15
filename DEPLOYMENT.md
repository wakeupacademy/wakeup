# 🚀 Déploiement Netlify - Wake Up Academy

## 📋 Prérequis

- Compte Netlify (gratuit)
- Repository GitHub connecté
- Build de production réussi

## 🔧 Configuration

### 1. Fichiers de configuration

- ✅ `netlify.toml` - Configuration Netlify
- ✅ `next.config.mjs` - Configuration Next.js optimisée
- ✅ `.gitignore` - Fichiers exclus du déploiement

### 2. Variables d'environnement (optionnel)

Si nécessaire, configurez dans Netlify :
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
   - Publish directory : `.next`
6. **Cliquez sur "Deploy site"**

### Option 2 : Déploiement manuel

1. **Build local** : `pnpm build`
2. **Dossier à déployer** : `.next`
3. **Glissez-déposez** le dossier `.next` sur Netlify

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

1. **Build échoue** : Vérifiez `pnpm build` en local
2. **Page blanche** : Vérifiez les routes Next.js
3. **Images cassées** : Vérifiez `next.config.mjs`

### Support

- **Documentation Netlify** : https://docs.netlify.com
- **Documentation Next.js** : https://nextjs.org/docs
- **Issues GitHub** : https://github.com/wakeupacademy/wakeup

---

**🎉 Votre site Wake Up Academy sera bientôt en ligne !**
