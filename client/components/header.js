import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Log in', href: '/auth/signin' },
    currentUser && { label: 'Sell Ticket', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li className="nav-item" key={href}>
          <Link href={href}>
            <a className="nav-link" style={{ color: 'black' }}>
              {label}
            </a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">T-Swapping</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-toggler"
        aria-controls="nav-toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={(e) => {
          const element = document.getElementById('nav-toggler');
          element.classList.toggle('show');
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav-toggler">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">{links}</ul>
      </div>
    </nav>
  );
};
