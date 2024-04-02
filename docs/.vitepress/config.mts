import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code', link: '/andry-ravelomanantsoa#code' },
      { text: 'Autres', link: '/andry-ravelomanantsoa#autres' }
    ],

    sidebar: [
      {
        text: 'Code',
        items: [
          { text: 'Lisibilité du code'},
          { text: 'Conformité du code aux bonnes pratiques de programmation'},
          { text: 'Conformité du code aux normes et standards de programmation' }

        ]
      },
      {
        text: 'Autres',
        items: [
          { text: 'Considération de la sécurité' },
          { text: `Suggestions d'amélioration de l'algorithme`}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
