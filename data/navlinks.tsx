import { BlocksIcon, BriefcaseBusinessIcon, HomeIcon, MailIcon } from "lucide-react";


const navlinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="w-full h-full pointer-events-none"
    />
  },
  {
    title: "Services",
    path: "/services",
    icon: <BlocksIcon className="w-full h-full pointer-events-none"
    />
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <BriefcaseBusinessIcon className="w-full h-full pointer-events-none" />
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MailIcon className="w-full h-full pointer-events-none"
    />
  },
];

export { navlinks };
