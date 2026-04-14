import Card from "../ui/Card";

export default function ReminderPanel({ tasks }) {
  const now = new Date();

  const overdue = tasks.filter(t =>
    t.dueDate &&
    new Date(t.dueDate) < now &&
    t.status !== "completed"
  );

  const dueSoon = tasks.filter(t => {
    const diff = new Date(t.dueDate) - now;
    return diff > 0 && diff < 86400000;
  });

  return (
    <div className="grid md:grid-cols-2 gap-4">
      
      <Card>
        <h3 className="font-bold text-yellow-500 mb-2">Due Soon</h3>

        {dueSoon.length === 0 ? (
          <p className="text-muted">No urgent tasks</p>
        ) : (
          dueSoon.map(t => (
            <p key={t.id}>{t.title}</p>
          ))
        )}
      </Card>

      <Card>
        <h3 className="font-bold text-red-500 mb-2">Overdue</h3>

        {overdue.length === 0 ? (
          <p className="text-muted">All caught up</p>
        ) : (
          overdue.map(t => (
            <p key={t.id}>{t.title}</p>
          ))
        )}
      </Card>

    </div>
  );
}