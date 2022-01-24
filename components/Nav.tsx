import ActiveLink from "./ActiveLink";

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }

      .active {
        position: relative;
        display: inline-block;
        padding-bottom: 4px;
      }

      .active:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 25px; /*線の上下位置*/
        display: inline-block;
        width: 100%; /*線の長さ*/
        height: 4px; /*線の太さ*/
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%); /*位置調整*/
        background-color: #ccc; /*線の色*/
        border-radius: 2px; /*線の丸み*/
      }
    `}</style>
    <ul className="nav flex">
      <li className="mx-4">
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li className="mx-4">
        <ActiveLink activeClassName="active" href="/tsvToSql">
          <a className="nav-link">TSV to SQL</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
