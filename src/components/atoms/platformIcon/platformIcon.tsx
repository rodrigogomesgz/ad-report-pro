"use client";
import { Facebook, Globe, Users } from "lucide-react";

interface PlatformIconProps {
  platform: 'google' | 'meta';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PlatformIcon({ platform, size = 'md', className = "" }: PlatformIconProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const getPlatformInfo = () => {
    switch (platform) {
      case 'google':
        return {
          name: 'Google Ads',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-600',
          icon: <Globe size={iconSize[size]} />
        };
      case 'meta':
        return {
          name: 'Meta Ads',
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-600',
          icon: <Users size={iconSize[size]} />
        };
    }
  };

  const platformInfo = getPlatformInfo();

  return (
    <div className={`${sizeClasses[size]} ${platformInfo.bgColor} rounded-full flex items-center justify-center ${className}`}>
      <div className={platformInfo.textColor}>
        {platformInfo.icon}
      </div>
    </div>
  );
}

export default PlatformIcon;
