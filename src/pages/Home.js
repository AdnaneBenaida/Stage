import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Audio from "../components/Audio"
import ImageUpload from "../components/ImageUpload"
   
function Home() {
  
    return (
        <Layout>
            <Header/>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Home Page</h2>
                <Audio/>
                <ImageUpload/>

            </div>
        </Layout>
    );
}
   
export default Home;