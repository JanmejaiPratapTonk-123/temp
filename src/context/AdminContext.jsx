import React, { createContext, useContext, useState } from 'react';
import { initialPendingRequests } from '../data/mockRequests';

const AdminContext = createContext();

export const AdminProvider = ({ children, onApprovePublish }) => {
  const [requests, setRequests] = useState(initialPendingRequests);
  const [selectedRequestId, setSelectedRequestId] = useState(initialPendingRequests[0]?.id || null);
  const [exposureMetrics, setExposureMetrics] = useState([
    { name: "Chhau Dance", percent: 18, status: "High Concentration", color: "bg-primary" },
    { name: "Kalamkari Art", percent: 15, status: "Healthy", color: "bg-surface-tint" },
    { name: "Dhrupad Music", percent: 12, status: "Healthy", color: "bg-primary-fixed-dim" },
    { name: "Baul Singers", percent: 5, status: "Needs Attention", color: "bg-secondary" },
    { name: "Pattachitra", percent: 3, status: "Needs Attention", color: "bg-secondary-fixed-dim" }
  ]);

  const addPendingSuggestion = (suggestionData) => {
    const newReq = {
      id: `req-${Date.now()}`,
      name: suggestionData.name,
      region: suggestionData.region,
      language: suggestionData.language,
      submittedBy: "@community_contributor",
      submittedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "New",
      description: suggestionData.description,
      sources: suggestionData.reference ? [{ type: "link", title: suggestionData.reference }] : [],
      suggestedCategory: "Craft",
      suggestedImage: suggestionData.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuA3wegRlqrWV2TIpMebYAXSE1Hy5l7IR_EXSWjyeMYDwrlOAllWdeA6Xwn29vAwk9JgL40CoK-RPvO5YRr4LFf3vifr_MBzMmTdO_BdC6aZGNmFRMTMlG1EKejocKPFWJ4ola-zvkWNv5Q8SYVYxPe8bV31WRq4xWsxVJwFcmwIXJix16W415TpaEFxqO4SG5LJtspDQU7DwsqEhxpDLSg2DGQEHYexnbfbBbrLEk0UuMB1ogDEupv2"
    };
    setRequests((prev) => [newReq, ...prev]);
  };

  const approveRequest = (id) => {
    const target = requests.find((r) => r.id === id);
    if (!target) return;

    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );

    if (onApprovePublish) {
      onApprovePublish(target);
    }
  };

  const requestMoreInfo = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "More Info Requested" } : r))
    );
  };

  const ignoreRequest = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    if (selectedRequestId === id) {
      const remaining = requests.filter((r) => r.id !== id);
      setSelectedRequestId(remaining[0]?.id || null);
    }
  };

  const simulateExposureRefresh = () => {
    setExposureMetrics([
      { name: "Chhau Dance", percent: 14, status: "Healthy", color: "bg-primary" },
      { name: "Kalamkari Art", percent: 14, status: "Healthy", color: "bg-surface-tint" },
      { name: "Dhrupad Music", percent: 13, status: "Healthy", color: "bg-primary-fixed-dim" },
      { name: "Baul Singers", percent: 12, status: "Healthy", color: "bg-secondary" },
      { name: "Pattachitra", percent: 10, status: "Healthy", color: "bg-secondary-fixed-dim" }
    ]);
  };

  const selectedRequest = requests.find((r) => r.id === selectedRequestId) || requests[0];

  return (
    <AdminContext.Provider
      value={{
        requests,
        selectedRequest,
        selectedRequestId,
        setSelectedRequestId,
        addPendingSuggestion,
        approveRequest,
        requestMoreInfo,
        ignoreRequest,
        exposureMetrics,
        simulateExposureRefresh
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
