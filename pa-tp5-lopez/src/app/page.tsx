import Image from 'next/image';

const PorschePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">La Porsche 911 : Une Icône Automobile</h1>
        <p className="text-lg text-gray-600">
          Découvrez l'histoire, les modèles, et les caractéristiques de la légendaire Porsche 911.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Un peu d'histoire</h2>
        <p className="text-gray-700">
          La Porsche 911, introduite pour la première fois en 1964, est une voiture de sport emblématique qui a marqué
          l'industrie automobile. Créée par Ferdinand "Butzi" Porsche, elle est devenue une référence grâce à son
          design unique, ses performances exceptionnelles, et son moteur à l'arrière.
        </p>
        <Image
          src="/porsche.jpg" // Image principale
          alt="Porsche 911 classique"
          width={800}
          height={450}
          className="rounded-md mt-4"
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Les différents modèles</h2>
        <p className="text-gray-700">
          La Porsche 911 a connu de nombreuses évolutions au fil des décennies. L'une des versions les plus iconiques
          est la Porsche 964, introduite entre 1989 et 1994, qui marqua une étape importante dans l'histoire de la 911.
        </p>
        <Image
          src="/964.jpg" // Image de la Porsche 964
          alt="Porsche 911 Type 964"
          width={800}
          height={450}
          className="rounded-md mt-4"
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Caractéristiques marquantes</h2>
        <p className="text-gray-700">
          Depuis ses débuts, la 911 est connue pour son moteur à plat 6 cylindres (flat-six), sa traction arrière, et
          son équilibre parfait entre puissance et maniabilité. Chaque génération apporte des améliorations techniques
          tout en restant fidèle à l'esprit de la 911.
        </p>
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Porsche Enthusiasts. Cette page est dédiée à tous les passionnés de la Porsche
          911.
        </p>
      </footer>
    </div>
  );
};

export default PorschePage;
