import React from "react";

const champions = [
  "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios",
  "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum",
  "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana",
  "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks",
  "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves",
  "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
  "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "KSante", "Kaisa", "Kalista",
  "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen",
  "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona",
  "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar",
  "Maokai", "MasterYi", "Milio", "MissFortune", "Mordekaiser", "Morgana",
  "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne",
  "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke",
  "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renata",
  "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna",
  "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir",
  "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench",
  "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
  "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne",
  "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear",
  "Warwick", "MonkeyKing", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick",
  "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
];

export default function ChampionSelect({ label, value, onChange }) {
  const getImageUrl = (champion) =>
    `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champion}.png`;

  return (
    <div className="mb-3">
      <label className="block mb-1 font-semibold text-sm">{label}</label>
      <select
        className="w-full p-2 rounded border border-gray-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione</option>
        {champions.map((champion) => (
          <option key={champion} value={champion}>
            {champion}
          </option>
        ))}
      </select>

      {value && (
        <div className="mt-2 flex items-center">
          <img
            src={getImageUrl(value)}
            alt={value}
            className="w-12 h-12 mr-2 rounded"
          />
          <span className="font-medium">{value}</span>
        </div>
      )}
    </div>
  );
}
