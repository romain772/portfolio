module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  env: {
    ROOT_URL: 'https://portfoliorb.herokuapp.com',
    MAIL_USERNAME : 'romain.breuil@gmx.com',
    MAIL_PASSWORD : 'Parissg772*'
  },
  theme: {
    extend: {
      backgroundImage: {
       'pic': "url('/pic.jpg')",
      }
    }
  }
}
