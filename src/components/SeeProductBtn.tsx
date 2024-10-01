import { Link } from "react-router-dom";

type SeeProductBtnProps = {
  color?: string;
  slug?: string;
}
export default function SeeProductBtn({ color = 'default', slug = "/" }: SeeProductBtnProps) {
  const className : { [key: string]: string } = {
    default: "bg-custom-orange text-white hover:brightness-110",
    white: "bg-transparent border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white",
    black: "bg-zinc-950 text-white hover:bg-zinc-600",
  };

  return (
    <Link to={slug}className={`${className[color]} font-semibold w-fit px-6 py-3 text-sm`}>
      SEE PRODUCT
    </Link>
  )
}
