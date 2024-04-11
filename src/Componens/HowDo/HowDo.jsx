import React, { Component, Fragment } from 'react';
import {Container, Row ,Col} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class HowDo extends Component {
      render() {
            return (
                  <Fragment>

                        <Container className='border mt-5'>

                              <Row>

                                    <Col>


                                          <h1 className='text-center mt-5 '>How I Do</h1>
                                          <p className='ptag mt-5 '> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste iure quas aperiam nemo ab, consectetur molestiae facilis sed dolores praesentium rerum odio id quis officiis ex pariatur nihil sequi vitae? Saepe cum facilis nulla eos architecto ex odit nisi possimus quidem, sapiente natus ipsa placeat deserunt perferendis a, sunt officia deleniti nam similique. Maiores qui nostrum quos vitae dolores cupiditate accusantium nihil aliquam reiciendis numquam eius quidem reprehenderit perferendis cum voluptatem exercitationem quo tempore, quae at sed odio nisi quod? Accusantium et, laborum cupiditate eaque dolor soluta facere cum, architecto possimus, sed quam dicta qui? Vitae distinctio quibusdam quasi! Esse enim vero a, labore iste, tenetur nobis id soluta ab, consectetur laborum. Error sequi expedita reiciendis voluptatum. Minus blanditiis ut aliquam veritatis, cum autem ad accusantium omnis, et cupiditate sunt assumenda porro nam quos culpa pariatur enim. Sit provident quae, neque voluptas odit quisquam eius aliquid. Aspernatur, exercitationem nesciunt voluptate nisi, neque nihil id quas blanditiis et, explicabo expedita iusto. Laboriosam, quidem consectetur eius quod veniam recusandae tenetur hic nostrum tempore natus nulla ipsum distinctio excepturi aperiam neque vero assumenda? Non perferendis, nihil reiciendis adipisci illum et? Quaerat hic cupiditate, accusamus quisquam praesentium cumque modi excepturi voluptas dolorum eaque eligendi!

                                          </p>



                                                <div className='mar mt-5 p-0'>
 
                                                      <ReactPlayer autoPlay={true}
                                                            className='react-player '
                                                           
                                                            
                                                            url='https://youtu.be/MICuu5Q1LOI'
                                                                  
                                                                  muted
                                                                 
                                                                  loop 
                                                            
                                                            width='50%'
                                                            height='60%'
                                                            
                                                                  
                                                                  
                                                      />
      
                                                </div>






                                    </Col>

                              </Row>

                        </Container>
                        
                  </Fragment>
            );
      }
}

export default HowDo;