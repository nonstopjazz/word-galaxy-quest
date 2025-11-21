import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, Brain, Target, Award, Shield, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-adventure.jpg";

const courses = [
  {
    id: 1,
    title: "TOEIC 金色證書攻略",
    description: "從基礎到進階，系統化學習 TOEIC 考試技巧，助你快速突破 900 分大關。",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop",
    highlight: "12週衝刺計畫 • AI模擬考 • 個人化弱點分析"
  },
  {
    id: 2,
    title: "學測英文滿級分特訓",
    description: "針對學測命題趨勢，強化閱讀理解與寫作能力，讓你在考場上游刃有餘。",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    highlight: "歷屆試題解析 • 寫作批改 • 考前衝刺班"
  },
  {
    id: 3,
    title: "商業英文實戰課程",
    description: "掌握職場必備英文技能，從郵件撰寫到簡報表達，提升你的職場競爭力。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    highlight: "真實商業情境 • 外師指導 • 證書認證"
  },
  {
    id: 4,
    title: "文法基礎建構班",
    description: "系統化學習英文文法，從零開始建立紮實基礎，讓你不再害怕英文。",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    highlight: "動畫教學 • 互動練習 • 即時解答"
  },
  {
    id: 5,
    title: "英文閱讀理解特訓",
    description: "提升閱讀速度與理解能力，掌握各類文章的閱讀技巧與答題策略。",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
    highlight: "多元文本 • 速讀訓練 • 批判思考"
  },
  {
    id: 6,
    title: "英文聽力訓練營",
    description: "透過大量真實語料訓練聽力，從基礎到進階，讓你聽懂各種口音。",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&auto=format&fit=crop",
    highlight: "多國口音 • 情境對話 • 聽寫練習"
  }
];

const testimonials = [
  {
    name: "王小明",
    role: "TOEIC 金色證書學員",
    content: "跟著老師的課程學習三個月，TOEIC 成績從 650 進步到 920 分！課程設計很系統化，AI 批改功能讓我隨時知道自己的弱點在哪裡。",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop"
    ]
  },
  {
    name: "李佳穎",
    role: "學測英文滿級分",
    content: "從高二開始上課，學測英文拿到 15 級分！老師的寫作批改很細心，每次都能指出我的盲點。課程內容緊扣考試趨勢，真的很有幫助。",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop"
    ]
  },
  {
    name: "陳建宏",
    role: "商業英文學員",
    content: "上完商業英文課程後，現在寫英文郵件和做簡報都很有信心。老師教的實戰技巧在工作上立刻就能用到，同事都說我的英文進步很多。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop"
    ]
  },
  {
    name: "張雅婷",
    role: "文法基礎班學員",
    content: "以前對英文文法完全沒概念，上了老師的課後終於搞懂了！動畫教學很生動，練習題也很豐富，現在看到英文不會害怕了。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&auto=format&fit=crop"
    ]
  }
];

const features = [
  {
    icon: Brain,
    title: "AI 智能批改",
    description: "即時批改作文，精準指出文法、用字、結構問題"
  },
  {
    icon: Target,
    title: "個人化弱點分析",
    description: "系統自動分析學習數據，針對弱點提供客製化練習"
  },
  {
    icon: BookOpen,
    title: "完整課程地圖",
    description: "Grammar、Reading、TOEIC、學測全方位涵蓋"
  },
  {
    icon: Award,
    title: "資深師資團隊",
    description: "15年以上教學經驗，幫助超過10,000名學生達成目標"
  }
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            突破英文學習瓶頸
            <br />
            <span className="text-primary">讓分數說話</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI 智能輔助 × 資深師資團隊 × 個人化學習路徑，助你快速達成英文學習目標
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 hover-scale">
              立即報名
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
              觀看課程介紹影片
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">精選課程</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              從基礎到進階，從考試到實用，滿足你的各種學習需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {course.highlight}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>
                  <Button 
                    className="w-full"
                    onClick={() => navigate(`/sales/course/${course.id}`)}
                  >
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">學生見證</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              他們的成功，就是我們最大的驕傲
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-2 border-primary/20 shadow-xl">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="flex-shrink-0">
                            <img 
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                            />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground">{testimonial.name}</h3>
                              <p className="text-primary font-medium">{testimonial.role}</p>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              "{testimonial.content}"
                            </p>
                            {testimonial.images.length > 0 && (
                              <div className="flex gap-4 pt-4">
                                {testimonial.images.map((img, imgIndex) => (
                                  <img 
                                    key={imgIndex}
                                    src={img}
                                    alt={`證明 ${imgIndex + 1}`}
                                    className="w-32 h-32 object-cover rounded-lg border-2 border-border hover:scale-105 transition-transform"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">課程特色</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              科技與教學完美結合，打造最有效的學習體驗
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop"
                      alt="資深英文教師"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/30"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">林老師</h3>
                    <p className="text-primary font-medium mb-4">首席英文講師 • 15年教學經驗</p>
                    <p className="text-muted-foreground leading-relaxed">
                      畢業於美國哥倫比亞大學英語教學碩士，擁有 TESOL 國際教學證照。
                      曾任知名補習班首席講師，幫助超過 10,000 名學生成功達成英文學習目標。
                      專精 TOEIC、學測、商業英文等各類考試教學。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              準備好開始你的英文學習之旅了嗎？
            </h2>
            <p className="text-xl text-muted-foreground">
              立即加入我們，體驗最有效的英文學習方式
            </p>
            <Button size="lg" className="text-xl px-12 py-8 hover-scale">
              立即報名課程
            </Button>
            <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>七天無條件退款</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>免費試聽體驗</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>滿意度保證</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">課程總覽</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">TOEIC 課程</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">學測課程</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">商業英文</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">文法課程</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">學習資源</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">免費試聽</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">學習部落格</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">常見問題</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">學習社群</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">關於我們</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">師資介紹</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">學生見證</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">聯絡我們</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">隱私政策</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">聯絡資訊</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-muted-foreground">Email: contact@english-course.com</li>
                <li className="text-muted-foreground">電話: (02) 1234-5678</li>
                <li className="text-muted-foreground">地址: 台北市信義區信義路五段7號</li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 English Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}