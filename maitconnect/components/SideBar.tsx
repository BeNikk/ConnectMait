import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const Sidebarprops = [
    {
      label: "Home",
      href: "/",
      src: "/home.svg",
      key: 1,
    },
    {
      label: "Search",
      href: "/search",
      src: "/search.svg",
      key: 2,
    },
    {
      label: "Notifications",
      href: "/notfications",
      src: "/community.svg",
      key: 3,
    },
    {
      label: "Profile",
      href: "/profile",
      src: "/user.svg",
      key: 4,
    },
  ];
  return (
    <div>
      {Sidebarprops.map((element) => {
        return (
          <div className="fixed bottom-0 left-0 w-full h-16">
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <Link href={element.href} key={element.key}>
                  <Image
                    src={element.src}
                    alt={"Home"}
                    width={24}
                    height={24}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
