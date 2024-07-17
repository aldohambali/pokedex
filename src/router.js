import React, { Component,useEffect } from 'react'
import { Route, Routes} from "react-router-dom"

import FrontPage from "./pages/front-page";
import DetailPage from './pages/detail-page';
// import PostPage from "./pages/post-page";

import { useParams } from "react-router-dom";
import FilterPage from './pages/filter-page';

const UserPageWrapper = () => {
    const { id } = useParams();
    useEffect(() => {
      console.log('id router ',{ id }); 
    }, [id]);
    return <DetailPage id={id} />;
  };

const FilterPageWrapper = () => {
    const { id,text } = useParams();
    useEffect(() => {
      console.log('id filter router ',{ id,text }); 
    }, [id,text]);
    return <FilterPage id={id} text={text} />;
  };  

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      {/* <Route path="/:slug" element={<PostPage />} /> */}
      {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
      <Route path="/detail/:id" element={<UserPageWrapper />} />
      <Route path="/filter/:id/:text" element={<FilterPageWrapper />} />
    </Routes>
  );
};
export default Router;
