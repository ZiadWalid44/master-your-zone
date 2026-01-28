import React from 'react';
import { useVehicleScanner } from '../hooks/useVehicleScanner'; 

const MaintenanceDashboard = () => {
  const { data, loading, error } = useVehicleScanner();

  // 1. Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-blue-600 font-bold">Connecting to Vehicle ECU...</span>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="text-center p-10 bg-red-50 text-red-600 rounded-lg m-4 border border-red-200">
        ⚠️ Connection Failed: {error}
      </div>
    );
  }

  // 3. Defensive Check (Prevents White Screen)
  if (!data || !data.last_maintenance) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-6 rounded shadow-sm">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-lg font-medium text-yellow-800">Incomplete Data</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>Maintenance records (last_maintenance) are missing for this vehicle.</p>
              <p className="mt-1 font-mono text-xs">Please check your OBD_Mock_Data.json file.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Business Logic ---
  
  // Helper function for status calculation
  const checkStatus = (currentKm, lastKm, limit) => {
    const current = Number(currentKm) || 0;
    const last = Number(lastKm) || 0;
    
    const diff = current - last;
    const remaining = limit - diff;
    const percentage = (diff / limit) * 100;

    // Status Determination
    if (remaining <= 0) {
      return { 
        status: 'Critical', 
        msg: 'Limit Exceeded! Service Immediately', 
        color: 'bg-red-50 text-red-700 border-red-500', 
        barColor: 'bg-red-600',
        progress: 100 
      };
    }
    if (remaining < 1000) {
      return { 
        status: 'Warning', 
        msg: 'Service Due Soon', 
        color: 'bg-yellow-50 text-yellow-700 border-yellow-500', 
        barColor: 'bg-yellow-500',
        progress: percentage 
      };
    }
    return { 
      status: 'Good', 
      msg: `${remaining.toLocaleString()} km remaining`, 
      color: 'bg-green-50 text-green-700 border-green-500', 
      barColor: 'bg-green-500',
      progress: percentage 
    };
  };

  // Applying Logic
  const oil = checkStatus(data.odometer_km, data.last_maintenance.oil_change_km, 5000);
  const tires = checkStatus(data.odometer_km, data.last_maintenance.tires_km, 40000);
  const brakes = checkStatus(data.odometer_km, data.last_maintenance.brakes_km, 30000);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mt-6 text-left">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          📊 Live Vehicle Status
        </h2>
        <span className="bg-blue-100 text-blue-800 py-1 px-4 rounded-full text-sm font-bold font-mono shadow-sm">
          ODOMETER: {data.odometer_km.toLocaleString()} KM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MaintenanceCard title="Engine Oil" icon="🛢️" info={oil} />
        <MaintenanceCard title="Brake Pads" icon="🛑" info={brakes} />
        <MaintenanceCard title="Tires" icon="🍩" info={tires} />
      </div>
    </div>
  );
};

// Card Sub-Component
const MaintenanceCard = ({ title, icon, info }) => (
  <div className={`border-l-4 p-5 rounded-lg shadow-sm transition-all hover:shadow-md ${info.color}`}>
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-bold text-lg flex items-center gap-2 text-gray-800">
          <span className="text-xl">{icon}</span> {title}
        </h3>
        <p className="text-sm mt-1 font-medium opacity-90">{info.msg}</p>
      </div>
      <span className="text-xs font-bold px-2 py-1 bg-white bg-opacity-60 rounded border border-black/5 h-fit">
        {info.status}
      </span>
    </div>
    
    {/* Progress Bar */}
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div 
        className={`h-2.5 rounded-full ${info.barColor} transition-all duration-1000 ease-out`}
        style={{ width: `${info.progress > 100 ? 100 : info.progress}%` }}
      ></div>
    </div>
  </div>
);

export default MaintenanceDashboard;