const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
    })
  );
  if (res.status === 200) {
    const data = await res.json();
    return data.data;
  }
};
