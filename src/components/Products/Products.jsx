import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";

function Products() {

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <section className="products">
            <Container className="mt-5 ">
                <h1 className="pt-5 pb-2 border-bottom">Products</h1>
                <Row md={3} sm={1}>
                    {
                        products.map( product => {
                            return (
                                <Col key={ product.id }>
                                    <div className="item border rounded-3 p-3 mt-4">
                                        <h2 className="fs-5">{ product.title }</h2>
                                        <img src={ product.image } alt="" className="w-100"/>
                                        <p className="fs-5">Price: <span className="text-danger">{ product.price }</span></p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Products