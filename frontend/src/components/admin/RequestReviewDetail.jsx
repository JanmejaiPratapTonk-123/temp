import React from 'react';

export const RequestReviewDetail = ({ request, onApprove, onRequestInfo, onIgnore }) => {
  if (!request) {
    return (
      <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-8 text-center text-on-surface-variant">
        Select a request from the table to review.
      </section>
    );
  }

  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-8 relative overflow-hidden flex flex-col gap-6">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-surface-container rounded-full opacity-50 blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-start z-10">
        <div>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-2 block uppercase">
            Review Detail
          </span>
          <h3 className="font-display-lg text-headline-lg text-primary font-medium leading-tight mb-1">
            {request.name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">location_on</span>
            {request.region}
          </p>
        </div>
        <div className="text-right text-sm text-on-surface-variant">
          <p>Submitted: {request.submittedDate}</p>
          <p>By: <span className="text-primary font-medium">{request.submittedBy}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 z-10">
        <div>
          <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2 border-b border-surface-container-high pb-1 inline-block uppercase">
            Description
          </h4>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            {request.description}
          </p>
        </div>

        {request.sources && request.sources.length > 0 && (
          <div>
            <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2 border-b border-surface-container-high pb-1 inline-block uppercase">
              Provided Sources
            </h4>
            <ul className="font-body-md text-body-md text-primary flex flex-col gap-2">
              {request.sources.map((src, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">{src.type === 'link' ? 'link' : 'image'}</span>
                    {src.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mt-4 pt-6 border-t border-surface-container-high z-10">
        <button
          onClick={() => onApprove(request.id)}
          disabled={request.status === "Approved"}
          className={`font-button text-button px-6 py-3 rounded-full transition-colors shadow-sm flex items-center gap-2 ${
            request.status === "Approved"
              ? "bg-surface-container-high text-outline cursor-not-allowed"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          {request.status === "Approved" ? "APPROVED" : "APPROVE & ADD"}
        </button>

        <button
          onClick={() => onRequestInfo(request.id)}
          className="bg-transparent text-primary font-button text-button px-6 py-3 rounded-full border-[1.5px] border-primary hover:bg-surface-container-low transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">chat_bubble</span>
          REQUEST MORE INFO
        </button>

        <div className="flex-grow"></div>

        <button
          onClick={() => onIgnore(request.id)}
          className="text-on-surface-variant font-button text-button px-4 py-3 hover:text-error transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">delete</span>
          IGNORE
        </button>
      </div>
    </section>
  );
};
