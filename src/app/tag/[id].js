export default function TagPage({ params }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1>Категорія: {id}</h1>
    </div>
  );
}
