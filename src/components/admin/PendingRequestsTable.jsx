import React from 'react';

export const PendingRequestsTable = ({ requests, selectedId, onSelect }) => {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high overflow-hidden">
      <div className="p-6 border-b border-surface-container-high flex justify-between items-center bg-surface-container-lowest">
        <h2 className="font-display-lg text-headline-md text-primary">Pending Art Forms</h2>
        <div className="flex gap-2">
          <button title="Filter" className="text-on-surface-variant hover:text-primary transition-colors p-1">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button title="Sort" className="text-on-surface-variant hover:text-primary transition-colors p-1">
            <span className="material-symbols-outlined">sort</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps border-b border-surface-container-high">
              <th className="py-4 px-6 font-medium">Suggested Art Form</th>
              <th className="py-4 px-6 font-medium">Region</th>
              <th className="py-4 px-6 font-medium">Submitted By</th>
              <th className="py-4 px-6 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface divide-y divide-surface-container-high">
            {requests.map((req) => {
              const isSelected = req.id === selectedId;
              let badgeColor = "bg-surface-container-highest text-on-surface-variant";
              if (req.status === "Reviewing") {
                badgeColor = "bg-tertiary-fixed text-on-tertiary-fixed-variant border border-tertiary-fixed-dim";
              } else if (req.status === "Approved") {
                badgeColor = "bg-secondary-fixed text-on-secondary-fixed-variant";
              }

              return (
                <tr
                  key={req.id}
                  onClick={() => onSelect(req.id)}
                  className={`hover:bg-surface-container-low transition-colors cursor-pointer relative ${
                    isSelected ? "bg-surface-container-lowest font-medium" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-primary">{req.name}</td>
                  <td className="py-4 px-6 text-on-surface-variant">{req.region}</td>
                  <td className="py-4 px-6 text-on-surface-variant">{req.submittedBy}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}>
                      {req.status}
                    </span>
                  </td>
                  {isSelected && (
                    <td className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-r-sm"></td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
