import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { searchSpotsThunk } from '../../../store/spots';
import { getKey } from '../../../store/maps';
import SearchPageMap from '../../Maps/SearchPageMap/SearchPageMap';
import '../../AllSpotsList/AllSpotsList.css';
import './SpotsBySearch.css'


function SpotsBySearch() {
    const key = useSelector((state) => state.maps.key);
    const dispatch = useDispatch();
    const { keyword } = useParams();
    let markers = [];
    const spots = useSelector(state => Object.values(state.spots?.searchSpots));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!key) {
            dispatch(getKey());
        }
    }, [dispatch, key]);

    useEffect(() => {
        dispatch(searchSpotsThunk(keyword))
            .then(() => setIsLoaded(true));
    }, [dispatch, keyword]);

    if (!key) {
        return null;
    }

    // if no spots, checkout other places
    if (spots.length == 0) return null;
    spots.forEach(spot => markers.push({ id: spot.id, price: ('$ ' + spot.price).toString(), position: { lat: parseFloat(spot.lat), lng: parseFloat(spot.lng) } }))
    // console.log('SearchPageMap container markers-------------', markers)


    return (
        <div className='search-spots-container'>
            <div className='search-spots-container-left'>
                <div className='search-spots-list'>
                    {/* {isLoaded ? (<> */}
                    {spots.length > 0 ? (
                        spots.map(spot => (
                            <div className='search-spot-card'>
                                <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                                    {/* <div className='search-spot-card'> */}
                                    <div className='spot-image'>
                                        <img className='search-spot-image-size' src={spot.previewImage} alt='Spot preview image' />
                                    </div>
                                    <div className='spot-info'>
                                        <div className='spot-info-1'>
                                            <div className='spot-info-city'>
                                                {`${spot.city}, ${spot.state}`}
                                            </div>
                                            <div className='spot-title-info'>
                                                <span id='fafastar'>
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span>{spot.avgRating ? spot.avgRating.toFixed(2) : 'New'}</span>
                                            </div>
                                        </div>

                                        <div className='spot-info-2'>
                                            <span>${spot.price} </span>night
                                        </div>

                                    </div>
                                    {/* </div> */}
                                </NavLink>
                            </div>
                        ))
                    ) : <>no spots</>}
                    {/* </>
            ) : <LoadingPage />
            } */}
                </div>
            </div>
            <div className='search-spots-container-right'>
                <SearchPageMap apiKey={key} markers={markers} spots={spots} />
            </div>
        </div>

    )
}

export default SpotsBySearch;
