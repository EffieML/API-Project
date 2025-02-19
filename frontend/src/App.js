import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import AllSpotsList from "./components/AllSpotsList";
import MainPageMapContainer from "./components/Maps/MainPageMap";
import OneSpotList from "./components/OneSpotList";
import SpotsBySearch from "./components/Search/SpotsBySearch";
import UserListingPage from "./components/UserListingPage";
import UserBookingsPage from "./components/Booking/UserBookingsPage";
import UserReviewsPage from "./components/UserReviewsPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route exact path="/reviews/current">
            <UserReviewsPage />
          </Route>
          <Route exact path="/bookings/current">
            <UserBookingsPage />
          </Route>
          <Route exact path="/spots/current">
            <UserListingPage />
          </Route>
          <Route exact path="/spots/search/:keyword">
            <SpotsBySearch />
          </Route>
          <Route path="/spots/:spotId">
            <OneSpotList />
          </Route>
          <Route exact path="/spotsmap">
            <MainPageMapContainer />
          </Route>
          <Route exact path="/spots">
            <AllSpotsList />
          </Route>
          <Route exact path="/">
            <AllSpotsList />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>

        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
