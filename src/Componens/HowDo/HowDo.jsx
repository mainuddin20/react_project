import React, { Component, Fragment } from 'react';
import {Container, Row ,Col,} from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";
// import ReactPlayer from 'react-player/youtube';
// import Modal from 'react-bootstrap/Modal';


class HowDo extends Component {
      render() {
            return (
                  <Fragment>

                        <Container className='border mt-5'>

                              <Row>

                                    <Col>


                                          <div className='howdo'>
                                          <h1 className='text-center text-primary text-uppercase'>How I Do</h1>
                                          <p className=' mt-5 '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste iure quas aperiam nemo ab, consectetur molestiae facilis sed dolores praesentium rerum odio id quis officiis ex pariatur nihil sequi vitae? Saepe cum facilis nulla eos architecto ex odit nisi possimus quidem, sapiente  uas aperiam nemo

                                          </p>


  

                                            
                                       
                                         {/* <p> <FaCirclePlay className=' playbutton text-center mt-5'  /> </p> */}

                                         <p > <a href="https://www.youtube.com/watch?v=nGjry7dq6EI"> <FaCirclePlay className=' playbutton text-center mt-5'  /> </a></p>
                                          
                                         
                                         




                                          </div>






                                    </Col>

                              </Row>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default HowDo;