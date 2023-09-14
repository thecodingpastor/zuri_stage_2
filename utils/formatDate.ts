const __ = (time: Date) => {
  let date = new Date(time);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
export default __;
