export const getInputVariant = (variant: string) => {
  switch (variant) {
    case 'outlined':
      return 'input-outlined';
    case 'standard':
      return 'input-standard';
    default:
      return 'input-standard';
  }
};

export const getLabelVariant = (variant: string) => {
  switch (variant) {
    case 'outlined':
      return 'input-label-outlined';
    case 'standard':
      return 'input-label-standard';
    default:
      return 'input-label-standard';
  }
};

export const getItemShrinkPosition = (variant: string) => {
  switch (variant) {
    case 'outlined':
      return 'input-shrink-outlined';
    case 'standard':
      return 'input-shrink-standard';
    default:
      return 'input-shrink-standard';
  }
};
