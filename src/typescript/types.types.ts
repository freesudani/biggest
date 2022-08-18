export interface ShowNavbarProps {
  shownvb: boolean;
}

export interface InstructionsProps {
  id: number;
  description: string;
}

export interface instrProps {
  step: number;
  show: boolean;
}

export interface fetchProps {
  countries: { id: number; image: string; title: string; area: number }[];
  questionOption1: {
    image: string;
    title: string;
    area: number;
  };
  questionOption2: {
    image: string;
    title: string;
    area: number;
  };
  correctAnswer1: boolean;
  correctAnswer2: boolean;
  correctAnswer1Tick: number;
  correctAnswer2Tick: number;
}
