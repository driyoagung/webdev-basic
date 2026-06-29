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
          { text: 'Form & Input', link: '/html/form-input' },
          { text: 'Semantic HTML', link: '/html/semantic' }
        ]
      },
      {
        text: 'CSS Dasar',
        collapsed: false,
        items: [
          { text: 'Pengenalan CSS', link: '/css/' }
        ]
      },
      {
        text: 'JavaScript Dasar',
        collapsed: false,
        items: [
          { text: 'Pengenalan JS', link: '/js/' }
        ]
      }
    ]
  }
}
