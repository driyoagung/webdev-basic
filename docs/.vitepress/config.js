export default {
  title: 'Web Dev Basic',
  description: 'Dokumentasi dan Contoh Kode untuk Belajar Web Development Dasar',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JavaScript', link: '/js/' }
    ],
    sidebar: [
      {
        text: 'HTML Dasar',
        collapsed: false,
        items: [
          { text: 'Pengenalan HTML', link: '/html/' },
          { text: 'Teks & Formatting', link: '/html/teks-formatting' },
          { text: 'Media & Link', link: '/html/media-link' },
          { text: 'Tabel (Tables)', link: '/html/tabel' },
          { text: 'Form & Input', link: '/html/form-input' },
          { text: 'Semantic HTML', link: '/html/semantic' }
        ]
      },
      {
        text: 'CSS Dasar',
        collapsed: false,
        items: [
          { text: 'Pengenalan & Selektor', link: '/css/' },
          { text: 'Box Model', link: '/css/box-model' },
          { text: 'Teks & Warna', link: '/css/typography-colors' },
          { text: 'Layout Flexbox', link: '/css/flexbox' },
          { text: 'Layout Grid', link: '/css/grid' },
          { text: 'Responsive & Media', link: '/css/responsive' }
        ]
      },
      {
        text: 'JavaScript Dasar',
        collapsed: false,
        items: [
          { text: '1. Dasar JavaScript', link: '/js/1-dasar' },
          { text: '2. Object & Array', link: '/js/2-object-array' },
          { text: '3. ES6+ Modern', link: '/js/3-es6' },
          { text: '4. Function Mendalam', link: '/js/4-advanced-function' },
          { text: '5. Asynchronous JS', link: '/js/5-async' },
          { text: '6. DOM & Events', link: '/js/6-dom-events' },
          { text: '7. Fetch API', link: '/js/7-fetch-api' },
          { text: '8. Error, Module, OOP', link: '/js/8-error-module-oop' },
          { text: '9. Konsep Penting', link: '/js/9-konsep-penting' }
        ]
      }
    ]
  }
}
