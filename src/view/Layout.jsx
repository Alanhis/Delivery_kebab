const React = require('react');
const NavBar = require('./components/NavBar');
const Footer = require('./components/Footer');

function Layout({ place, user, title, children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          defer
          src='/js/bootstrap.bundle.min.js'
          crossOrigin='anonymous'
        />
        {place ? <script src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${place}`} type="text/javascript" /> : ''}
        <script defer src='/js/application.js' />
        <link
          href='/css/bootstrap.min.css'
          rel='stylesheet'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href='/css/main.css' />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <NavBar user={user} />
        </header>
        <main>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>{children}</div>
            </div>
          </div>
        </main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

module.exports = Layout;
