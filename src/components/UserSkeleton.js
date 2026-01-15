const UserSkeleton = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <div className="skeleton-row" key={i}>
        <div className="skeleton-box"></div>
        <div className="skeleton-box"></div>
        <div className="skeleton-box"></div>
        <div className="skeleton-box"></div>
      </div>
    ))}
  </>
);

export default UserSkeleton;
