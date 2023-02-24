import HomeIcon from "@/icons/HomeIcon";
import Dashboard from "@/icons/Dashboard";

type SVG = React.SVGProps<SVGSVGElement>;

const sidebarArray = [
  {
    name: "Home",
    icon: (props: SVG) => <HomeIcon height={22} width={22} {...props} />,
    href: "/",
    active: [""],
    menu: [],
  },
  {
    name: "Category",
    icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
    href: "/series/category",
    active: [""],
    menu: [],
  },
  // {
  //   name: "Series",
  //   icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
  //   href: "/series",
  //   active: [""],
  //   menu: [],
  // },
  {
    name: "Users",
    href: "/users",
    active: [""],
    icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
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
    name: "Content",
    href: "/",
    active: [""],
    icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
    menu: [],
  },
  {
    name: "Analytics",
    href: "/",
    active: [""],
    icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
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
    name: "Marketing",
    href: "/",
    active: [""],
    icon: (props: SVG) => <Dashboard height={22} width={22} {...props} />,
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

export default sidebarArray;
