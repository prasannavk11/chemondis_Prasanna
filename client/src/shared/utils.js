export const getUserDetail = (users, id) => {
  const userDetails = users && users.find((user) => user.id === id);
  return userDetails ? userDetails.name : "";
};

export const getAlbumDetail = (albums, id) => {
  const albumDetails =
    albums && albums.find((album) => album.id === parseInt(id));
  return albumDetails;
};
