const items = [
  {
    name: "Dashboard",
    to: "/",
    icon: "dashboard",
  },
  {
    name: "Team",
    to: "/",
    icon: "people",
  },
];


interface ItemsNavbarProps {
    mobile?: boolean;
}
export const ItemsNavbar = (props: ItemsNavbarProps) => {
const { mobile } = props;
    
  return (
    <>
      {items.map((item, index) => {
        return (
          <a
            key={index}
            href={item.to}
            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 py-2 border-b-2 text-sm font-medium"
          >
            {item.name}
          </a>
        );
      })}
    </>
  );
};
