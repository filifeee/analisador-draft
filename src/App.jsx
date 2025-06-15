import React, { useState } from "react";
import ChampionSelect from "./components/ChampionSelect";

export default function App() {
  const [patch, setPatch] = useState("14.11");

  // Blue Side
  const [topBlue, setTopBlue] = useState("");
  const [jgBlue, setJgBlue] = useState("");
  const [midBlue, setMidBlue] = useState("");
  const [adcBlue, setAdcBlue] = useState("");
  const [supBlue, setSupBlue] = useState("");

  // Red Side
  const [topRed, setTopRed] = useState("");
  const [jgRed, setJgRed] = useState("");
  const [midRed, setMidRed] = useState("");
  const [adcRed, setAdcRed] = useState("");
  const [supRed, setSupRed] = useState("");

  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
const todosPreenchidos = [
  topBlue, jgBlue, midBlue, adcBlue, supBlue,
  topRed, jgRed, midRed, adcRed, supRed
].every(champ => champ !== "");

if (!todosPreenchidos) {
  alert("Por favor, selecione todos os campeões antes de analisar.");
  return;
}

    setLoading(true);
    setResultado("");

    const draft = {
      patch,
      top_blue: topBlue,
      jg_blue: jgBlue,
      mid_blue: midBlue,
      adc_blue: adcBlue,
      sup_blue: supBlue,
      top_red: topRed,
      jg_red: jgRed,
      mid_red: midRed,
      adc_red: adcRed,
      sup_red: supRed,
    };

    try {
      const response = await fetch("https://us-central1-coach-lol-60e20.cloudfunctions.net/analisarDraft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });

      const data = await response.json();
      setResultado(data.analise || "Sem resposta");
    } catch (err) {
      console.error(err);
      setResultado("Erro ao gerar análise.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Analisador de Draft</h1>

      <form className="max-w-3xl mx-auto bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Patch:</label>
          <input
            type="text"
            className="w-full p-2 rounded border border-gray-300"
            value={patch}
            onChange={(e) => setPatch(e.target.value)}
          />
        </div>

        <h2 className="font-bold text-lg text-blue-600 mb-2">Time Azul</h2>
        <ChampionSelect label="Top" value={topBlue} onChange={setTopBlue} />
        <ChampionSelect label="Jungle" value={jgBlue} onChange={setJgBlue} />
        <ChampionSelect label="Mid" value={midBlue} onChange={setMidBlue} />
        <ChampionSelect label="ADC" value={adcBlue} onChange={setAdcBlue} />
        <ChampionSelect label="Suporte" value={supBlue} onChange={setSupBlue} />

        <h2 className="font-bold text-lg text-red-600 mb-2 mt-4">Time Vermelho</h2>
        <ChampionSelect label="Top" value={topRed} onChange={setTopRed} />
        <ChampionSelect label="Jungle" value={jgRed} onChange={setJgRed} />
        <ChampionSelect label="Mid" value={midRed} onChange={setMidRed} />
        <ChampionSelect label="ADC" value={adcRed} onChange={setAdcRed} />
        <ChampionSelect label="Suporte" value={supRed} onChange={setSupRed} />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold mt-4 hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? (
  <span className="flex items-center justify-center">
    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    Analisando...
  </span>
) : (
  "Analisar Draft"
)}

        </button>
      </form>

      {resultado && (
        <div className="max-w-3xl mx-auto mt-6 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2 text-lg">Resultado:</h2>
          <pre className="whitespace-pre-wrap">{resultado}</pre>
        </div>
      )}
    </div>
  );
}
