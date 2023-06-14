import React, { useState } from "react";

type FlatShadowCardInteractivityType = {
  flatOnMouseEnter?: boolean;
  flatOnMouseLeave?: boolean;
  flatOnMouseDown?: boolean;
  flatOnMouseUp?: boolean;
};

interface IFlatShadowCard {
  className?: string;
  children: React.ReactNode;
  defaultIsFlat?: boolean;
  elevation?: number;
  bgColor?: string;
  borderColor?: string;
  onClick?: () => void;
  /** `true` if you want the card to be flat on the specified events. `false` if not. */
  interactivity?: FlatShadowCardInteractivityType | false;
}

const FlatShadowCard: React.FC<IFlatShadowCard> = ({
  className = "",
  children,
  defaultIsFlat = false,
  elevation = 7,
  bgColor = "bg-yellow-500",
  borderColor = "border-yellow-500",
  onClick = () => {},
  interactivity,
}) => {
  const [isFlat, setIsFlat] = useState<boolean>(defaultIsFlat);

  const defaultInteractivity = {
    flatOnMouseEnter: false,
    flatOnMouseLeave: false,
    flatOnMouseDown: true,
    flatOnMouseUp: false,
  };
  const spreadInteractivity = { ...defaultInteractivity, ...interactivity };

  if (interactivity === false)
    return (
      <FlatShadowCardElement
        elevation={elevation}
        isFlat={isFlat}
        className={className}
        bgColor={bgColor}
        borderColor={borderColor}
      >
        {children}
      </FlatShadowCardElement>
    );

  return (
    <button
      onClick={() => {
        onClick();
      }}
      onMouseEnter={() => {
        setIsFlat(spreadInteractivity.flatOnMouseEnter);
      }}
      onMouseLeave={() => {
        setIsFlat(spreadInteractivity.flatOnMouseLeave);
      }}
      onMouseDown={() => {
        setIsFlat(spreadInteractivity.flatOnMouseDown);
      }}
      onMouseUp={() => {
        setIsFlat(spreadInteractivity.flatOnMouseUp);
      }}
      className="outline-none"
    >
      <FlatShadowCardElement
        elevation={elevation}
        isFlat={isFlat}
        className={className}
        bgColor={bgColor}
        borderColor={borderColor}
      >
        {children}
      </FlatShadowCardElement>
    </button>
  );
};

interface IFlatShadowCardElementProps {
  elevation: number;
  isFlat: boolean;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  children: React.ReactNode;
}
const FlatShadowCardElement: React.FC<IFlatShadowCardElementProps> = ({
  elevation,
  isFlat,
  className = "",
  bgColor = "bg-yellow-500",
  borderColor = "border-yellow-500",
  children,
}) => {
  return (
    <>
      {/* Elevation Spacer (for padding) */}
      <div style={{ height: elevation }} />
      <div className="relative group flat-shadow-card">
        {/* Shadow */}
        <div
          className={`absolute inset-0 rounded-2xl border ${borderColor} ${bgColor}`}
        />
        {/* Content */}
        <div
          className={`relative border ${borderColor} rounded-2xl bg-white ${className} will-change-transform transition-transform -translate-y-1.5 group-[.flat-shadow-card]:group-hover:translate-y-0`}
          style={{
            transform: isFlat
              ? "translateY(0px)"
              : `translateY(-${elevation}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default FlatShadowCard;
