export const scrollTo = (ref: HTMLElement | null) => {
  ref?.scrollIntoView({
    inline: 'center',
    behavior: 'smooth',
  });
};
