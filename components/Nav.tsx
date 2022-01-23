import ActiveLink from "./ActiveLink";

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: " (current page)";
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/xsvToSql">
          <a className="nav-link">xSV to SQL</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
