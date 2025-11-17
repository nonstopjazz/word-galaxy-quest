import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { 
  BookOpen, 
  Brain, 
  Zap, 
  FlipVertical2,
  TrendingUp,
  Target,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Heart,
  BookmarkPlus,
  Tag,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VocabularyHub = () => {
  const navigate = useNavigate();
  const [todayReviewCount] = useState(47);
  const [masteryLevel] = useState(68);
  const [weeklyProgress] = useState(85);
  const [errorRate] = useState(23);
  
  // 来自社群的单字集
  const [collectedPacks, setCollectedPacks] = useState<string[]>(["1"]);
  const [communityPacks] = useState([
    {
      id: "1",
      title: "全球暖化",
      theme: "環境議題",
      description: "探討全球暖化相關的核心詞彙，涵蓋氣候變遷、溫室效應、碳排放等概念",
      wordCount: 15,
      source: "環境教育社群",
      difficulty: "中高級",
      previewWords: ["greenhouse effect", "carbon footprint", "sustainable"]
    },
    {
      id: "2",
      title: "少子化",
      theme: "社會議題",
      description: "討論少子化現象的相關詞彙，涵蓋人口統計、生育率、社會福利等面向",
      wordCount: 12,
      source: "社會學習社群",
      difficulty: "中級",
      previewWords: ["birth rate", "fertility", "demographic"]
    },
    {
      id: "3",
      title: "垃圾問題",
      theme: "環境議題",
      description: "聚焦於垃圾處理與環境保護的核心詞彙，包含回收、減廢、循環經濟等概念",
      wordCount: 10,
      source: "環保行動聯盟",
      difficulty: "中級",
      previewWords: ["recycling", "landfill", "biodegradable"]
    }
  ]);

  const toggleCollectPack = (packId: string) => {
    setCollectedPacks(prev => 
      prev.includes(packId) 
        ? prev.filter(id => id !== packId)
        : [...prev, packId]
    );
  };

  const modes = [
    {
      id: "srs",
      title: "SRS 智慧複習",
      description: "根據記憶曲線自動排程，最高效的複習方式",
      icon: Brain,
      color: "from-primary/20 to-accent/20",
      iconColor: "text-primary",
      badge: "推薦",
      badgeVariant: "default" as const,
      count: 24,
      countLabel: "今日待複習",
      path: "/vocabulary/srs"
    },
    {
      id: "flashcards",
      title: "翻轉卡片",
      description: "快速瀏覽與記憶，支援手勢操作",
      icon: FlipVertical2,
      color: "from-secondary/20 to-explorer/20",
      iconColor: "text-secondary",
      badge: "熱門",
      badgeVariant: "secondary" as const,
      count: 156,
      countLabel: "複習池總數",
      path: "/vocabulary/flashcards"
    },
    {
      id: "quick-quiz",
      title: "快速測驗",
      description: "限時選擇題，測試即時反應能力",
      icon: Zap,
      color: "from-accent/20 to-treasure/20",
      iconColor: "text-accent",
      badge: "新",
      badgeVariant: "outline" as const,
      count: 10,
      countLabel: "題 / 回合",
      path: "/vocabulary/quiz"
    }
  ];

  const recommendedPacks = [
    {
      id: "1",
      title: "TOEIC 商務核心 500",
      level: "中級",
      words: 500,
      price: 200,
      theme: "商務英語"
    },
    {
      id: "2",
      title: "高中必考字根家族",
      level: "初級",
      words: 300,
      price: 150,
      theme: "字根字首"
    },
    {
      id: "3",
      title: "學測高頻動詞片語",
      level: "中高級",
      words: 250,
      price: 180,
      theme: "片語搭配"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">單字複習中心</h1>
              <p className="text-muted-foreground">選擇你的複習模式，開始今天的學習</p>
            </div>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">今日目標</h3>
              </div>
              <Badge variant="default">進行中</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{todayReviewCount}</span>
                <span className="text-muted-foreground">個單字待複習</span>
              </div>
              <ProgressBar current={todayReviewCount - 18} max={todayReviewCount} showValues={false} />
              <p className="text-sm text-muted-foreground">已完成 {todayReviewCount - 18} / {todayReviewCount}</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-explorer/10 border-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <h3 className="font-semibold text-foreground">整體熟練度</h3>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{masteryLevel}%</span>
                <span className="text-sm text-muted-foreground">熟練</span>
              </div>
              <ProgressBar current={masteryLevel} max={100} showValues={false} />
              <p className="text-sm text-muted-foreground">累計掌握 856 個單字</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-treasure/10 border-accent/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">本週進度</h3>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{weeklyProgress}%</span>
                <span className="text-sm text-success">+12%</span>
              </div>
              <ProgressBar current={weeklyProgress} max={100} showValues={false} />
              <p className="text-sm text-muted-foreground">本週複習 432 次</p>
            </div>
          </Card>
        </div>

        {/* Mode Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            選擇複習模式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modes.map((mode) => {
              const Icon = mode.icon;
              return (
                <Card
                  key={mode.id}
                  className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-50`} />
                  
                  <div className="relative p-6">
                    {mode.badge && (
                      <div className="absolute top-4 right-4">
                        <Badge variant={mode.badgeVariant}>{mode.badge}</Badge>
                      </div>
                    )}

                    <div className="mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-8 w-8 ${mode.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{mode.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{mode.description}</p>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-foreground">{mode.count}</div>
                        <div className="text-xs text-muted-foreground">{mode.countLabel}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>

                    <Button 
                      className="w-full" 
                      variant="default"
                      onClick={() => navigate(mode.path)}
                    >
                      開始複習
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Error Stats */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Target className="h-5 w-5 text-destructive" />
                錯題統計
              </h3>
              <Button variant="ghost" size="sm">查看全部</Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm text-foreground">本週錯誤率</span>
                <span className="text-lg font-bold text-destructive">{errorRate}%</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">最常錯誤類型</span>
                  <span className="text-foreground font-medium">動詞時態</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">需加強單字</span>
                  <span className="text-foreground font-medium">34 個</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">連續答對紀錄</span>
                  <span className="text-success font-medium">18 題</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Weekly Progress Detail */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                本週學習時間
              </h3>
              <Button variant="ghost" size="sm">詳細記錄</Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm text-foreground">累計學習時間</span>
                <span className="text-lg font-bold text-primary">5.2 小時</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">單字複習次數</span>
                  <span className="text-foreground font-medium">432 次</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">新學單字數</span>
                  <span className="text-foreground font-medium">67 個</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">連續學習天數</span>
                  <span className="text-success font-medium">12 天 🔥</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Community Vocabulary Packs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Heart className="h-6 w-6 text-destructive" />
                來自社群的單字集
              </h2>
              <p className="text-sm text-muted-foreground mt-1">探索熱門主題的單字集合，一次收藏整套學習</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/vocabulary/collections')}>
              查看我的收藏
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Vocabulary Pack Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPacks.map((pack) => {
              const isCollected = collectedPacks.includes(pack.id);
              
              return (
                <Card 
                  key={pack.id}
                  className="relative overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  onClick={() => navigate(`/vocabulary/pack/${pack.id}`)}
                >
                  {/* Collected Badge */}
                  {isCollected && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="default" className="bg-success gap-1">
                        <CheckCircle className="h-3 w-3" />
                        已收藏
                      </Badge>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {pack.theme}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">{pack.difficulty}</Badge>
                    </div>

                    {/* Pack Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pack.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{pack.description}</p>
                    </div>

                    {/* Word Count */}
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 border-l-4 border-primary">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground font-medium">包含單字</span>
                        <span className="text-2xl font-bold text-primary">{pack.wordCount}</span>
                      </div>
                    </div>

                    {/* Preview Words */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">預覽單字：</p>
                      <div className="flex flex-wrap gap-1">
                        {pack.previewWords.map((word, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {word}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Source */}
                    <p className="text-xs text-muted-foreground mb-4">{pack.source}</p>

                    {/* Action Button */}
                    <Button 
                      className="w-full"
                      variant={isCollected ? "secondary" : "default"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCollectPack(pack.id);
                      }}
                    >
                      {isCollected ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          已收藏
                        </>
                      ) : (
                        <>
                          <BookmarkPlus className="h-4 w-4 mr-2" />
                          收藏單字集
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Collected Packs Summary */}
          {collectedPacks.length > 0 && (
            <Card className="mt-6 p-6 bg-gradient-to-br from-success/10 to-primary/10 border-success/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/20">
                    <BookmarkPlus className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">你已收藏 {collectedPacks.length} 個單字集</h4>
                    <p className="text-sm text-muted-foreground">這些單字已加入你的複習池，開始複習吧！</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => navigate('/vocabulary/collections')}>
                    管理收藏
                  </Button>
                  <Button onClick={() => navigate('/vocabulary/srs')}>
                    開始複習
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Recommended Packs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-treasure" />
              推薦單字包
            </h2>
            <Button variant="ghost" className="gap-2">
              前往商店 <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedPacks.map((pack) => (
              <Card
                key={pack.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">{pack.theme}</Badge>
                    <Badge variant="secondary">{pack.level}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">{pack.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{pack.words} 個單字</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-5 w-5 text-treasure" />
                      <span className="text-xl font-bold text-foreground">{pack.price}</span>
                    </div>
                    <Button size="sm" variant="default">
                      立即購買
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyHub;
