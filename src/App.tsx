import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Quests from "./pages/Quests";
import Quest from "./pages/Quest";
import Achievements from "./pages/Achievements";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Quest page without sidebar */}
          <Route path="/quest/:lessonId" element={<Quest />} />
          
          {/* All other pages with sidebar */}
          <Route path="*" element={
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                  <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 backdrop-blur-sm bg-background/95">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-foreground">WordQuest Chronicles</h2>
                    </div>
                  </header>
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/quests" element={<Quests />} />
                      <Route path="/achievements" element={<Achievements />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
