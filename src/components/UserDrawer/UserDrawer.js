import {
    Drawer,
    Button,
    Card,
    Alert,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure 
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/user.png'
import './drawer.css'

  function UserDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    async function handleLogout() {
      setError('');
  
      try {
        await logout();
        navigate.push('/login');
      } catch {
        setError('Failed to log out');
      }
    }
  
    return (
      <>
        <span ref={btnRef} colorScheme='teal' onClick={onOpen} className='userAvatar'>
          <img src={avatar} alt=''/>
        </span>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>User Profile</DrawerHeader>
  
            <DrawerBody>
              {/* profile card */}
     <div className='cardBox'>
     <Card className='profileCard'>
        <div>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update Profile
          </Link>
        </div>
      </Card>
     </div>    
            </DrawerBody>
  
            <DrawerFooter>
             <Button onClick={handleLogout}>
               Log Out
             </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UserDrawer;