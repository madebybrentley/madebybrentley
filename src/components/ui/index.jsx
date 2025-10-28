export function Card({ title, category, image }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <p className="text-sm text-softblue mb-1 font-medium" style={{ fontFamily: 'EB Garamond' }}>{category}</p>
        <h4 className="text-xl font-semibold" style={{ fontFamily: 'EB Garamond' }}>{title}</h4>
        <a href="#" className="inline-block mt-2 text-butter hover:text-softblue" style={{ fontFamily: 'EB Garamond' }}>View Recipe →</a>
      </div>
    </article>
  );
}
