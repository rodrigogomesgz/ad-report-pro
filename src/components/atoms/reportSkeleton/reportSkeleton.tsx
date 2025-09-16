"use client";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ReportSkeletonProps {
  className?: string;
}

export function ReportSkeleton({ className = "" }: ReportSkeletonProps) {
  return (
    <div className={`bg-white rounded-lg border p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Skeleton circle height={40} width={40} />
          <div>
            <Skeleton width={200} height={20} className="mb-2" />
            <Skeleton width={150} height={16} />
          </div>
        </div>
        <Skeleton width={80} height={32} />
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <Skeleton width={80} height={16} className="mb-2" />
            <Skeleton width={100} height={24} className="mb-1" />
            <Skeleton width={60} height={14} />
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mb-6">
        <Skeleton width={150} height={20} className="mb-4" />
        <Skeleton height={200} width="100%" />
      </div>

      {/* Table Section */}
      <div className="mb-6">
        <Skeleton width={120} height={20} className="mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton width={100} height={16} />
              <Skeleton width={80} height={16} />
              <Skeleton width={60} height={16} />
              <Skeleton width={80} height={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Insights Section */}
      <div>
        <Skeleton width={140} height={20} className="mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 border-l-4 border-secondary/30 bg-muted/20 rounded-r-lg">
              <Skeleton width={200} height={16} className="mb-2" />
              <Skeleton width="100%" height={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReportSkeleton;
