import { UserGroupIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const SideRouteList = [
  {
    id: "user-list",
    Icon: ({ className }) => <UserGroupIcon className={className} />,
    title: "사용자 목록",
    link: "/user-list",
  },
  {
    id: "add-user",
    Icon: ({ className }) => <UserPlusIcon className={className} />,
    title: "사용자 추가",
    link: "/add-user",
  },
];

export default SideRouteList;
