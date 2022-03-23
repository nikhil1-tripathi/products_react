import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products",
  },

];
export const Navbar = () => {

  return (
    <>
      {links.map(({ title, link }, index) => {
        return (
          <Link key={index} to={link}> {title}</Link>
        )
      })}
    </>
  )


};
