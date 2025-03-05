import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import TrafficsPage from "./pages/TrafficsPage";
import ThreatPage from "./pages/ThreatPage";
import GeoPage from "./pages/GeoPage";
import UserManagementPage from "./pages/UserManagementPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Menu */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/traffics" element={<TrafficsPage />} />
            <Route path="/threats" element={<ThreatPage />} />
            <Route path="/geo" element={<GeoPage />} />

            {/* Others */}
            <Route path="/user-management" element={<UserManagementPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
