
import { useNavigate } from "react-router-dom";
export default function GoBack() {
    const navigate = useNavigate();
  return (
    <button
    onClick={() => navigate(-1)}
    className="self-start text-zinc-500 hover:bg-zinc-100 p-1"
  >
    Go Back
  </button>
  )
}
