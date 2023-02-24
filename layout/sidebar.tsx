import React from "react";
import Link from "next/link";
import styles from "@/styles/header.module.scss";
import sidebarArray from "@/constant/sidebar-data";

const Sidebar = () => {
  return (
    <div className={styles.vtssidebar}>
      <div className={styles.vertical_sidemenu}>
        <ul className={styles.vertical_nav}>
          {sidebarArray.map((data, index) => {
            return (
              <li key={index}>
                <Link href={data.href}>
                  <div className={styles.icon}>
                    <data.icon height={22} width={22} />
                  </div>
                  <span>{data.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

// Alt + Shift + ↓ ( Copy line bottom )

const SideBar = [
  {
    name: "User Management",
    href: "/users",
    menu: [
      {
        name: "Management",
        href: "/",
      },
      {
        name: "Communication",
        href: "/",
      },
    ],
  },
  {
    name: "Content Management: ",
    href: "/",
    menu: [],
  },
  {
    name: "Reporting and Analytics: ",
    href: "/",
    menu: [
      {
        name: "User Activity ",
        href: "/",
      },
      {
        name: "Study material Utilization",
        href: "/",
      },
      {
        name: "Revenue Report",
        href: "/",
      },
      {
        name: "User Feedback",
        href: "/",
      },
      {
        name: " User Retention",
        href: "/",
      },
      {
        name: "conversion rate",
        href: "/",
      },
      {
        name: "Billing and payment management",
        href: "/",
      },
      {
        name: "customer and support management",
        href: "/",
      },
    ],
  },
  {
    name: "marketing management",
    href: "/",
    menu: [
      {
        name: "sms",
        href: "/",
      },
      {
        name: "referals",
        href: "/",
      },
      {
        name: "coupons and promotions",
        href: "/",
      },
      {
        name: "customer segmentation",
        href: "/",
      },
    ],
  },
];
