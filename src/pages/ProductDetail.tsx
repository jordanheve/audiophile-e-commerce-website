
import { useParams } from "react-router-dom"
export default function ProductDetail() {

    const params = useParams();
  return (
    <div>ProductDetail - {params.id}</div>
  )
}
