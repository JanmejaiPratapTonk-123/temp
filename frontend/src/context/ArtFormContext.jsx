import React, { createContext, useContext, useState } from 'react';
import { initialArtForms } from '../data/mockArtForms';

const ArtFormContext = createContext();

export const ArtFormProvider = ({ children }) => {
  const [artForms, setArtForms] = useState(initialArtForms);
  const [selectedQuickView, setSelectedQuickView] = useState(null);
  const [savedJourneyIds, setSavedJourneyIds] = useState(['chhau', 'kalamkari']);

  const openQuickView = (artForm) => {
    setSelectedQuickView(artForm);
  };

  const closeQuickView = () => {
    setSelectedQuickView(null);
  };

  const toggleSaveJourney = (id) => {
    setSavedJourneyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const publishApprovedArtForm = (approvedRequest) => {
    const slug = approvedRequest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newArtForm = {
      id: slug,
      slug: slug,
      title: approvedRequest.name,
      subtitle: approvedRequest.description.substring(0, 100) + '...',
      region: approvedRequest.region,
      state: approvedRequest.region.split('·')[1]?.trim() || approvedRequest.region,
      category: approvedRequest.suggestedCategory || 'Craft',
      readTime: '3 min read',
      coverImage: approvedRequest.suggestedImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3wegRlqrWV2TIpMebYAXSE1Hy5l7IR_EXSWjyeMYDwrlOAllWdeA6Xwn29vAwk9JgL40CoK-RPvO5YRr4LFf3vifr_MBzMmTdO_BdC6aZGNmFRMTMlG1EKejocKPFWJ4ola-zvkWNv5Q8SYVYxPe8bV31WRq4xWsxVJwFcmwIXJix16W415TpaEFxqO4SG5LJtspDQU7DwsqEhxpDLSg2DGQEHYexnbfbBbrLEk0UuMB1ogDEupv2',
      heroImage: approvedRequest.suggestedImage || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3wegRlqrWV2TIpMebYAXSE1Hy5l7IR_EXSWjyeMYDwrlOAllWdeA6Xwn29vAwk9JgL40CoK-RPvO5YRr4LFf3vifr_MBzMmTdO_BdC6aZGNmFRMTMlG1EKejocKPFWJ4ola-zvkWNv5Q8SYVYxPe8bV31WRq4xWsxVJwFcmwIXJix16W415TpaEFxqO4SG5LJtspDQU7DwsqEhxpDLSg2DGQEHYexnbfbBbrLEk0UuMB1ogDEupv2',
      detailImages: [],
      description: approvedRequest.description,
      fullHistory: approvedRequest.description,
      keyArtists: [],
      isFeatured: true,
      isRare: false
    };

    setArtForms((prev) => {
      if (prev.some((af) => af.slug === slug)) return prev;
      return [newArtForm, ...prev];
    });
  };

  return (
    <ArtFormContext.Provider
      value={{
        artForms,
        selectedQuickView,
        openQuickView,
        closeQuickView,
        savedJourneyIds,
        toggleSaveJourney,
        publishApprovedArtForm
      }}
    >
      {children}
    </ArtFormContext.Provider>
  );
};

export const useArtForm = () => {
  const context = useContext(ArtFormContext);
  if (!context) {
    throw new Error('useArtForm must be used within an ArtFormProvider');
  }
  return context;
};
