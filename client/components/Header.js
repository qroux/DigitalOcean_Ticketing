import styles from "../styles/Header.module.scss"
import Link from 'next/link'

export default function Header({ currentUser }) {
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
        <Link href={href} key={label}>
          <a className={styles.navbar__item}>
            {label}
          </a>
        </Link>
      );
    });

  return (
    <div className={styles.navbar__layout}>
      <div className={styles.navbar__content}>
        <Link href="/">
        <a className={styles.navbar__brand}>T-Swapping</a>

        </Link>
        
        <div className={styles.navbar__links}>
          {links}
        </div>
      </div>
    </div>
  )
}

// export default function Header({ currentUser }) {
//   const links = [
//     !currentUser && { label: 'Sign Up', href: '/auth/signup' },
//     !currentUser && { label: 'Log in', href: '/auth/signin' },
//     currentUser && { label: 'Sell Ticket', href: '/tickets/new' },
//     currentUser && { label: 'My Orders', href: '/orders' },
//     currentUser && { label: 'Sign Out', href: '/auth/signout' },
//   ]
//     .filter((linkConfig) => linkConfig)
//     .map(({ label, href }) => {
//       return (
//         <li className="nav-item" key={href}>
//           <Link href={href}>
//             <a className="nav-link">
//               {label}
//             </a>
//           </Link>
//         </li>
//       );
//     });

//   return (
//     <nav className={styles.navbar}>
//       <Link href="/">
//         <a className={styles.navbar__brand}>T-Swapping</a>
//       </Link>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#nav-toggler"
//         aria-controls="nav-toggler"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//         onClick={(e) => {
//           const element = document.getElementById('nav-toggler');
//           element.classList.toggle('show');
//         }}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="nav-toggler">
//         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">{links}</ul>
//       </div>
//     </nav>
//   );
// };
