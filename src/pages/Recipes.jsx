import { Card } from "../components/ui";

const sample = [
  { title: "Brown Butter Chocolate Chip Cookies", category: "Sweet", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484b7?auto=format&fit=crop&w=900&q=80" },
  { title: "Lemon Herb Roasted Chicken", category: "Savory", image: "https://images.unsplash.com/photo-1605478900025-2b2d6b83b9b8?auto=format&fit=crop&w=900&q=80" },
  { title: "Crispy Garlic Parmesan Potatoes", category: "Sides", image: "https://images.unsplash.com/photo-1613145993486-028a9f6b6f6a?auto=format&fit=crop&w=900&q=80" },
];

export default function RecipesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center py-12">
        <p className="text-gray-600 max-w-xl mx-auto text-lg" style={{ fontFamily: 'EB Garamond' }}>
          From my kitchen to yours — featuring sweet, savory, and side dishes for every table.
        </p>
      </section>

      <section>
        <h3 className="text-2xl text-center mb-8" style={{ fontFamily: 'EB Garamond' }}>Recent Recipes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sample.map((r, i) => (
            <Card key={i} title={r.title} category={r.category} image={r.image} />
          ))}
        </div>
      </section>
    </main>
  );
}
