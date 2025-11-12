import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Zap, Target, Crown, Medal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: typeof Trophy;
  category: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  unlockedDate?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    name: "First Steps",
    description: "Complete your first lesson",
    icon: Star,
    category: "Explorer",
    rarity: "Common",
    unlocked: true,
    unlockedDate: "2024-01-15"
  },
  {
    id: "2",
    name: "Vocabulary Novice",
    description: "Learn 100 new words",
    icon: Award,
    category: "Vocabulary",
    rarity: "Common",
    unlocked: true,
    progress: 100,
    maxProgress: 100,
    unlockedDate: "2024-01-20"
  },
  {
    id: "3",
    name: "Grammar Guardian",
    description: "Master all Present Tense lessons",
    icon: Trophy,
    category: "Grammar",
    rarity: "Rare",
    unlocked: true,
    unlockedDate: "2024-01-25"
  },
  {
    id: "4",
    name: "Week Warrior",
    description: "Maintain a 7-day learning streak",
    icon: Zap,
    category: "Streak",
    rarity: "Rare",
    unlocked: true,
    progress: 7,
    maxProgress: 7,
    unlockedDate: "2024-01-28"
  },
  {
    id: "5",
    name: "Perfect Score",
    description: "Get 100% accuracy in 5 consecutive quests",
    icon: Target,
    category: "Challenge",
    rarity: "Epic",
    unlocked: false,
    progress: 3,
    maxProgress: 5
  },
  {
    id: "6",
    name: "Vocabulary Master",
    description: "Learn 500 words",
    icon: Crown,
    category: "Vocabulary",
    rarity: "Epic",
    unlocked: false,
    progress: 342,
    maxProgress: 500
  },
  {
    id: "7",
    name: "Speed Learner",
    description: "Complete 10 lessons in one day",
    icon: Zap,
    category: "Challenge",
    rarity: "Rare",
    unlocked: false,
    progress: 4,
    maxProgress: 10
  },
  {
    id: "8",
    name: "Legendary Explorer",
    description: "Complete all territories",
    icon: Medal,
    category: "Explorer",
    rarity: "Legendary",
    unlocked: false,
    progress: 2,
    maxProgress: 10
  }
];

const leaderboard = [
  { rank: 1, name: "Sarah Chen", gems: 15420, level: 24 },
  { rank: 2, name: "Mike Johnson", gems: 14890, level: 23 },
  { rank: 3, name: "Emma Williams", gems: 13650, level: 22 },
  { rank: 4, name: "You", gems: 3420, level: 7 },
  { rank: 5, name: "David Lee", gems: 3200, level: 8 },
];

const Achievements = () => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-muted text-muted-foreground";
      case "Rare":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Epic":
        return "bg-accent/20 text-accent border-accent/30";
      case "Legendary":
        return "bg-primary/20 text-primary border-primary/30";
      default:
        return "bg-muted";
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Achievements</h1>
              <p className="text-muted-foreground">Your legendary accomplishments</p>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">
                  {unlockedCount}/{achievements.length}
                </p>
                <p className="text-sm text-muted-foreground">Badges Unlocked</p>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-secondary/10 to-explorer/10 border-secondary/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">
                  {achievements.filter(a => a.rarity === "Legendary" && a.unlocked).length}
                </p>
                <p className="text-sm text-muted-foreground">Legendary Badges</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">4th</p>
                <p className="text-sm text-muted-foreground">Global Rank</p>
              </div>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Badges</TabsTrigger>
            <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
            <TabsTrigger value="locked">In Progress</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <BadgeGrid achievements={achievements} getRarityColor={getRarityColor} />
          </TabsContent>

          <TabsContent value="unlocked">
            <BadgeGrid 
              achievements={achievements.filter(a => a.unlocked)} 
              getRarityColor={getRarityColor} 
            />
          </TabsContent>

          <TabsContent value="locked">
            <BadgeGrid 
              achievements={achievements.filter(a => !a.unlocked)} 
              getRarityColor={getRarityColor} 
            />
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Top Explorers This Week</h3>
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      player.name === "You"
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        player.rank === 1 ? "bg-primary text-primary-foreground" :
                        player.rank === 2 ? "bg-secondary text-secondary-foreground" :
                        player.rank === 3 ? "bg-accent text-accent-foreground" :
                        "bg-muted text-foreground"
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{player.name}</p>
                        <p className="text-sm text-muted-foreground">Level {player.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-treasure">{player.gems.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">gems</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const BadgeGrid = ({ 
  achievements, 
  getRarityColor 
}: { 
  achievements: Achievement[];
  getRarityColor: (rarity: string) => string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => {
        const Icon = achievement.icon;
        
        return (
          <Card
            key={achievement.id}
            className={`relative overflow-hidden transition-all duration-300 ${
              achievement.unlocked
                ? "hover:shadow-xl hover:-translate-y-1"
                : "opacity-75"
            }`}
          >
            <div className="p-6">
              {/* Icon & Rarity */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-4 rounded-xl ${
                  achievement.unlocked 
                    ? "bg-primary/20 animate-pulse-glow" 
                    : "bg-muted"
                }`}>
                  <Icon className={`h-8 w-8 ${
                    achievement.unlocked ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>
                <Badge className={getRarityColor(achievement.rarity)}>
                  {achievement.rarity}
                </Badge>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {achievement.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {achievement.description}
              </p>

              {/* Category */}
              <Badge variant="outline" className="mb-4">
                {achievement.category}
              </Badge>

              {/* Progress or Unlock Date */}
              {achievement.unlocked ? (
                <p className="text-xs text-muted-foreground">
                  Unlocked: {achievement.unlockedDate}
                </p>
              ) : achievement.maxProgress ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      {achievement.progress} / {achievement.maxProgress}
                    </span>
                  </div>
                  <Progress 
                    value={(achievement.progress! / achievement.maxProgress) * 100} 
                    className="h-2"
                  />
                </div>
              ) : (
                <p className="text-xs text-muted-foreground italic">Keep exploring to unlock</p>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Achievements;
