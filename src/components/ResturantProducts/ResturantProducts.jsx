import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function ResturantProducts(props) {
    const type = props.type;
    const [resProducts, setResProducts] = useState([]);
    const getResProducts = async () => {
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`);
        let data = await response.json();
        setResProducts(data.recipes);
    }

    useEffect(() => {
        getResProducts();
    }, [])
    return (
        <Row md={3} sm={1}>
            {
                resProducts.map(product => {
                    return (
                        <Col key={product.recipe_id}>
                            <div className="item border rounded-3 p-3 mt-4">
                                <h2 className="fs-5">{ product.title }</h2>
                                <img src={ product.image_url } alt="" className="w-100" />
                                <p className="fs-5">Rank: <span className="text-danger">{ product.social_rank }</span></p>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ResturantProducts;