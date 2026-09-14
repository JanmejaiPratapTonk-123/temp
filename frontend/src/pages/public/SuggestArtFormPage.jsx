import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MinimalInput } from '../../components/common/MinimalInput';
import { MinimalTextarea } from '../../components/common/MinimalTextarea';
import { ImageUploadZone } from '../../components/common/ImageUploadZone';
import { SuccessModal } from '../../components/modals/SuccessModal';
import { useAdmin } from '../../context/AdminContext';

export const SuggestArtFormPage = () => {
  const navigate = useNavigate();
  const { addPendingSuggestion } = useAdmin();

  const [artName, setArtName] = useState('');
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [reference, setReference] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artName || !region || !description) return;

    addPendingSuggestion({
      name: artName,
      region,
      language,
      description,
      reference
    });

    setShowSuccessModal(true);
  };

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA33_RBhk47Fj0FFol2zwARMoJ0r3QWdyFNCG-KqsMf6_77JO6fM8bOqrIjtRBbyzgs1BtVoNWSavMPtC2H5jTVC4o-mIb9-5z6ZfoNcBTwHBXH4PHV9936ppmOIHVVizGDa6Omk29yGJ5PMK3i8eUz7khjURVnFpvqhPI0rb6Jq_yyZhMBMgTKzur4CQlVaA_Im4-QaM9lW7XXWHWcXuPLObSfkGOYN71lFsOxAa3df4Xt8jEmi2AR";

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col relative overflow-x-hidden selection:bg-secondary selection:text-on-secondary">
      {/* Focused Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoUrl} alt="Tvarita Logo" className="h-8 w-8 object-contain" />
            <span className="font-display-lg text-headline-md text-primary tracking-tight">Tvarita</span>
          </Link>
          <Link to="/explore" className="text-on-surface-variant hover:text-secondary transition-colors font-button flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">close</span>
            <span className="hidden md:inline">Cancel</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-[100px] pb-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10 flex justify-center">
        <div className="w-full max-w-2xl relative">
          <div className="mb-16">
            <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-[0.15em]">
              Can't find a tradition?
            </p>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              Suggest an Art Form
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Help us build a more comprehensive archive. If you know of a cultural tradition, ritual, or art form that should be documented, please share its details below.
            </p>
          </div>

          <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-8 md:p-12 border border-outline-variant/30 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-20">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <MinimalInput
                  id="art-name"
                  label="Art form name"
                  required
                  placeholder="e.g., Koodiyattam"
                  value={artName}
                  onChange={(e) => setArtName(e.target.value)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <MinimalInput
                    id="region"
                    label="Region"
                    required
                    placeholder="e.g., Kerala, India"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                  <MinimalInput
                    id="language"
                    label="Language / Community"
                    required
                    placeholder="e.g., Malayalam / Chakyar"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </div>

                <MinimalTextarea
                  id="description"
                  label="What do you know about it?"
                  required
                  rows={4}
                  placeholder="Briefly describe the art form, its significance, or your connection to it..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <MinimalInput
                  id="reference"
                  label="Reference / Source (Optional)"
                  placeholder="Link to an article, video, or book title"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />

                <ImageUploadZone />
              </div>

              <div className="pt-8 border-t border-outline-variant/30 flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary-container transition-all shadow-sm active:scale-95 group"
                >
                  <span>Send suggestion</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {showSuccessModal && (
        <SuccessModal
          title="Suggestion received ✦"
          message="The Tvarita team will review it before it becomes part of the platform. Thank you for contributing to New Heritage."
          onReturn={() => navigate('/explore')}
        />
      )}
    </div>
  );
};
