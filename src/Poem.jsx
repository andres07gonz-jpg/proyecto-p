export default function Poem() {
  const verses = [
    "Formas y matices que dejas percibir,",
    "Tu vibra fluida y llena de radiación,",
    "Funciona y de alguna manera cambias mi percepción,",
    "Es algo que me hace desearte",
    "Una idea abstracta en la que el término cambia",
    "Funciona como algo más racional",
    "En mi mente moldearte es redundante",
    "No hay sombras ni contrastes",
    "Sintiendo que estás cada vez más cerca",
    "No solo como algo estacional",
    "Algo con sonido, motricidad y humor",
    "Eso es lo que yo observo como amor",
    "Intenciones que mejoran cualquier vista",
    "Tu mirada me vuelve realista",
    "Trabajar la fantasía de momentos",
    "No necesariamente perfectos."
  ];

  return (
    <div className="mt-12 text-center font-serif text-coffee/80 space-y-4">
      {verses.map((line, i) => (
        <p
          key={i}
          className="opacity-0 animate-fadeIn"
          style={{ animationDelay: `${2.5 + i * 2.5}s` }} // delay inicial + intervalo
        >
          {line}
        </p>
      ))}
    </div>
  );
}
