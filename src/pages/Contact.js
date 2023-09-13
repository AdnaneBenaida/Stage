import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Map from '../components/map/Map';
   
function Contact() {
    
const location = {
    address: 'Technopark,Bd Dammam, Casablanca',
    lat: 33.543707720810026, 
    lng: -7.6403547156776686
  }

  
    return (
        <Layout>
            <Header/>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Contact us</h2>
            </div>
            <Map location={location} zoomLevel={17}/>
        </Layout>
    );
}
   
export default Contact;