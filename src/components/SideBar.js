import React from 'react'

const SideBar = ()  =>{
  return (
    <div>
      <button type="button" className={classes.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <nav className={`${classes.sidenav} ${classes.toggle}`}>
        <NavLink exact to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>
        {currentUser
            && (
              <NavLink to="/profile" className={classes.navlink} activeClassName={classes.active}>
                {currentUser.user.name}
              </NavLink>
            )}
        {currentUser ? (
          <ul>
            <li>
              <NavLink to="/doctors" className={classes.navlink} activeClassName={classes.active}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/appointments" className={classes.navlink} activeClassName={classes.active}>
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointments/new" className={classes.navlink} activeClassName={classes.active}>
                Add Appointment
              </NavLink>
            </li>
            <li>
              <a href="/login" onClick={logOut} className={classes.navlink}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={classes.navlink} activeClassName={classes.active}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
        <footer className={classes.social}>
          <SocialIcons />
          <p>&copy;2020, ABC Hospital</p>
        </footer>
      </nav>
    </div>
  )
}

export default SideBar
