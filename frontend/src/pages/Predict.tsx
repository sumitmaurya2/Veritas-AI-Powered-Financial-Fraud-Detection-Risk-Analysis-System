import { useState } from "react";
import api from "../services/api";

interface PredictionResult {
  prediction: string;
  riskScore: number;
  confidence: number;
}

const Predict = () => {
  const [formData, setFormData] = useState({
    amount: 5000,
    hour: 14,
    location: "Delhi",
    device: "Windows",
    merchant: "Shopping",
    isInternational: false,
    transactionsLast1H: 1,
    age: 25,
    monthlyIncome: 50000,
    averageTransaction: 3000,
    occupation: "Salaried",
    homeCity: "Delhi",
    usualDevice: "Windows",
  });

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/predict", formData);

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        AI Fraud Detection
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="hour"
          placeholder="Hour"
          value={formData.hour}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="monthlyIncome"
          placeholder="Monthly Income"
          value={formData.monthlyIncome}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="averageTransaction"
          placeholder="Average Transaction"
          value={formData.averageTransaction}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="transactionsLast1H"
          placeholder="Transactions Last 1 Hour"
          value={formData.transactionsLast1H}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bengaluru</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Kolkata</option>
        </select>

        <select
          name="homeCity"
          value={formData.homeCity}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bengaluru</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Kolkata</option>
        </select>

        <select
          name="device"
          value={formData.device}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Windows</option>
          <option>MacBook</option>
          <option>iPhone</option>
          <option>Unknown</option>
        </select>

        <select
          name="usualDevice"
          value={formData.usualDevice}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Windows</option>
          <option>MacBook</option>
          <option>iPhone</option>
          <option>Unknown</option>
        </select>

        <select
          name="merchant"
          value={formData.merchant}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Shopping</option>
          <option>Electronics</option>
          <option>Fuel</option>
          <option>Gaming</option>
          <option>Restaurant</option>
          <option>Travel</option>
        </select>

        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Salaried</option>
          <option>Student</option>
          <option>Freelancer</option>
          <option>Retired</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isInternational"
            checked={formData.isInternational}
            onChange={handleChange}
          />
          International Transaction
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-3"
        >
          {loading ? "Predicting..." : "Predict Fraud"}
        </button>
      </form>

      {result && (
        <div className="mt-8 border rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">
            Prediction Result
          </h2>

          <p>
            <strong>Prediction:</strong> {result.prediction}
          </p>

          <p>
            <strong>Risk Score:</strong> {result.riskScore}%
          </p>

          <p>
            <strong>Confidence:</strong> {result.confidence}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Predict;