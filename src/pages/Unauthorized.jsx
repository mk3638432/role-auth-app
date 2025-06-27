export default function Unauthorized() {
  return (
    <div className="p-6 text-red-600">
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <p>You are not authorized to view this page.</p>
    </div>
  );
}
