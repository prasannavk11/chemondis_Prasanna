import React, { useState, useEffect, useGlobal } from "reactn";
import { getAlbums, getUsers } from "../api";
import Grid from "../components/Grid";
import Loading from "../components/Loading";
import PageSize from "../components/PageSize";
import Pagination from "../components/Pagination";

const Albums = () => {
  const [users, setUsers] = useGlobal("userList");
  const [albums, setAlbums] = useGlobal("albumList");
  const [albumPageNumber, setAlbumPageNumber] = useGlobal("albumPageNumber");
  const [albumPageSize, setAlbumPageSize] = useGlobal("albumPageSize");
  const [loading, setLoading] = useState(true);
  const [totalAlbums] = useGlobal("totalAlbums");

  const fetchAlbums = async () => {
    const responseJson = await getAlbums(
      albumPageNumber * albumPageSize,
      albumPageSize
    );

    if (responseJson.length > 0) {
      setAlbums(responseJson);
    }

    setLoading(false);
  };

  const fetchUsers = async () => {
    const responseJson = await getUsers();

    setUsers(responseJson);
  };

  useEffect(() => {
    setLoading(true);
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumPageNumber, albumPageSize]);

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserDetail = (id) => {
    const userDetails = users.find((user) => user.id === id);
    return userDetails ? userDetails.name : "";
  };

  const onChangePageSize = (e) => {
    const tmpPageSize = parseInt(e.target.textContent);
    setAlbumPageNumber(0);
    setAlbumPageSize(tmpPageSize);
  };

  const onChangePageNumber = (e) => {
    const tmpPageNumber = e.target.textContent;
    tmpPageNumber === "Next"
      ? setAlbumPageNumber(albumPageNumber + 1)
      : setAlbumPageNumber(albumPageNumber - 1);
  };

  return (
    <section className="album-grid container">
      <h1 className="my-4 text-center text-lg-left">Album Gallery</h1>
      <PageSize
        sizes={[20, 30, 50]}
        count={albumPageSize}
        onChangePageSize={(e) => onChangePageSize(e)}
        disabled={loading}
      />
      <div className="row gallery">
        {loading ? (
          <Loading />
        ) : (
          albums &&
          albums.map((album, index) => {
            const tmpData = {
              ...album,
              username: getUserDetail(album.userId),
            };
            return <Grid key={index} type="album" data={tmpData} />;
          })
        )}
      </div>
      <Pagination
        pageNumber={albumPageNumber}
        onChangePageNumber={(e) => onChangePageNumber(e)}
        disabled={loading}
        noMoreData={
          totalAlbums <= albumPageNumber * albumPageSize + albumPageSize
        }
      />
    </section>
  );
};

export default Albums;
