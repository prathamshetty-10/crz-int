import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import dcpic from '../assets/dcpicture.jpg';

export default function Home() {
  return (
    <div className="home-page">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
      >
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784483.jpg" alt="Carousel Image 1" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784182.jpg" alt="Carousel Image 2" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638783245.jpg" alt="Carousel Image 3" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1638784672.jpg" alt="Carousel Image 4" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1630648890.png" alt="Carousel Image 5" />
        </div>
        <div>
          <img src="https://www.karnataka.gov.in/storage/slids/1656590446.jpg" alt="Carousel Image 6" />
        </div>
      </Carousel>

      <div className="content-section bg-gray-100 p-6">
        <div className="flex flex-wrap justify-between">
          <div className="bg-blue-500 text-white p-4 w-full lg:w-1/5 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold mb-2">Important Notice</h2>
            {/* Add your notice content here */}
          </div>
          <div className="bg-gray-300 p-4 w-full lg:w-3/5 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold mb-2">About CRZ</h2>
            <p>
              The Ministry of Environment and Forests issued the first Coastal Regulation Zone notification in February 1991, under section of India’s Environment Protection Act, 1986,to regulate activities in the coastal area. Coastal Regulation Zones Act (CRZ) include creeks, bays, oceans, rivers, and backwaters that are impacted by tidal waves and forces and are up to 500 metres from the High Tide Line, as well as the land between the Low Tide Line and the High Tide Line. Karnataka’s coastline extends over a length of 320 kilometers. It is one of the most indented shoreline with numerous river mouths, lagoons, bays, creeks, promontories, cliffs, spits, sand dunes and long beaches. Unlike the east coast of India the coastal stretch of Karnataka has no major delta formations. There are a few islands off the coast, the major group being St. Mary’s Island, 4 kilometers off the coast near Malpe. Fourteen rivers drain their waters into the shore waters of Karnataka. The important estuaries include the Netravati- Gurpur, Gangolli, Hangarkatta, Sharavthi, Aganashini, Gangavali and Kalinadi. Sand bars have developed in most of the estuaries. There are a number of barrier spits at Tannirbavi, Sasithitlu, Udyavara, Hoode, Hangarkatta and Kirimanjeswara formed due to migration of coastal rivers. There are also 90 beaches with varying aesthetic potential. Among these, the beaches at Someshwar-Ullal, Malpe, St. Mary’s Island, Belekeri and Karwar are excellent with a potential for international tourism. Twenty-two beaches are classified as unfit for use due to coastal erosion, human settlements and activities linked to ports/harbors, industries and fisherie.
            </p>
          </div>
          <div className="bg-blue-200 p-4 w-full lg:w-1/5">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <img src={dcpic} alt="dc" className="mb-2" />
            <p>Dr K VidyaKumari I.A.S</p>
            <p>Deputy Commissioner Udupi</p>
            <button className="bg-white text-black p-2 mt-2">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
