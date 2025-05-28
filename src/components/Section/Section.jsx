export default function Section({ title, children }) {
  return (
    <section id={title.replace(/\s+/g, "-").toLowerCase()}>
      {title && (
        <div>
          <h2>{title}</h2>
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
