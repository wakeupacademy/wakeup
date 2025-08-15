# Wake Up Academy

🚀 **Réveillez votre potentiel avec Wake Up Academy**

Un site web moderne de développement personnel et de motivation, créé avec les technologies web les plus récentes.

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** avec section héro animée et design moderne
- 👤 **Section "Qui suis-je"** - Présentation du conférencier et coach
- 🎓 **Formations** - Programmes de développement personnel
- 📚 **Présentation du livre** - Découvrez l'ouvrage motivant
- 🎥 **Galerie de vidéos** - Contenus inspirants et motivants
- 🎵 **Section musique** - Chanter pour motiver
- 📞 **Contact** - Formulaire de contact et informations

## 🛠️ Technologies utilisées

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Frontend** : React 19
- **Styling** : Tailwind CSS 4
- **Composants UI** : shadcn/ui + Radix UI
- **Animations** : CSS Animations personnalisées
- **Gestionnaire de paquets** : pnpm

## 🚀 Installation et démarrage

1. **Cloner le repository**
   ```bash
   git clone https://github.com/wakeupacademy/wakeup.git
   cd wakeup
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   pnpm dev
   ```

4. **Ouvrir votre navigateur**
   Naviguez vers [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Section "Qui suis-je"
│   ├── training/          # Section "Se former"
│   ├── book/              # Section "Mon livre"
│   ├── videos/            # Section "Vidéos"
│   ├── music/             # Section "Chanter pour motiver"
│   └── contact/           # Section "Contact"
├── components/             # Composants React
│   ├── ui/                # Composants UI (shadcn/ui)
│   ├── navigation.tsx     # Navigation principale
│   └── [autres composants]
├── lib/                   # Utilitaires
└── public/                # Assets statiques
```

## 🎨 Design et UX

- **Identité visuelle** : Noir, blanc et bordeaux (#941E28)
- **Typographie** : Playfair Display (serif) et Open Sans (sans-serif)
- **Responsive** : Design adaptatif mobile-first
- **Animations** : Transitions fluides et micro-interactions
- **Accessibilité** : Composants conformes aux standards WCAG

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Déploiement

### Build de production
```bash
pnpm build
pnpm start
```

### Variables d'environnement
Créez un fichier `.env.local` pour les variables d'environnement :
```env
NEXT_PUBLIC_SITE_URL=https://wakeupacademy.com
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site web** : [wakeupacademy.com](https://wakeupacademy.com)
- **Email** : contact@wakeupacademy.com
- **GitHub** : [@wakeupacademy](https://github.com/wakeupacademy)

---

⭐ **N'oubliez pas de donner une étoile à ce projet si vous l'aimez !** 