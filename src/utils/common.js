export const sortByText = (data, type) => {
  const order = type === "desc" ? -1 : 1;
  return data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1 * order;
    else if (nameA > nameB) return 1 * order;
    return 0 * order;
  });
};

export const sortByNumber = (data, type) => {
  if (type === "htl") return data.sort((a, b) => b.price - a.price);
  return data.sort((a, b) => a.price - b.price);
};
