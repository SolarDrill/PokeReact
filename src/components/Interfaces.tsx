export interface Pokemon {
    name: string;
    imageUrl: string;
    height: number;
    weight: number;
    types: string[];
  }

export interface Props {
    handlePrev: () => void;
    handleNext: () => void;
    prevDisabled: boolean;
    nextDisabled: boolean;
  };