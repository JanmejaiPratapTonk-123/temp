import React, { useState } from 'react';

export const ContentCMSForm = ({ artForms = [], onPublish }) => {
  const [selectedSlug, setSelectedSlug] = useState(artForms[0]?.slug || 'kalamkari');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isAiDraft, setIsAiDraft] = useState(false);
  const [isPublishedSuccess, setIsPublishedSuccess] = useState(false);

  const handleGenerateAiDraft = () => {
    const selectedArtForm = artForms.find((af) => af.slug === selectedSlug) || artForms[0];
    setTitle(`The Living Legacy of ${selectedArtForm?.title || 'Cultural Tradition'}`);
    setBody(
      `${selectedArtForm?.title || 'This art form'} represents an enduring testimony to regional craftsmanship. Originating in ${selectedArtForm?.region || 'eastern India'}, artisans utilize age-old techniques passed down through generations. Preserving this narrative safeguards our shared cultural heritage for future generations.`
    );
    setIsAiDraft(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onPublish) {
      onPublish({ selectedSlug, title, body });
    }
    setIsPublishedSuccess(true);
    setTimeout(() => setIsPublishedSuccess(false), 3000);
  };

  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-6 md:p-8 sticky top-24">
      <div className="flex items-center gap-3 mb-6 border-b border-surface-container-high pb-4">
        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
          edit_document
        </span>
        <h2 className="font-display-lg text-headline-md text-primary">Content CMS</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Select Art Form */}
        <div className="flex flex-col gap-1">
          <label htmlFor="art-form-select" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
            Target Art Form
          </label>
          <select
            id="art-form-select"
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="form-input-bottom-border font-body-md text-body-md text-primary w-full py-2 focus:ring-0 focus:outline-none bg-transparent cursor-pointer"
          >
            {artForms.map((af) => (
              <option key={af.id} value={af.slug}>
                {af.title} ({af.category})
              </option>
            ))}
          </select>
        </div>

        {/* Post Title */}
        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="post-title" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
            Post Title
          </label>
          <input
            id="post-title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter an engaging title..."
            className="form-input-bottom-border font-display-lg text-headline-md text-primary w-full py-2 focus:ring-0 placeholder:text-surface-dim"
          />
        </div>

        {/* Media Upload */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
            Cover Media
          </label>
          <div className="h-32 rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors group relative overflow-hidden">
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-3xl mb-2">
              add_photo_alternate
            </span>
            <span className="font-body-md text-sm text-on-surface-variant group-hover:text-primary transition-colors">
              Click to Upload Media
            </span>
          </div>
        </div>

        {/* AI Draft Section */}
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-secondary">auto_awesome</span> Content Body
            </label>
            <button
              type="button"
              onClick={handleGenerateAiDraft}
              className="text-xs font-button text-secondary hover:underline flex items-center gap-1"
            >
              Generate Draft <span className="material-symbols-outlined text-[14px]">bolt</span>
            </button>
          </div>
          <div className="relative">
            <textarea
              required
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Start writing or generate an AI draft based on request info..."
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-4 font-body-md text-body-md text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary resize-y ai-draft-bg"
            />
            {isAiDraft && (
              <div className="absolute top-3 right-3 bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded text-xs font-label-caps tracking-widest border border-tertiary-fixed-dim flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[12px]">edit_note</span> AI DRAFT
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 mt-4">
          {isPublishedSuccess && (
            <span className="text-xs text-secondary font-button animate-pulse">✦ Post published!</span>
          )}
          <button
            type="button"
            className="text-on-surface-variant font-button text-button px-4 py-2 hover:text-primary transition-colors border-b border-transparent hover:border-primary"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="bg-primary text-on-primary font-button text-button px-8 py-3 rounded-full hover:bg-primary-container transition-colors shadow-sm"
          >
            Publish
          </button>
        </div>
      </form>
    </section>
  );
};
