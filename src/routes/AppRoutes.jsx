import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/public/HomePage';
import { ExplorePage } from '../pages/public/ExplorePage';
import { ArtFormDetailPage } from '../pages/public/ArtFormDetailPage';
import { EventsPage } from '../pages/public/EventsPage';
import { MyJourneyPage } from '../pages/public/MyJourneyPage';
import { SuggestArtFormPage } from '../pages/public/SuggestArtFormPage';
import { AdminOverviewPage } from '../pages/admin/AdminOverviewPage';
import { AdminRequestsCMSPage } from '../pages/admin/AdminRequestsCMSPage';
import { AdminExposureFairnessPage } from '../pages/admin/AdminExposureFairnessPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/art-form/:slug" element={<ArtFormDetailPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/my-journey" element={<MyJourneyPage />} />
      <Route path="/suggest-art-form" element={<SuggestArtFormPage />} />
      <Route path="/admin" element={<AdminOverviewPage />} />
      <Route path="/admin/requests" element={<AdminRequestsCMSPage />} />
      <Route path="/admin/exposure-fairness" element={<AdminExposureFairnessPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
