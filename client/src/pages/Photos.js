import React, { useState, useEffect, useGlobal } from "reactn";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPhotos } from "../api";
import Grid from "../components/Grid";
import PageSize from "../components/PageSize";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { getUserDetail, getAlbumDetail } from "../shared/utils";

const Photos = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users] = useGlobal("userList");
  const [albums] = useGlobal("albumList");
  const [photos, setPhotos] = useState([]);
  const [photosPageNumber, setPhotosPageNumber] = useState(0);
  const [photosPageSize, setPhotosPageSize] = useState(20);
  const [loading, setLoading] = useState(true);
  const [noMoreData, setNoMoreData] = useState(false);
  const [userData, setUserData] = useState("");
  const [albumData, setAlbumData] = useState({});
  const [error, setError] = useState(false);

  const albumDetail = () => {
    const tmpAlbumDetail = getAlbumDetail(albums, id);
    return tmpAlbumDetail;
  };

  const userDetail = () => {
    const tmpAlbumDetail = albumDetail();
    const tmpUserDetail = tmpAlbumDetail
      ? getUserDetail(users, tmpAlbumDetail.userId)
      : navigate("/");
    setUserData(tmpUserDetail);
    setAlbumData(tmpAlbumDetail);
  };

  const fetchPhotos = async () => {
    const responseJson = await getPhotos(
      id,
      photosPageNumber * photosPageSize,
      photosPageSize
    );
    if (responseJson) {
      setPhotos(responseJson);
      if (responseJson.length === 0) {
        setNoMoreData(true);
      }
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setNoMoreData(false);
    setError(false);
    fetchPhotos();
    userDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photosPageNumber, photosPageSize]);

  const onChangePageSize = (e) => {
    const tmpPageSize = parseInt(e.target.textContent);
    setPhotosPageNumber(0);
    setPhotosPageSize(tmpPageSize);
  };

  const onChangePageNumber = (e) => {
    const tmpPageNumber = e.target.textContent;
    tmpPageNumber === "Next"
      ? setPhotosPageNumber(photosPageNumber + 1)
      : setPhotosPageNumber(photosPageNumber - 1);
  };

  return (
    <section className="album-grid container">
      <Link to="/"> Go home</Link>
      <h1 className="my-4 text-center text-lg-left">{albumData && albumData.title}</h1>
      <h4 className="my-4 text-center text-lg-left">{userData}</h4>
      <PageSize
        sizes={[20, 30, 50]}
        count={photosPageSize}
        onChangePageSize={(e) => onChangePageSize(e)}
        disabled={loading || error}
      />
      <div className="row gallery">
        {loading && !noMoreData ? (
          <Loading />
        ) : (
          photos &&
          photos.map((photo, index) => {
            const tmpData = {
              ...photo,
              username: userData,
            };
            return <Grid key={index} type="photos" data={tmpData} />;
          })
        )}
        {noMoreData && "No more records found"}
        {error && "Error while fetching data. Kindly reload."}
      </div>
      <Pagination
        pageNumber={photosPageNumber}
        onChangePageNumber={(e) => onChangePageNumber(e)}
        disabled={loading || error}
        noMoreData={noMoreData || error}
      />
    </section>
  );
};

export default Photos;
