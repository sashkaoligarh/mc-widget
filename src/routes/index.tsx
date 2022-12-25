import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InfoPage, MatchesPage } from '../pages';



const RootNavigator:FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/matches" />} />
      <Route path="/info_stages" element={<InfoPage />}></Route>
      <Route path="/matches" element={<MatchesPage />}></Route>
    </Routes>

  );
};

export default RootNavigator;
