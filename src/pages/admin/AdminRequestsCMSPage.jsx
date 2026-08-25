import React from 'react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { PendingRequestsTable } from '../../components/admin/PendingRequestsTable';
import { RequestReviewDetail } from '../../components/admin/RequestReviewDetail';
import { ContentCMSForm } from '../../components/admin/ContentCMSForm';
import { useAdmin } from '../../context/AdminContext';
import { useArtForm } from '../../context/ArtFormContext';

export const AdminRequestsCMSPage = () => {
  const {
    requests,
    selectedRequest,
    selectedRequestId,
    setSelectedRequestId,
    approveRequest,
    requestMoreInfo,
    ignoreRequest
  } = useAdmin();

  const { artForms, publishApprovedArtForm } = useArtForm();

  const handleApprove = (id) => {
    const reqItem = requests.find((r) => r.id === id);
    if (reqItem) {
      approveRequest(id);
      publishApprovedArtForm(reqItem);
    }
  };

  return (
    <div className="antialiased min-h-screen flex w-full bg-background">
      <AdminSidebar />

      <main className="flex-1 md:ml-64 w-full max-w-container-max mx-auto overflow-x-hidden relative min-h-screen flex flex-col">
        <AdminHeader title="Requests & Content CMS" />

        <div className="p-margin-mobile md:p-margin-desktop flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column (7 cols): Requests Table & Detail */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              <PendingRequestsTable
                requests={requests}
                selectedId={selectedRequestId}
                onSelect={setSelectedRequestId}
              />

              <RequestReviewDetail
                request={selectedRequest}
                onApprove={handleApprove}
                onRequestInfo={requestMoreInfo}
                onIgnore={ignoreRequest}
              />
            </div>

            {/* Right Column (5 cols): Content CMS Panel */}
            <div className="lg:col-span-5">
              <ContentCMSForm
                artForms={artForms}
                onPublish={(draft) => console.log('Draft published:', draft)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
