import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ArtFormProvider, useArtForm } from './context/ArtFormContext';
import { AdminProvider } from './context/AdminContext';
import { AppRoutes } from './routes/AppRoutes';
import { ArtFormQuickViewModal } from './components/modals/ArtFormQuickViewModal';

const MainApp = () => {
  const { selectedQuickView, closeQuickView, publishApprovedArtForm } = useArtForm();

  return (
    <AdminProvider onApprovePublish={publishApprovedArtForm}>
      <AppRoutes />
      {selectedQuickView && (
        <ArtFormQuickViewModal artForm={selectedQuickView} onClose={closeQuickView} />
      )}
    </AdminProvider>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <ArtFormProvider>
        <MainApp />
      </ArtFormProvider>
    </BrowserRouter>
  );
}

export default App;
