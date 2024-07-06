// src/pages/index.tsx
import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Map from '../components/Map';
import NewEntryModal from '../components/NewEntryModal';

const Home: React.FC = () => {
  return (
    <>
      <div id="not_logged_in">
        <Jumbotron />
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <SignInForm />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div id="logged_in" style={{ display: 'none' }}>
        <Map />
        <button className="btn btn-success" style={{ borderRadius: '50%', position: 'absolute', right: '10px', bottom: '10vh' }} data-toggle="modal" data-target="#newentry">
          <i className="fas fa-camera-retro fa-2x"></i>
        </button>
      </div>
      <NewEntryModal />
    </>
  );
};

export default Home;
