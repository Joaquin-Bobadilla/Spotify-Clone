export const cn = (...classes: (string | boolean | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export const secondsToText = (seconds: number) => {
  let hours = 0;
  let minutes = 0;

  if (seconds % 3600 >= 0) {
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
  }
  if (seconds % 60 >= 0) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  return hours > 0
    ? `${hours}h ${minutes}min`
    : seconds > 0
    ? `${minutes} min ${seconds} segundos`
    : `${minutes} min`;
};

export const secondsToMinutes = (secods: number) => {
  return `${Math.floor(secods / 60)}:${String(secods % 60).padStart(2, "0")}`;
};
