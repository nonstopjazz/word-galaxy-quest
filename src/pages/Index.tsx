import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { 
  Compass, 
  Gem, 
  Trophy, 
  MapPin, 
  Sparkles, 
  BookOpen,
  Target,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-adventure.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  // Mock data - in real app would come from backend
  const explorerLevel = 7;
  const currentExp = 1250;
  const expToNextLevel = 2000;
  const gemsCollected = 3420;
  const badgesEarned = 12;
  const lessonsCompleted = 45;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-secondary/20" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm animate-float">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              WordQuest Chronicles
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Embark on Your
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                English Adventure
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Master English through epic quests, collect precious gems, and unlock legendary achievements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/quests")}
              >
                <Compass className="mr-2 h-5 w-5" />
                Start Your Quest
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg transition-all duration-300"
                onClick={() => navigate("/quests")}
              >
                <MapPin className="mr-2 h-5 w-5" />
                View Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Explorer Profile
            </h2>
            <p className="text-muted-foreground">Track your journey through the WordQuest world</p>
          </div>

          {/* Level Progress */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Level {explorerLevel}</h3>
                  <p className="text-sm text-muted-foreground">Vocabulary Explorer</p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary text-primary px-3 py-1">
                {Math.round((currentExp / expToNextLevel) * 100)}% to Level {explorerLevel + 1}
              </Badge>
            </div>
            <ProgressBar 
              current={currentExp}
              max={expToNextLevel}
            />
            <p className="text-sm text-muted-foreground mt-2">
              {currentExp} / {expToNextLevel} Explorer EXP
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={Gem}
              label="Gems Collected"
              value={gemsCollected.toLocaleString()}
              subtitle="Total treasure"
              variant="treasure"
            />
            <StatCard
              icon={Trophy}
              label="Badges Earned"
              value={badgesEarned}
              subtitle="Achievements unlocked"
              variant="explorer"
            />
            <StatCard
              icon={BookOpen}
              label="Lessons Completed"
              value={lessonsCompleted}
              subtitle="Knowledge quests"
            />
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8 text-center space-y-4">
            <Target className="h-12 w-12 text-accent mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Ready for Your Next Quest?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Continue your adventure and unlock new territories in the WordQuest Chronicles
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
              onClick={() => navigate("/quests")}
            >
              Continue Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Your Adventure Awaits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Explore Territories",
                  description: "Navigate through themed learning zones from ancient civilizations to modern cities"
                },
                {
                  icon: Gem,
                  title: "Collect Gems",
                  description: "Earn precious gems for completing lessons and unlock exclusive content"
                },
                {
                  icon: Trophy,
                  title: "Unlock Badges",
                  description: "Achieve milestones and earn legendary explorer badges for your profile"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
