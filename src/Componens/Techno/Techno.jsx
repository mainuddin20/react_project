
import React, { Component, Fragment,  } from 'react';
import { Container,Row,Col,  } from 'react-bootstrap';
//import {BarChart, XAxis, Bar, Tooltip, TriangleBar, YAxis,} from 'recharts';
import {BarChart, XAxis, Bar, Tooltip, ResponsiveContainer, } from 'recharts';

class Techno extends Component {

constructor(){
  super();
  this.state={
    data:[
      {Technology: 'java', 'project':100},
      {Technology: 'kotlin', 'project':50},
      {Technology: 'Sql', 'project':40},
      {Technology: 'Jquery', 'project':60},
      {Technology: 'React', 'project':20},
      {Technology: 'Php', 'project':80},
      {Technology: 'Angular', 'project':30},
    ]
  }
}

  render() {
   
    return (
      <Fragment>

        <Container>

          <h1 className='text-center mt-5 '>Technology Used</h1>

          <Row>
            {/* <Col lg={6} md={6} sm={12}>

              <BarChart width={800} height={300} data={this.state.date}>
                <XAxis datakey="Technology" />
                <Tooltip />
                <Bar datakey="project" fill={blue} />
              </BarChart>

            </Col> */}

             <Col lg={6} md={6} sm={12}>
              <ResponsiveContainer width="100%" height={400} className='mt-3'>
                <BarChart data={this.state.data}>
                  <XAxis dataKey="Technology"/>
                  <Tooltip/>
                  <Bar dataKey="project" fill="blue"/>
                </BarChart>
              </ResponsiveContainer>
            </Col> 

            {/* <Col>

            <BarChart width={600} height={300} data={this.state.data}>
              <XAxis dataKey="Technology" />
              <YAxis />
              <Tooltip  />
              <Bar dataKey="project" fill="#8884d8"
                shape={<TriangleBar />} />
            </BarChart>

            </Col> */}



            <Col lg={6} md={6} sm={12}>
                <p className='pare'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus veritatis iusto voluptas vero quis minima pariatur est doloribus aspernatur, assumenda, necessitatibus id! Sunt, ab sit expedita accusantium aperiam quis, debitis illum aliquam porro adipisci aliquid, non officiis praesentium hic! Qui sit vitae fugiat doloribus inventore minima iusto. Veritatis explicabo officia, aliquid sapiente vel natus quis distinctio ea! Blanditiis molestiae dolore mollitia hic culpa sit repellendus sint, magnam nihil enim cumque et provident facere, cupiditate vel pariatur. Error accusantium laudantium nemo iste ducimus excepturi quo officiis id veniam cumque, voluptatum sit eos temporibus iure explicabo beatae debitis nostrum blanditiis nihil. Quo!
                </p>
            </Col>

            
          </Row>

        </Container>
        
      </Fragment>
    );
  }
}

export default Techno;