import React, { Component,useEffect } from 'react'
import { Route, Routes} from "react-router-dom"

import FrontPage from "./pages/front-page";
import DetailPage from './pages/detail-page';
// import PostPage from "./pages/post-page";

import { useParams } from "react-router-dom";

const UserPageWrapper = () => {
    const { id } = useParams();
    useEffect(() => {
      console.log('id router ',{ id }); 
    }, [id]);
    return <DetailPage id={id} />;
  };


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      {/* <Route path="/:slug" element={<PostPage />} /> */}
      {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
      <Route path="/detail/:id" element={<UserPageWrapper />} />
    </Routes>
  );
};
export default Router;
