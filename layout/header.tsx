import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/icons/MenuIcon";
import ChatIcon from "@/icons/ChatIcon";
import SearchIcon from "@/icons/SearchIcon";
import Notification from "@/icons/Notification";
import styles from "@/styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainheader}>
      <div className={styles.innerheader}>
        <div className={styles.leftcolm}>
          <div className={styles.menuvbar}>
            <Link href="#">
              <MenuIcon height={20} width={20} />
            </Link>
          </div>
          <div className={styles.logo}>
            <Image src="/svg/1_Logo-4.svg" height={51} width={300} alt="logo" />
          </div>
          <div className={styles.searchbar}>
            <input type="text" name="searchbar" placeholder="Search anything" />
            <button>
              <SearchIcon width={20} height={20} />
            </button>
          </div>
        </div>
        <div className={styles.rightcolm}>
          <div className={styles.actionbtn}>
            <Link href="#">
              <ChatIcon height={20} width={20} />
            </Link>
            <Link href="#">
              <Notification height={20} width={20} />
            </Link>
            <Link href="#" className={styles.userimage}>
              <span>
                <Image
                  alt="user"
                  width={50}
                  height={50}
                  src="/images/avatar3.jpg"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
