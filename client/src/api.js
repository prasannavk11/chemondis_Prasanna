const API_URL = process.env.REACT_APP_API_URL;

export const getAlbums = async (start, limit) => {
  const params = new URLSearchParams();
  params.append("start", start);
  params.append("limit", limit);
  const response = await fetch(`${API_URL}/albums?${params}`);
  const responseJson = await response.json();
  return responseJson;
};

export const getPhotos = async (albumId, start, limit) => {
  const params = new URLSearchParams();
  params.append("albumId", albumId);
  params.append("start", start);
  params.append("limit", limit);
  const response = await fetch(`${API_URL}/photos?${params}`);
  const responseJson = await response.json();
  return responseJson;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const responseJson = await response.json();
  return responseJson;
};
