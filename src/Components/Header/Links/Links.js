import classNames from "classnames"
import {NavLink} from "react-router-dom"
import {KIDSLINKS, MANLINKS, WOMANLINKS} from "../../../helpers/constants"
import classes from "./Links.module.css"

const Links = () => {
  return (
    <div className={classes.allLinks}>
      <div className={classes.dropdown}>
        <button className={classes.dropbutton}>Man</button>
        <div className={classes.dropbuttonchild}>
          <ul className={classes.ul}>
            {MANLINKS.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    className={({isActive}) =>
                      classNames(classes.link, {
                        [classes.active]: isActive,
                      })
                    }
                    to={link.to}
                  >
                    {link.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className={classes.dropdown}>
        <button className={classes.dropbutton}>Woman</button>
        <div className={classes.dropbuttonchild}>
        <ul className={classes.ul}>
            {WOMANLINKS.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    className={({isActive}) =>
                      classNames(classes.link, {
                        [classes.active]: isActive,
                      })
                    }
                    to={link.to}
                  >
                    {link.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={classes.dropdown}>
        <button className={classes.dropbutton}>Kids</button>
        <div className={classes.dropbuttonchild}>
        <ul className={classes.ul}>
            {KIDSLINKS.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    className={({isActive}) =>
                      classNames(classes.link, {
                        [classes.active]: isActive,
                      })
                    }
                    to={link.to}
                  >
                    {link.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Links
