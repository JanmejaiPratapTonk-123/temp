import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { AdminStatCard } from '../../components/cards/AdminStatCard';
import { useAdmin } from '../../context/AdminContext';

export const AdminOverviewPage = () => {
  const navigate = useNavigate();
  const { requests } = useAdmin();

  const pendingCount = requests.filter((r) => r.status !== "Approved").length;

  return (
    <div className="antialiased min-h-screen flex w-full bg-background">
      <AdminSidebar />

      <main className="flex-1 md:ml-64 w-full max-w-container-max mx-auto overflow-x-hidden relative min-h-screen flex flex-col">
        <AdminHeader title="Curation Overview" />

        <div className="p-margin-mobile md:p-margin-desktop flex-1">
          <header className="mb-16">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-2">
              Good morning, Tvarita.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Here is your cultural curation overview for today.
            </p>
          </header>

          {/* Bento Grid Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter mb-24">
            {/* Hero Attention Card */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-headline-md text-headline-md text-primary">Needs your attention</h3>
                    <span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-3 py-1 rounded-full border border-error/20">
                      High Priority
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li
                      onClick={() => navigate('/admin/requests')}
                      className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/30 hover:border-secondary/50 transition-colors cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-secondary mt-1">warning</span>
                      <div>
                        <h4 className="font-button text-button text-primary mb-1">
                          Review {pendingCount} pending art form requests
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                          User contributions waiting for curation approval.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/30 hover:border-secondary/50 transition-colors cursor-pointer shadow-sm">
                      <span className="material-symbols-outlined text-tertiary-container mt-1">schedule</span>
                      <div>
                        <h4 className="font-button text-button text-primary mb-1">
                          Approve "Kathakali Origins" manuscript
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                          Pending field notes since yesterday.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => navigate('/admin/requests')}
                  className="bg-primary text-on-primary font-button text-button py-3 px-6 rounded-lg self-start hover:bg-primary-container transition-colors shadow-sm"
                >
                  Action All Items
                </button>
              </div>
            </div>

            {/* Stat Cards */}
            <AdminStatCard
              icon="palette"
              value={pendingCount}
              label="Pending Art-Form Requests"
              colorClass="text-primary"
              onClick={() => navigate('/admin/requests')}
            />

            <AdminStatCard
              icon="description"
              value="45"
              label="Content Awaiting Review"
              colorClass="text-secondary"
              onClick={() => navigate('/admin/requests')}
            />

            <AdminStatCard
              icon="event"
              value="8"
              label="Upcoming Events"
              colorClass="text-primary"
              bgClass="bg-primary-fixed-dim/20"
              onClick={() => navigate('/events')}
            />

            <AdminStatCard
              icon="person_add"
              value="104"
              label="Artist Applications"
              colorClass="text-tertiary-container"
              onClick={() => navigate('/admin/requests')}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
