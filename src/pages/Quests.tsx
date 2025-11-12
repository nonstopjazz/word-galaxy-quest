import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, MapPin, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Territory {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  totalLessons: number;
  completedLessons: number;
  isLocked: boolean;
  category: string;
}

const territories: Territory[] = [
  {
    id: "1",
    name: "Present Tense Forest",
    description: "Master the basics of present simple and continuous tenses",
    difficulty: "Beginner",
    totalLessons: 12,
    completedLessons: 8,
    isLocked: false,
    category: "Grammar"
  },
  {
    id: "2",
    name: "Vocabulary Valley",
    description: "Explore essential daily vocabulary and common phrases",
    difficulty: "Beginner",
    totalLessons: 15,
    completedLessons: 15,
    isLocked: false,
    category: "Vocabulary"
  },
  {
    id: "3",
    name: "Past Tense Plains",
    description: "Journey through simple past and past continuous",
    difficulty: "Intermediate",
    totalLessons: 10,
    completedLessons: 3,
    isLocked: false,
    category: "Grammar"
  },
  {
    id: "4",
    name: "Idiom Ruins",
    description: "Uncover the mysteries of English idioms and expressions",
    difficulty: "Intermediate",
    totalLessons: 20,
    completedLessons: 0,
    isLocked: false,
    category: "Vocabulary"
  },
  {
    id: "5",
    name: "Conditional Canyon",
    description: "Navigate through first, second, and third conditionals",
    difficulty: "Advanced",
    totalLessons: 8,
    completedLessons: 0,
    isLocked: true,
    category: "Grammar"
  },
  {
    id: "6",
    name: "Phrasal Verb Peak",
    description: "Climb to mastery of essential phrasal verbs",
    difficulty: "Advanced",
    totalLessons: 18,
    completedLessons: 0,
    isLocked: true,
    category: "Vocabulary"
  }
];

const Quests = () => {
  const navigate = useNavigate();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Intermediate":
        return "bg-accent/20 text-accent border-accent/30";
      case "Advanced":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Quest Map</h1>
              <p className="text-muted-foreground">Choose your next adventure</p>
            </div>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">All Territories</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Grammar</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Vocabulary</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Beginner</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Intermediate</Badge>
        </div>

        {/* Territories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {territories.map((territory) => {
            const progress = (territory.completedLessons / territory.totalLessons) * 100;
            const isComplete = territory.completedLessons === territory.totalLessons;

            return (
              <Card
                key={territory.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  territory.isLocked
                    ? "opacity-60"
                    : "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                }`}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="text-xs">
                    {territory.category}
                  </Badge>
                </div>

                {/* Locked Overlay */}
                {territory.isLocked && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground font-medium">
                        Complete previous territories to unlock
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      {isComplete && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                      {territory.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{territory.description}</p>
                  </div>

                  {/* Difficulty Badge */}
                  <Badge className={`${getDifficultyColor(territory.difficulty)} mb-4`}>
                    {territory.difficulty}
                  </Badge>

                  {/* Progress */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">
                        {territory.completedLessons} / {territory.totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full"
                    variant={isComplete ? "outline" : "default"}
                    disabled={territory.isLocked}
                    onClick={() => !territory.isLocked && navigate(`/quest/${territory.id}`)}
                  >
                    {territory.isLocked ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Locked
                      </>
                    ) : isComplete ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Review
                      </>
                    ) : territory.completedLessons > 0 ? (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Continue
                      </>
                    ) : (
                      <>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Start Quest
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quests;
