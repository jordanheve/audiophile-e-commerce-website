import { Link } from "react-router-dom";

type SeeProductBtnProps = {
  color?: string;
  slug?: string;
}
export default function SeeProductBtn({ color = 'default', slug = "/" }: SeeProductBtnProps) {
  const className : { [key: string]: string } = {
    default: "bg-custom-orange text-white",
    white: "bg-transparent border border-zinc-950 text-zinc-950 ",
    black: "bg-zinc-950 text-white"
  };

  return (
    <Link to={slug}className={`${className[color]} font-semibold w-fit px-6 py-3`}>
      SEE PRODUCT
    </Link>
  )
}
