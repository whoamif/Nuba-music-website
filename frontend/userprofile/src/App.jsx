import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import Albums from './Albums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [name, setName] = useState('user name');
  const [newName, setNewName] = useState('');
  const [profilePicture, setProfilePicture] = useState('./elements/default.svg');
  const [newProfilePicture, setNewProfilePicture] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  const toggleSettings = () => {
    setNewName(name);
    setNewProfilePicture(profilePicture);
    setNewPassword(password);
    setIsSettingsVisible(!isSettingsVisible);
  };

  const closeSettings = () => {
    setIsSettingsVisible(false);
  };

  const saveSettings = () => {
    console.log('Name:', newName);
    console.log('Profile Picture:', newProfilePicture);
    console.log('Password:', newPassword);

    setName(newName);
    setProfilePicture(newProfilePicture);
    setPassword(newPassword);

    closeSettings();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={`flex flex-col w-screen gap-12 min-h-screen bg-custom-bg-color overflow-x-hidden${isSearchVisible ? ' blur-background' : ''}`}>
        <Navbar isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} closeSearch={closeSearch} />
        <div className='flex flex-col w-screen ml-24 mt-2 p-4'>
          <div className='w-10/12 h-96 shadow-2xl items-start flex mt-24 hover:shadow-lg p-12 bg-gray-700 rounded-lg'>
            <img className='w-1/5' src={profilePicture} alt='' />
            <div className='flex flex-col text-white text-left gap-12 ml-12 mt-16'>
              <div className='font-bold text-2xl'>
                <p>{name}</p>
              </div>
              <div className='font-thin text-lg'>
                <span>0</span> Albums
              </div>
              <div className='font-thin text-lg'>
                <span>0</span> Songs
              </div>
            </div>
            <FontAwesomeIcon
              className='text-white text-2xl mt-12 ml-96 cursor-pointer'
              icon={faGear}
              onClick={toggleSettings}
            />
          </div>
        </div>
        {isSettingsVisible && (
          <div className='fixed   w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-12 '>
            <div className='settings-modal'>
              <div className='flex flex-col w-96 h-96 place-items-center p-12 gap-8 bg-gray-700 rounded-lg '>
                <input
                  type='text'
                  placeholder='New Name'
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className='input-field w-44 rounded-sm p-2'
                />
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  className='input-field ml-40 '
                />
                <input
                  type='password'
                  placeholder='New Password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className='input-field w-44 rounded-sm p-2 '
                />
                <div className='flex justify-between w-full'>
                  <button onClick={saveSettings} className='hover:bg-red-500 hover:text-white hover:border-0 '>
                    Save Changes
                  </button>
                  <button onClick={closeSettings} className='hover:bg-red-500 hover:text-white hover:border-0 '>
                    Exit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
         
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
