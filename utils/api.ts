const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createUrl(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );
  if (res.status === 200) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async (content: string) => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
      body: JSON.stringify({ content }),
    })
  );

  if (res.status === 200) {
    const data = await res.json();
    return data.data;
  }
};

export const deletedEntry = async (id: string) => {
  const res = await fetch(
    new Request(createUrl(`/api/journal/${id}`), {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
  );
};

export const askQuestion = async (question: string) => {
  const res = await fetch(
    new Request(createUrl(`/api/question`), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
