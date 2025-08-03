declare module 'react-vertical-timeline-component' {
  import React from 'react';

  export interface VerticalTimelineProps {
    children: React.ReactNode;
    lineColor?: string;
    className?: string;
  }

  export interface VerticalTimelineElementProps {
    children: React.ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconStyle?: React.CSSProperties;
    iconOnClick?: () => void;
    iconClassName?: string;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
} 