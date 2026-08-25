import React from 'react';

export const ExposureFairnessChart = ({ metrics, onSimulateRefresh }) => {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-8 border border-surface-container-high shadow-sm relative overflow-hidden group">
      <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[200px]">donut_large</span>
      </div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="font-headline-md text-headline-md text-primary">Visibility Distribution</h3>
        <button
          onClick={onSimulateRefresh}
          className="bg-primary text-on-primary font-button text-button py-2 px-4 rounded-full hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2 text-xs"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
          Simulate refresh
        </button>
      </div>

      {/* Progress Bars */}
      <div className="flex flex-col gap-6 relative z-10 mb-8">
        {metrics.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between font-label-caps text-label-caps mb-2 text-primary">
              <span>{item.name}</span>
              <span>{item.percent}% ({item.status})</span>
            </div>
            <div className="w-full bg-surface-container h-4 rounded-full overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full transition-all duration-700`}
                style={{ width: `${item.percent * 4}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-surface-container-high">
        <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
          <span className="w-3 h-3 rounded-full bg-primary block"></span> High Concentration
        </span>
        <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
          <span className="w-3 h-3 rounded-full bg-primary-fixed-dim block"></span> Healthy
        </span>
        <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
          <span className="w-3 h-3 rounded-full bg-secondary block"></span> Needs Attention
        </span>
      </div>
    </section>
  );
};
