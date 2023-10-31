import { Container } from "react-bootstrap";
import ResturantProducts from "../ResturantProducts/ResturantProducts";

function Resturant() {
    return (
        <Container className="my-5 pt-5">
            <h2 className="text-center border-bottom pb-2">Pizza</h2>
            <ResturantProducts type="pizza" />
            <h2 className="text-center border-bottom pb-2">Onion</h2>
            <ResturantProducts type="onion" />
            <h2 className="text-center border-bottom pb-2">Salad</h2>
            <ResturantProducts type="salad" />
        </Container>
    )
}

export default Resturant;