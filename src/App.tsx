import { MantineProvider } from "@mantine/core";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import Connect from "./pages/Connect";
import OAuthGoogle from "./pages/OAuthGoogle";
import OAuthMeta from "./pages/OAuthMeta";
import Report from "./pages/Report";
import Precos from "./pages/Precos";
import Contato from "./pages/Contato";
import Integracoes from "./pages/Integracoes";
import Api from "./pages/Api";
import Documentacao from "./pages/Documentacao";
import Tutoriais from "./pages/Tutoriais";
import Status from "./pages/Status";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <MantineProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/oauth/google" element={<OAuthGoogle />} />
          <Route path="/oauth/meta" element={<OAuthMeta />} />
          <Route path="/report" element={<Report />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integracoes" element={<Integracoes />} />
          <Route path="/api" element={<Api />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/tutoriais" element={<Tutoriais />} />
          <Route path="/status" element={<Status />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </MantineProvider>
);

export default App;
