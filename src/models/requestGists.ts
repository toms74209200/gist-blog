export const requestGists = async (contents: string[]) => {
  if (contents.length === 0) {
    return [];
  }
  const promises = contents.map(async (gistId) => {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: `Bearer ${Deno.env.get("PAT")}`,
      },
    });
    return response.json();
  });

  return await Promise.all(promises);
};
