import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="pb-24">
        404 Not Found
        <Link to="/">Go to Homepage</Link>

    </div>
  )
}
