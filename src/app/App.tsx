import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../imports/HomePage/HomePage";
import { IVFPage } from "./pages/IVFPage";
import { IUIPage } from "./pages/IUIPage";
import { ICSIPage } from "./pages/ICSIPage";
import { EggFreezingPage } from "./pages/EggFreezingPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { PesaTesaPage } from "./pages/PesaTesaPage";
import { PGTPage } from "./pages/PGTPage";
import { DonorProgramsPage } from "./pages/DonorProgramsPage";
import { LocationsPage } from "./pages/LocationsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ToolsPage } from "./pages/ToolsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen bg-white" style={{ overflowX: "clip" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments/ivf" element={<IVFPage />} />
          <Route path="/treatments/iui" element={<IUIPage />} />
          <Route path="/treatments/icsi" element={<ICSIPage />} />
          <Route path="/treatments/egg-freezing" element={<EggFreezingPage />} />
          <Route path="/treatments/pesa-tesa" element={<PesaTesaPage />} />
          <Route path="/treatments/pgt" element={<PGTPage />} />
          <Route path="/treatments/donor-programs" element={<DonorProgramsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
