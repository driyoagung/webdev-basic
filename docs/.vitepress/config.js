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
          { text: 'Pengenalan & Variabel', link: '/js/' },
          { text: 'Logika & Perulangan', link: '/js/basic-logic' },
          { text: 'Function & Scope', link: '/js/functions' },
          { text: 'Array & Object Methods', link: '/js/data-structures' },
          { text: 'Async & API', link: '/js/advanced' },
          { text: 'DOM & Events', link: '/js/dom' }
        ]
      }
    ]
  }
}
