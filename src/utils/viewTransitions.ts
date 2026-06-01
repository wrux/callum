const WRUX_VIEW_TRANSITION_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

const createFadeTransition = (duration: number) => {
  const transition = {
    old: {
      name: 'wrux-view-fade-out',
      duration,
      easing: WRUX_VIEW_TRANSITION_EASING,
      fillMode: 'both',
    },
    new: {
      name: 'wrux-view-fade-in',
      duration,
      easing: WRUX_VIEW_TRANSITION_EASING,
      fillMode: 'both',
    },
  };

  return {
    forwards: transition,
    backwards: transition,
  };
};

export const wruxChromeFadeTransition = createFadeTransition(360);
