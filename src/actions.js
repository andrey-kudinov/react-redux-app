// action creator
export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rnd = (value) => {
  return { type: "RND", value: Math.floor(Math.random() * 10) };
};
