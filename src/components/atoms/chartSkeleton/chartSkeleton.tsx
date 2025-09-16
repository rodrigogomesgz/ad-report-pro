"use client";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ChartSkeletonProps {
  type?: 'line' | 'bar' | 'area' | 'pie' | 'dashboard';
  height?: number;
  className?: string;
}

export function ChartSkeleton({ 
  type = 'line', 
  height = 200, 
  className = "" 
}: ChartSkeletonProps) {
  const renderLineChart = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width={120} height={20} />
        <Skeleton width={80} height={16} />
      </div>
      
      {/* Chart Area */}
      <div className="relative" style={{ height }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between pr-2">
          {[100, 75, 50, 25, 0].map((_, i) => (
            <Skeleton key={i} width={30} height={12} />
          ))}
        </div>
        
        {/* Chart lines */}
        <div className="ml-8 h-full flex items-end space-x-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <Skeleton 
                height={Math.random() * 80 + 20} 
                width="100%" 
                style={{ marginBottom: '2px' }}
              />
            </div>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-8 right-0 flex justify-between">
          {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((month, i) => (
            <Skeleton key={i} width={20} height={12} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderBarChart = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width={100} height={20} />
        <Skeleton width={60} height={16} />
      </div>
      
      {/* Chart Area */}
      <div className="space-y-2" style={{ height }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton width={60} height={16} />
            <Skeleton 
              width={`${Math.random() * 60 + 20}%`} 
              height={24} 
            />
            <Skeleton width={40} height={16} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderAreaChart = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width={140} height={20} />
        <Skeleton width={80} height={16} />
      </div>
      
      {/* Chart Area */}
      <div className="relative" style={{ height }}>
        <div className="absolute inset-0">
          <Skeleton height="100%" width="100%" />
        </div>
        <div className="absolute top-4 left-4 right-4 bottom-4">
          <Skeleton height="100%" width="100%" />
        </div>
      </div>
    </div>
  );

  const renderPieChart = () => (
    <div className="space-y-3">
      {/* Header */}
      <Skeleton width={120} height={20} />
      
      {/* Chart Area */}
      <div className="flex items-center space-x-6" style={{ height }}>
        <div className="flex-shrink-0">
          <Skeleton circle height={120} width={120} />
        </div>
        <div className="flex-1 space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton width={12} height={12} />
              <Skeleton width={80} height={16} />
              <Skeleton width={40} height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton width={150} height={24} />
        <Skeleton width={100} height={20} />
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <Skeleton width={60} height={16} className="mb-2" />
            <Skeleton width={80} height={24} className="mb-1" />
            <Skeleton width={100} height={14} />
          </div>
        ))}
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg">
          <Skeleton width={120} height={20} className="mb-4" />
          <Skeleton height={150} width="100%" />
        </div>
        <div className="p-4 border rounded-lg">
          <Skeleton width={100} height={20} className="mb-4" />
          <Skeleton height={150} width="100%" />
        </div>
      </div>
    </div>
  );

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart();
      case 'bar':
        return renderBarChart();
      case 'area':
        return renderAreaChart();
      case 'pie':
        return renderPieChart();
      case 'dashboard':
        return renderDashboard();
      default:
        return renderLineChart();
    }
  };

  return (
    <div className={`p-4 bg-white rounded-lg border ${className}`}>
      {renderChart()}
    </div>
  );
}

export default ChartSkeleton;
