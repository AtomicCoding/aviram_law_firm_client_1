import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PracticeAreas from "./pages/PracticeAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Individual Practice Area Pages
import { CarAccident } from "./pages/practice-areas/CarAccident";
import { MotorcycleAccident } from "./pages/practice-areas/MotorcycleAccident";
import { TruckAccident } from "./pages/practice-areas/TruckAccident";
import { BusAccident } from "./pages/practice-areas/BusAccident";
import { DogBite } from "./pages/practice-areas/DogBite";
import { WrongfulDeath } from "./pages/practice-areas/WrongfulDeath";
import { BurnInjuries } from "./pages/practice-areas/BurnInjuries";
import { SlipAndFall } from "./pages/practice-areas/SlipAndFall";
import { ProductsLiability } from "./pages/practice-areas/ProductsLiability";
import { TraumaticBrainInjury } from "./pages/practice-areas/TraumaticBrainInjury";
import { OtherNegligence } from "./pages/practice-areas/OtherNegligence";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route
            path="/practice-areas/car-accident"
            element={<CarAccident />}
          />
          <Route
            path="/practice-areas/motorcycle-accident"
            element={<MotorcycleAccident />}
          />
          <Route
            path="/practice-areas/truck-accident"
            element={<TruckAccident />}
          />
          <Route
            path="/practice-areas/bus-accident"
            element={<BusAccident />}
          />
          <Route path="/practice-areas/dog-bite" element={<DogBite />} />
          <Route
            path="/practice-areas/wrongful-death"
            element={<WrongfulDeath />}
          />
          <Route
            path="/practice-areas/burn-injuries"
            element={<BurnInjuries />}
          />
          <Route
            path="/practice-areas/slip-and-fall"
            element={<SlipAndFall />}
          />
          <Route
            path="/practice-areas/products-liability"
            element={<ProductsLiability />}
          />
          <Route
            path="/practice-areas/traumatic-brain-injury"
            element={<TraumaticBrainInjury />}
          />
          <Route
            path="/practice-areas/other-negligence"
            element={<OtherNegligence />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
