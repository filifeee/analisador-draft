import React from "react";

export default function Result({ result }) {
  if (!result || !result.best_champions || result.best_champions.length === 0) {
    return null;
  }

  const getImageUrl = (champion) =>
    `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champion}.png`;

  const best = result.best_champions[0];
  const others = result.best_champions.slice(1);

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Resultado da Análise</h2>

      <div className="text-center mb-8">
        <p className="text-lg font-medium mb-2">Melhor escolha:</p>
        <div className="inline-flex flex-col items-center">
          <img
            src={getImageUrl(best)}
            alt={best}
            className="w-24 h-24 rounded-lg shadow-lg mb-2"
          />
          <span className="text-xl font-semibold">{best}</span>
        </div>
      </div>

      {others.length > 0 && (
        <>
          <p className="text-md font-medium mb-3 text-center">Outras boas opções:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {others.map((champ) => (
              <div
                key={champ}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow w-24"
              >
                <img
                  src={getImageUrl(champ)}
                  alt={champ}
                  className="w-16 h-16 rounded mb-1"
                />
                <span className="text-sm font-medium text-center">{champ}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
