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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </MantineProvider>
);

export default App;
