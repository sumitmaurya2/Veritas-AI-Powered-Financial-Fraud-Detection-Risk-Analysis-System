import { useEffect, useState } from "react";
import api from "../services/api";

interface Prediction {
  _id: string;
  amount: number;
  prediction: string;
  riskScore: number;
  confidence: number;
  createdAt: string;
}

const History = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/predict");
      setPredictions(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="p-6">Loading...</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Prediction History</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Prediction</th>
            <th className="p-2 border">Risk Score</th>
            <th className="p-2 border">Confidence</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>

        <tbody>
          {predictions.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">₹{item.amount}</td>
              <td className="border p-2">{item.prediction}</td>
              <td className="border p-2">{item.riskScore}%</td>
              <td className="border p-2">{item.confidence}%</td>
              <td className="border p-2">
                {new Date(item.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;