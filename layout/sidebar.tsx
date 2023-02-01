import React from "react";
import Link from "next/link";
import Dashboard from "@/icons/Dashboard";
import styles from "@/styles/header.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.vtssidebar}>
      <div className={styles.vertical_sidemenu}>
        <ul className={styles.vertical_nav}>
          <li>
            <Link href="#">
              <div className={styles.icon}>
                <Dashboard height={22} width={22} />
              </div>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
