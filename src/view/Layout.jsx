const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/js/bootstrap.bundle.min.js" crossOrigin="anonymous" />
        <script defer src="/js/application.js" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/main.css" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Logo</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/chat">Chat</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12">
                { children }
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__content">
            <h1 className="footer__title">Footer</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
