import React, { Component } from 'react';
import NavBar from '../Componens/NavBar/NavBar';
import TopHeader from '../Componens/TopHeader/TopHeader';
import OurSeervice from '../Componens/OurService/OurService';
import Techno from '../Componens/Techno/Techno';
import ReProject from '../Componens/ReProject/ReProject';
import TotalClient from '../Componens/TotalClient/TotalClient';
import OurCourse from '../Componens/OurCourses/OurCourse';
import HowDo from '../Componens/HowDo/HowDo';
import ClientSays from '../Componens/ClientSays/ClientSays';
import Footer from '../Componens/Footer/Footer';
import FooterEnd from '../Componens/FooterEnd/FooterEnd';

class Hompages extends Component {
      render() {
            return (
                  <div>

                        <NavBar />
                        <TopHeader />
                        <OurSeervice />
                        <Techno />
                        <ReProject />
                        <TotalClient />
                        <OurCourse />
                        <HowDo />
                        <ClientSays />
                        <Footer />
                        <FooterEnd />
                        
                  </div>
            );
      }
}

export default Hompages;