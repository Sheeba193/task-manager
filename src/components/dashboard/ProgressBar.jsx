import Card from "../ui/Card";

export default function ProgressBar({ value }) {
  return (
    <Card>
      <p className="mb-2">Progress</p>

      <div className="h-3 bg-muted rounded">
        <div
          className="h-3 bg-primary"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="text-sm text-muted mt-2">
        {value}% completed
      </p>
    </Card>
  );
}