const React = require('react');

module.exports = function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary '>
      <div className='container-fluid d-flex '>
        <img src='/css/img/chief2.jpg' alt='logo' className='nav__logo_img mx-2' />
        <a className='navbar-brand text-center fs-4 fw-medium' href='/'>
          Kebab delivery
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav' style={{ margin: '0 auto'}}>
            <a className='nav-link active fs-4' aria-current='page' href='#'>
              Меню
            </a>
            <a className='nav-link fs-4' href='#'>
              Войти
            </a>
            <a className='nav-link fs-4' href='#'>
              Регистрация
            </a>
          </div>
          <div className='user-name mx-5'>
            <p className='user-name__title fs-4'> Привет, Guest</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
