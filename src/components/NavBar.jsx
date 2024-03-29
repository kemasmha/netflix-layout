import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <header className="topheader flex">
      <nav className="topnav flex">
        <button className="mainlogo">
          <img src="/netflix-logo.png" alt="netflix" width="95px" />
        </button>
        <NavLink href="/browse">Beranda</NavLink>
        <NavLink href="/browse">Acara TV</NavLink>
        <NavLink href="/browse">Film</NavLink>
        <NavLink href="/browse">Baru & Populer</NavLink>
        <NavLink href="/browse">Daftar Saya</NavLink>
        <NavLink href="/browse">Telusuri menurut Bahasa</NavLink>
      </nav>
      <div className="flex"></div>
    </header>
  );
};

export default NavBar;
