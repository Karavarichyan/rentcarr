import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({aboutClass}) => {
  return (
   <section className='about__section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} :{marginTop: '280px'}}>
    <Container>
      <Row>
        <Col lg='6' md='6'></Col>
              <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
               <h2 className="section__title">Welcome to car rent service</h2>
                <p className="section__description">
                Welcome to our car rental service! Our company offers a wide range of vehicles of various classes and brands to help you find the perfect transportation for your needs. Whether you are traveling for business or leisure, we are here to provide you with high-quality service and comfort during your journey.

                  Our fleet includes everything from small, economical cars for city driving to luxurious limousines and spacious SUVs for family trips.

                  We take pride in our professional team, always ready to assist you in selecting the right car and organizing your trip. We also offer flexible rental terms, competitive prices, and convenient payment options.

                  With us, your journey will be reliable and comfortable. We hope you choose our company for your next car rental adventure!
                </p>
                <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Welcome to our car rental service! We offer a wide range of vehicles, including various classes and brands. With affordable prices and flexible rental terms, we ensure both convenience and reliability during your journey. Our commitment to high-quality service makes us the ideal choice for your car rental needs.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Welcome to our car rental service! We offer a wide range of vehicles, including various classes and brands. With affordable prices and flexible rental terms, we ensure both convenience and reliability during your journey. Our commitment to high-quality service makes us the ideal choice for your car rental needs.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Welcome to our car rental service! We offer a wide range of vehicles, including various classes and brands. With affordable prices and flexible rental terms, we ensure both convenience and reliability during your journey. Our commitment to high-quality service makes us the ideal choice for your car rental needs.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Welcome to our car rental service! We offer a wide range of vehicles, including various classes and brands. With affordable prices and flexible rental terms, we ensure both convenience and reliability during your journey. Our commitment to high-quality service makes us the ideal choice for your car rental needs.
                </p>
              </div>
                
              </div>
        <Col lg='6' md='6'>
        <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default AboutSection
// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import "../../styles/about-section.css";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

// const AboutSection = ({ aboutClass }) => {
//   return (
//     <section
//       className="about__section"
//       style={
//         aboutClass === "aboutPage"
//           ? { marginTop: "0px" }
//           : { marginTop: "280px" }
//       }
//     >
//       <Container>
//         <Row>
//           <Col lg="6" md="6">
//             <div className="about__section-content">
//               <h4 className="section__subtitle">About Us</h4>
//               <h2 className="section__title">Welcome to car rent service</h2>
//               <p className="section__description">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Voluptatum blanditiis esse accusantium dignissimos labore
//                 laborum. Veniam, corporis mollitia temporibus, in quaerat vero
//                 deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
//                 neque sit ad temporibus quam similique dolor ipsam praesentium
//                 sunt.
//               </p>

//               <div className="about__section-item d-flex align-items-center">
//                 <p className="section__description d-flex align-items-center gap-2">
//                   <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
//                   amet.
//                 </p>

//                 <p className="section__description d-flex align-items-center gap-2">
//                   <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
//                   amet.
//                 </p>
//               </div>

//               <div className="about__section-item d-flex align-items-center">
//                 <p className="section__description d-flex align-items-center gap-2">
//                   <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
//                   amet.
//                 </p>

//                 <p className="section__description d-flex align-items-center gap-2">
//                   <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
//                   amet.
//                 </p>
//               </div>
//             </div>
//           </Col>

//           <Col lg="6" md="6">
//             <div className="about__img">
//               <img src={aboutImg} alt="" className="w-100" />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default AboutSection;