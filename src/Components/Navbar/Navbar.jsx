import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useReactPath } from "./path.hook";
import { LogoShortBlack } from "../../assets/svg.tsx";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navlogo, setnavlogo] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }

  const path = useReactPath();
  const navContent = [
    // t("about"),
    "HOME",
    "ABOUT",
    "GALLERY",
    "ARTISTS",
    "EVENTS",
  ];

  useEffect(() => {}, [path]);
  const changenavlogo = () => {
    window.scrollY >= 250 ? setnavlogo(true) : setnavlogo(false);
    return navlogo;
  };

  useEffect(() => {
    window.addEventListener("scroll", changenavlogo);

    return () => {
      window.removeEventListener("scroll", changenavlogo);
    };
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <a href="#HOME">
          <LogoShortBlack />
        </a>
        <div className={styles.navbarDesk}>
          {" "}
          {navContent.map((content, i) => (
            <a href={`#${content}`} key={i.toString() + content}>
              <p
                style={{
                  color: window.location.href.includes(`#${content}`)
                    ? "rgba(229, 149, 76, 1)"
                    : "",
                  fontWeight: window.location.href.includes(`#${content}`)
                    ? 600
                    : 400,
                  textTransform: "capitalize",
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
        <a href="#contact" className={styles.buttonContent}>
          CONTACT
        </a>
        <div className={styles.navbarMob}>
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={openMenu}
          >
            {openmenu ? (
              <RxCross1 style={{ color: "black", fontSize: "40px" }} />
            ) : (
              <BiMenu style={{ color: "black", fontSize: "40px" }} />
            )}
          </button>

          {openmenu && (
            <div className={styles.menuDiv}>
              <div className={styles.innerSetMenuDiv}>
                {navContent.map((content, i) => (
                  <a href={`#${content}`} key={i.toString() + content}>
                    <p
                      style={{
                        color: window.location.href.includes(`#${content}`)
                          ? "rgba(229, 149, 76, 1)"
                          : "",
                        fontWeight: window.location.href.includes(`#${content}`)
                          ? 600
                          : 400,
                        textTransform: "capitalize",
                      }}
                    >
                      {content}
                    </p>
                  </a>
                ))}
              </div>
              <a href="#contact" className={styles.buttonContents}>
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
