export default function Home() {
  const match = {
    home: "Arsenal",
    away: "Liverpool",
    prediction: {
      homeWin: 52,
      draw: 23,
      awayWin: 25,
    },
    insights: [
      {
        title: "Weakness Exploited",
        text: "Liverpool struggles against high pressing teams away from home.",
        confidence: 78,
      },
      {
        title: "Key Player Impact",
        text: "Saka contributes to 42% of Arsenal's attacking xG.",
        confidence: 84,
      },
      {
        title: "Tactical Mismatch",
        text: "Arsenal dominates midfield possession battles in 70% of matches.",
        confidence: 72,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {match.home} vs {match.away}
        </h1>
        <p className="text-zinc-400">AI Football Intelligence Dashboard</p>
      </div>

      {/* PREDICTION */}
      <div className="bg-zinc-900 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold mb-4">Match Prediction</h2>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-zinc-800 p-4 rounded-xl">
            <p className="text-sm text-zinc-400">Home Win</p>
            <p className="text-2xl font-bold text-green-400">
              {match.prediction.homeWin}%
            </p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <p className="text-sm text-zinc-400">Draw</p>
            <p className="text-2xl font-bold text-yellow-400">
              {match.prediction.draw}%
            </p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <p className="text-sm text-zinc-400">Away Win</p>
            <p className="text-2xl font-bold text-red-400">
              {match.prediction.awayWin}%
            </p>
          </div>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="grid md:grid-cols-3 gap-4">
        {match.insights.map((insight, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition"
          >
            <h3 className="font-semibold mb-2">{insight.title}</h3>
            <p className="text-sm text-zinc-400 mb-3">{insight.text}</p>

            <div className="text-xs text-zinc-500">
              Confidence: {insight.confidence}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
