function UserTypeCard({ label, selected, onClick }) {
  return (
    <div
      className={`user-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default UserTypeCard;
