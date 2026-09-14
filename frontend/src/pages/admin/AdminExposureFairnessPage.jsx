import React from 'react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { ExposureFairnessChart } from '../../components/admin/ExposureFairnessChart';
import { useAdmin } from '../../context/AdminContext';

export const AdminExposureFairnessPage = () => {
  const { exposureMetrics, simulateExposureRefresh } = useAdmin();

  return (
    <div className="antialiased min-h-screen flex w-full bg-background font-body-md">
      <AdminSidebar />

      <main className="flex-1 md:ml-64 w-full max-w-container-max mx-auto overflow-x-hidden relative min-h-screen flex flex-col">
        <AdminHeader title="Exposure Fairness" />

        <div className="p-margin-mobile md:p-margin-desktop flex-1">
          <header className="mb-12">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              Exposure Fairness
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Is every tradition getting a chance to be discovered?
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8">
              <ExposureFairnessChart
                metrics={exposureMetrics}
                onSimulateRefresh={simulateExposureRefresh}
              />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-sm">
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Fairness Score</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display-lg text-display-lg text-secondary">84</span>
                  <span className="font-body-md text-on-surface-variant">/ 100</span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Curation distribution is balanced. 2 traditions need boosted exposure this week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
