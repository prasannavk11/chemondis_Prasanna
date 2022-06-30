export const getUserDetail = (users, id) => {
  const userDetails = users.find((user) => user.id === id);
  return userDetails ? userDetails.name : "";
};

export const getAlbumDetail = (albums, id) => {
  const albumDetails = albums.find((album) => album.id === parseInt(id));
  return albumDetails;
};
