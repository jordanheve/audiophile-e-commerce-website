import { Link } from "react-router-dom";

export default function CategoryLinks() {
    const styles = "uppercase text-zinc-50 cursor-pointer hover:text-custom-orange no-select"
    return (
        
        <div className="flex max-md:flex-col gap-8 text-sm font-semibold tracking-wider">
        <Link to='/'className={styles}>Home</Link>
        <Link to="/category/headphones" className={styles}>Headphones</Link>
        <Link to="/category/speakers" className={styles}>speakers</Link>
        <Link to="/category/earphones" className={styles}>earphones</Link>
        </div>
    );
}
