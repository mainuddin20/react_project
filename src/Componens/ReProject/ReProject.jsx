import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon1 from '../../asset/images/icon1.jpeg';
import icon2 from '../../asset/images/icon2.jpeg';
import icon3 from '../../asset/images/icon3.jpeg';

class ReProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='service'>
                    <h2 className='text-center mt-5 text-primary text-uppercase'>RECENT PROJECTS</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card className='card mt-5'>
                               <img src={icon1} alt="" className='img mt-3'/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>

                        </Col> 




                        <Col lg={4} md={6} sm={12}>
                            <Card className=' card mt-5'>
                                    <img src={icon3} alt="" className='img mt-3 '/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>


                        </Col>





                        <Col lg={4} md={6} sm={12}>

                            <Card className='card mt-5'>
                            <img src={icon2} alt=""  className='img mt-3 '/> 
                                <Card.Body className='text-center'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>

                        </Col>



                    </Row>




                </Container>



            </Fragment>
        );
    }
}

export default ReProject;