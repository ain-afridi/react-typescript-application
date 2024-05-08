/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../store';
import PrivateOutlet from './PrivateRoutes';
import SignIn from '../pages/SignIn/SignIn';

interface RoutesProps {
  path: string;
  components: any;
  private: boolean;
}

const AppRoutes = () => {
  const dispatch = useDispatch<Dispatch>();
  const loader = useSelector((state: RootState) => state.auth.loading);
  const AllRoutes = [
    {
      path: '/',
      components: <SignIn />,
      private: false
    },
  ]
  // let status = window.location.pathname !== "/";


  // useEffect(() => {
  //   if (status && !users.length && localStorage.getItem('rank-token')) dispatch.auth.handleGetAllUsers()
  // }, [users])
  
  useEffect(() => {
    
    if (loader) {
      dispatch.auth.setLoading(false);
    }
  }, [loader])
  
  

  return (
    <>
      {
        loader && <div
          key={'global-loader'}
          style={{
            width: "100%",
            height: "100%",
            background: "rgb(255 255 255 / 80%)",
            zIndex: "9999999",
            inset: "0px",
            position: "absolute",
          }}
        >
          {/* <Lottie
            options={{ loop: true, autoplay: true, animationData: Loader }}
            height={300}
            width={300}
            isStopped={false}
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            isPaused={false}
          /> */}
        </div>
      }
      
      <Routes>
        {
          AllRoutes.map((route: RoutesProps, index: number) => (
            <>
              {
                route.private ? <Route
                  // key={index}
                  path={"/"}
                  element={<PrivateOutlet />}
                >
                  <Route
                    key={index}
                    path={route.path}
                    element={route.components}
                  />
                </Route>
                  :
                  <Route
                    // key={index}
                    path={route.path}
                    element={route.components}
                  />
              }
            </>


          ))
        }
      </Routes>
    </>
  )
}

export default AppRoutes