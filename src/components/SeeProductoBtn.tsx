
type SeeProductoBtnProps = {
  color?: string;
}
export default function SeeProductoBtn({ color = 'default' }: SeeProductoBtnProps) {
  const className : { [key: string]: string } = {
    default: "bg-custom-orange text-white",
    white: "bg-transparent border border-zinc-950 text-zinc-950 ",
    black: "bg-zinc-950 text-white"
  };

  return (
    <button className={`${className[color]} font-semibold w-fit px-6 py-3`}>
      SEE PRODUCT
    </button>
  )
}
