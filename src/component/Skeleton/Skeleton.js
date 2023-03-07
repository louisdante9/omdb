import "./Skeleton.css";

export function Skeleton() {
  return (
    <div>
      <div className="poster-image-placeholder">
        <img alt="" className="skeleton" />
      </div>
      <div className="movie-details-placeholder">
        <div className="skeleton" />
        <div className="skeleton" />
      </div>
    </div>
  );
}
