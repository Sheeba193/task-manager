import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="app-layout">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* BODY */}
      <div className="app-body">

        {/* SIDEBAR */}
        <aside className="app-sidebar">
          <Sidebar />
        </aside>

        {/* MAIN CONTENT */}
        <main className="app-main">
          {children}
        </main>

      </div>

    </div>
  );
}