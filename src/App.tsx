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
import VideoCourses from "./pages/VideoCourses";
import CourseDetail from "./pages/CourseDetail";
import DripCourse from "./pages/DripCourse";
import CourseManagement from "./pages/CourseManagement";
import CourseEdit from "./pages/CourseEdit";
import AdminDashboard from "./pages/AdminDashboard";
import ExamManagement from "./pages/ExamManagement";
import VocabularyManagement from "./pages/VocabularyManagement";
import QuestMapManagement from "./pages/QuestMapManagement";
import ShopManagement from "./pages/ShopManagement";
import AchievementManagement from "./pages/AchievementManagement";
import TagManagement from "./pages/TagManagement";
import VocabularyHub from "./pages/VocabularyHub";
import SRSReview from "./pages/SRSReview";
import Flashcards from "./pages/Flashcards";
import QuickQuiz from "./pages/QuickQuiz";
import VocabularyCollections from "./pages/VocabularyCollections";
import VocabularyPackDetail from "./pages/VocabularyPackDetail";
import Landing from "./pages/Landing";
import CourseSalesDetail from "./pages/CourseSalesDetail";
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
                      <h2 className="text-lg font-semibold text-foreground">WordQuest 編年史</h2>
                    </div>
                  </header>
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/landing" element={<Landing />} />
                      <Route path="/sales/course/:courseId" element={<CourseSalesDetail />} />
                      <Route path="/quests" element={<Quests />} />
                      <Route path="/courses" element={<VideoCourses />} />
                      <Route path="/course/:courseId" element={<CourseDetail />} />
                      <Route path="/drip-course/:courseId" element={<DripCourse />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/course-management" element={<CourseManagement />} />
            <Route path="/admin/course-management/:courseId/edit" element={<CourseEdit />} />
            <Route path="/admin/exam-management" element={<ExamManagement />} />
            <Route path="/admin/vocabulary-management" element={<VocabularyManagement />} />
            <Route path="/admin/quest-map-management" element={<QuestMapManagement />} />
            <Route path="/admin/shop-management" element={<ShopManagement />} />
            <Route path="/admin/achievement-management" element={<AchievementManagement />} />
            <Route path="/admin/tag-management" element={<TagManagement />} />
            <Route path="/vocabulary" element={<VocabularyHub />} />
            <Route path="/vocabulary/srs" element={<SRSReview />} />
            <Route path="/vocabulary/flashcards" element={<Flashcards />} />
            <Route path="/vocabulary/quiz" element={<QuickQuiz />} />
            <Route path="/vocabulary/collections" element={<VocabularyCollections />} />
            <Route path="/vocabulary/pack/:packId" element={<VocabularyPackDetail />} />
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
