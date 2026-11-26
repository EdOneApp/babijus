export default function Loading() {
  return (
    <div
      className="page-loading"
      role="status"
      aria-label="Chargement de la page"
    >
      <span className="loading-sun">✳</span>
      <p>Un peu de soleil arrive…</p>
    </div>
  );
}
