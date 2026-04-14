import Card from "../ui/Card";

export default function StatsCard({ title, value, color = "" }) {
  return (
    <Card>
      <p className="text-muted text-sm">{title}</p>
      <h2 className={`text-xl font-bold ${color}`}>{value}</h2>
    </Card>
  );
}