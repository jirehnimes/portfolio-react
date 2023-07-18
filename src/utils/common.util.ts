export const scrollTo = (ref: HTMLElement | null) => {
  setTimeout(
    () =>
      ref?.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
      }),
    0,
  );
};
