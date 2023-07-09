import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import BottomNavBar from './components/BottomNavBar';

export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Map
        center={{ lat: 33.55635, lng: 126.7958141 }}
        className='grow w-full'
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <BottomNavBar />
    </div>
  )
}
