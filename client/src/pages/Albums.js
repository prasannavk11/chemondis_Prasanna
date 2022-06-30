import React, { useState, useEffect, useGlobal } from "reactn";
import { getAlbums, getUsers } from "../api";
import Grid from "../components/Grid";
import Loading from "../components/Loading";
import PageSize from "../components/PageSize";
import Pagination from "../components/Pagination";
import { getUserDetail } from "../shared/utils";

const Albums = () => {
  const [users, setUsers] = useGlobal("userList");
  const [albums, setAlbums] = useGlobal("albumList");
  const [albumPageNumber, setAlbumPageNumber] = useGlobal("albumPageNumber");
  const [albumPageSize, setAlbumPageSize] = useGlobal("albumPageSize");
  const [loading, setLoading] = useState(true);
  const [noMoreData, setNoMoreData] = useState(false);
  const [error, setError] = useState(false);

  const fetchAlbums = async () => {
    const responseJson = await getAlbums(
      albumPageNumber * albumPageSize,
      albumPageSize
    );

    if (responseJson) {
      if (responseJson.length === 0) {
        setNoMoreData(true);
      }
      setAlbums(responseJson);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  const fetchUsers = async () => {
    const responseJson = await getUsers();
    setUsers(responseJson);
  };

  useEffect(() => {
    setLoading(true);
    setNoMoreData(false);
    setError(false);
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumPageNumber, albumPageSize]);

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h1 className="my-4 text-center text-lg-left">Albums</h1>
      <PageSize
        sizes={[20, 30, 50]}
        count={albumPageSize}
        onChangePageSize={(e) => onChangePageSize(e)}
        disabled={loading || error}
      />
      <div className="row gallery">
        {loading ? (
          <Loading />
        ) : (
          albums &&
          albums.map((album, index) => {
            const tmpData = {
              ...album,
              username: getUserDetail(users, album.userId),
            };
            return <Grid key={index} type="album" data={tmpData} />;
          })
        )}
        {noMoreData && "No more records found"}
        {error && "Error while fetching data. Kindly reload."}
      </div>
      <Pagination
        pageNumber={albumPageNumber}
        onChangePageNumber={(e) => onChangePageNumber(e)}
        disabled={loading || error}
        noMoreData={noMoreData || error}
      />
    </section>
  );
};

export default Albums;
