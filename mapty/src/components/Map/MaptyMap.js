import React, { useState } from "react";
import classes from './MaptyMap.module.css';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import { render } from "leaflet";

const MaptyMap = function (props) {
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={ position }>
                <Popup>You are here</Popup>
            </Marker>
        )
    };
    // return (
    //     <MapContainer
    //         center={ { lat: 51.505, lng: -0.09 } }
    //         zoom={ 13 }
    //         scrollWheelZoom={ false }>
    //         <TileLayer
    //             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         <LocationMarker />
    //     </MapContainer>
    // )

    return (
        <div className={ classes.Map }>
            <MapContainer
                center={ { lat: 0, lng: 0 } }
                zoom={ 13 }
                scrollWheelZoom={ true }>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    );
};
export default MaptyMap;