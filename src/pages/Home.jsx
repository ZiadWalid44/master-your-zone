import React from 'react';
import MaintenanceDashboard from '../components/MaintenanceDashboard'; // 1. استدعاء الكومبوننت

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* الجزء الترحيبي القديم بتاعك */}
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to AutoCare Pro 🚗</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your AI-powered assistant for car diagnostics and maintenance.
        </p>
      </div>

      {/* 2. إضافة جزء العدادات والصيانة هنا */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <MaintenanceDashboard />
      </div>
    </div>
  );
};

export default Home;