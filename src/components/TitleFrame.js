import "./TitleFrame.css";
//import axios from 'axios';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';

const TitleFrame = () => {


  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
 // const [stops, setStops] = useState([]);
  const handleOriginChange = (event) => {
    const value = event.target.value;
    setOrigin(value);
  };




   const mapOptions = {
    zoom: 8,
    center: { lat: 37.7749, lng: -122.4194 } // San Francisco by default
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to fetch route and directions from Google Maps API
  };

  const handleStopChange = (event, index) => {
    const value = event.target.value;
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  const addStop = () => {
    setStops([...stops, '']);
  };

  const removeStop = (index) => {
    const newStops = [...stops];
    newStops.splice(index, 1);
    setStops(newStops);
  };

  return (
    <form onSubmit={handleSubmit}>
    <section className="title-frame">
      <div className="sub-frames">
        <div className="sub-frames1">
          <div className="sub-frames2">
            <div className="sub-frames3">
              <div className="origin-wrapper">
                <div className="origin">Origin</div>
              </div>
              <form className="frame-parent">
                <div className="city-labels-parent">
                  <div className="city-labels">
                    <div className="city-labels-child" />
                    <div className="ellipse-parent">
                      <div className="frame-child" />
                      <div className="ellipse-shapes" />
                    </div>
                    <input type="text" placeholder="Origin" value={origin} onChange={handleOriginChange} />

                  </div>
                  <div className="city-labels-frame">
                    <div className="add-another-button">
                      <div className="stop">Stop</div>
                    </div>
                    <div className="titlecontainer">
                      <div className="titlecontainer-child" />
                      <div className="titlecontainer-item" />
                      {stops.map((stop, index) => (
        <div key={index}>
          <input type="text" placeholder={`Stop ${index + 1}`} value={stop} onChange={(event) => handleStopChange(event, index)} />
          <button type="button" onClick={() => removeStop(index)}>Remove Stop</button>
        </div>
      ))}
                    </div>
                  </div>
                </div>
                <div className="subtitleframe">
                  <button className="cta">
                    <div className="button-lg-neutral-white">Calculate</div>
                  </button>
                </div>
              </form>
              <button className="addanotherstopframe">
                <button className="container-c">
                  <img
                    className="add-alt-icon"
                    loading="eager"
                    alt=""
                    src="/addalt.svg"
                  />
                  <div className="add-another-stop">Add another stop</div>
                </button>
              </button>
            </div>
            <div className="monthlyamountinfoframe">
              <div className="detailcontainer">
                <div className="destinationtitleframe">
                  <div className="destination">Destination</div>
                </div>
                <div className="origintext">
                  <div className="origintext-child" />
                  <div className="destination-icon">
                    <img
                      className="room-icon"
                      loading="eager"
                      alt=""
                      src="/room.svg"
                    />
                    <b className="d">D</b>
                  </div>
                  <input type="text" placeholder="Destination" value={destination} onChange={handleDestinationChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="monthlyamount-info">
            <img className="white-bg-icon" alt="" src="/whitebg.svg" />
            <div className="monthly-amount-info-frame">
              <div className="container-frame">
                <div className="monthly-amount-frame">
                  <div className="monthly-amount">
                    <h3 className="typography-subtitle-lg-high">Distance</h3>
                  </div>
                </div>
                <div className="amount">
                  <b className="typography-headingmedium-lg-">{distance}</b>
                </div>
              </div>
            </div>
            <div className="detail">
              <img className="gray-bg-icon" alt="" src="/graybg.svg" />
              <div className="breakdown">
                <div className="typography-caption-highemph-container">
                  <span>{`The distance between `}</span>
                  <b>Mumbai</b>
                  <span>{` and `}</span>
                  <b>{`Delhi `}</b>
                  <span>{`via the seleted route is `}</span>
                  <b>1,427 kms</b>
                  <span>.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="container" />
          <img className="capture-1-icon" alt="" src="/capture-1@2x.png" />
          <div className="destination-frame">
            <div className="destination-icon-instance">
              <div className="stop-icon-instance">
                <div className="destination-icon1">
                     {/* Marker for origin */}
        <Marker lat={origin.lat} lng={origin.lng} text="Origin" />
        {/* Marker for destination */}
        <Marker lat={destination.lat} lng={destination.lng} text="Destination" />
        {/* Markers for stops */}
        {stops.map((stop, index) => (
          <Marker key={index} lat={stop.lat} lng={stop.lng} text={`Stop ${index + 1}`} />
        ))}
                  <img
                    className="room-icon1"
                    loading="eager"
                    alt=""
                    src="/room-1.svg"
                  />
                   <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
                  <b className="d1">D</b>
                </div>
              </div>
              <img
                className="stop-icon"
                loading="eager"
                alt=""
                src="/stop-icon.svg"
              />
            </div>
          </div>
          <img
            className="origin-icon"
            loading="eager"
            alt=""
            src="/origin-icon.svg"
          />
        </div>
      </div>
    </section>
    </form>
  );
};
const Marker = ({ text }) => <div style={{ color: 'red' }}>{text}</div>;

export default TitleFrame;
