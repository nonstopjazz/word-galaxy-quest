import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, BarChart, CheckCircle, Shield } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

// 模擬課程數據
const coursesData: Record<string, any> = {
  "1": {
    id: 1,
    title: "TOEIC 金色證書攻略",
    subtitle: "從基礎到進階，系統化學習 TOEIC 考試技巧",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop",
    price: "NT$ 12,800",
    originalPrice: "NT$ 16,800",
    duration: "12 週",
    students: "3,200+",
    level: "初級到高級",
    description: `本課程專為想要在 TOEIC 考試中取得高分的學習者設計。透過系統化的教學方式，從聽力、閱讀、文法到答題技巧，全方位提升你的英文能力。

課程採用最新的 TOEIC 考試趨勢分析，結合 AI 智能批改系統，即時追蹤學習進度，精準分析弱點。每週提供模擬測驗，讓你在實戰中累積經驗，最終突破 900 分大關。

無論你是初學者還是想要突破瓶頸的進階學習者，這門課程都能幫助你達成目標。`,
    outline: [
      {
        title: "第一階段：基礎建立（Week 1-3）",
        topics: [
          "TOEIC 考試介紹與題型解析",
          "基礎文法重點複習",
          "聽力基礎訓練",
          "閱讀技巧入門",
          "單字記憶法"
        ]
      },
      {
        title: "第二階段：技巧強化（Week 4-7）",
        topics: [
          "聽力進階技巧與實戰演練",
          "閱讀速度提升訓練",
          "文法深度解析",
          "商業情境單字擴充",
          "模擬考試與檢討"
        ]
      },
      {
        title: "第三階段：實戰衝刺（Week 8-10）",
        topics: [
          "完整模擬考試（含批改）",
          "弱點分析與加強",
          "高分答題策略",
          "時間管理技巧",
          "考前心理準備"
        ]
      },
      {
        title: "第四階段：考前衝刺（Week 11-12）",
        topics: [
          "最新題型分析",
          "考場實戰模擬",
          "錯誤題型總複習",
          "考試當天注意事項",
          "考後成績追蹤輔導"
        ]
      }
    ],
    suitableFor: [
      "想要考取 TOEIC 金色證書（860分以上）的學習者",
      "需要英文證明申請學校或工作的上班族、學生",
      "想要系統化提升英文聽力與閱讀能力的人",
      "曾經考過 TOEIC 但想突破瓶頸的學習者",
      "需要在短時間內快速提升分數的考生"
    ],
    faqs: [
      {
        question: "這門課程適合完全沒有 TOEIC 基礎的人嗎？",
        answer: "適合！課程從基礎開始教起，會先幫你建立必要的文法和單字基礎，再逐步提升到考試技巧的層次。"
      },
      {
        question: "上課方式是什麼？",
        answer: "採用線上影片課程搭配每週直播 Q&A，你可以依照自己的時間安排學習進度。所有課程影片都可以無限次重複觀看。"
      },
      {
        question: "真的能在 12 週內提升到 900 分嗎？",
        answer: "根據我們的統計，認真完成所有課程內容和作業的學生，平均提升 200-300 分。實際成效因個人基礎和投入時間而異。"
      },
      {
        question: "如果上課後覺得不適合，可以退費嗎？",
        answer: "可以！我們提供七天無條件退款保證。如果在購課後七天內覺得課程不符合期待，可以申請全額退費。"
      },
      {
        question: "課程結束後還能繼續觀看嗎？",
        answer: "可以！購買課程後享有永久觀看權，你可以隨時回來複習。"
      }
    ]
  },
  "2": {
    id: 2,
    title: "學測英文滿級分特訓",
    subtitle: "針對學測命題趨勢，強化閱讀理解與寫作能力",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop",
    price: "NT$ 9,800",
    originalPrice: "NT$ 13,800",
    duration: "16 週",
    students: "5,600+",
    level: "高中程度",
    description: `本課程完全針對大學學測英文科設計，涵蓋所有題型與答題技巧。從單字題、綜合測驗、文意選填到閱讀測驗，每個部分都有詳細的解題策略。

特別加強寫作訓練，包含中譯英和英文作文。每週提供寫作練習並由老師親自批改，確保你能寫出高分作文。

課程使用歷屆試題進行實戰演練，讓你熟悉考試節奏，考場上不慌張。`,
    outline: [
      {
        title: "第一階段：基礎鞏固（Week 1-4）",
        topics: [
          "學測英文考試架構解析",
          "必考單字 2000 字",
          "基礎文法總複習",
          "句型結構分析",
          "閱讀理解入門"
        ]
      },
      {
        title: "第二階段：題型攻略（Week 5-10）",
        topics: [
          "單字題解題技巧",
          "綜合測驗（克漏字）策略",
          "文意選填答題方法",
          "閱讀測驗快速定位法",
          "歷屆試題演練"
        ]
      },
      {
        title: "第三階段：寫作特訓（Week 11-14）",
        topics: [
          "中譯英翻譯技巧",
          "常見錯誤句型修正",
          "英文作文架構",
          "看圖寫作訓練",
          "主題作文練習"
        ]
      },
      {
        title: "第四階段：考前衝刺（Week 15-16）",
        topics: [
          "完整模擬考",
          "考古題總複習",
          "寫作最終修正",
          "考試時間分配",
          "心理建設與應考技巧"
        ]
      }
    ],
    suitableFor: [
      "準備大學學測的高中生",
      "想要在學測英文科拿到滿級分（15級分）的學生",
      "英文基礎不錯但想更上一層樓的人",
      "寫作能力需要加強的學生",
      "想要有系統地複習高中英文的學習者"
    ],
    faqs: [
      {
        question: "我現在高二，適合現在就開始上課嗎？",
        answer: "非常適合！提早開始準備可以打好基礎，有更充裕的時間練習和複習。高二開始上課的學生成效通常最好。"
      },
      {
        question: "課程會提供寫作批改嗎？",
        answer: "會！每週都有寫作作業，老師會親自批改並給予詳細回饋。這是課程最大的特色之一。"
      },
      {
        question: "如果跟不上進度怎麼辦？",
        answer: "別擔心！課程影片可以重複觀看，你可以依照自己的節奏學習。如果有問題也可以在討論區發問或參加直播 Q&A。"
      },
      {
        question: "課程有提供歷屆試題嗎？",
        answer: "有！課程包含近十年的歷屆試題解析，讓你充分了解考試趨勢和題型變化。"
      },
      {
        question: "購課後什麼時候可以開始上課？",
        answer: "立即！購課後馬上就能開始觀看所有課程內容，不需要等開課日期。"
      }
    ]
  },
  "3": {
    id: 3,
    title: "商業英文實戰課程",
    subtitle: "掌握職場必備英文技能，提升你的職場競爭力",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
    price: "NT$ 10,800",
    originalPrice: "NT$ 14,800",
    duration: "10 週",
    students: "2,800+",
    level: "中級到高級",
    description: `在全球化的職場環境中，商業英文能力是必備技能。本課程涵蓋職場上最常用的英文情境，從電子郵件撰寫到會議簡報，讓你在工作中自信使用英文。

課程使用真實的商業案例，教你如何撰寫專業的商業信件、進行有效的電話溝通、主持和參與會議，以及製作專業的英文簡報。

特別適合需要在工作中使用英文的上班族、想要轉職到外商公司的求職者，或是即將進入職場的新鮮人。`,
    outline: [
      {
        title: "第一階段：商業溝通基礎（Week 1-3）",
        topics: [
          "商業英文常用詞彙",
          "正式與非正式語氣的區別",
          "Email 寫作基礎",
          "電話溝通技巧",
          "自我介紹與社交英文"
        ]
      },
      {
        title: "第二階段：書面溝通（Week 4-6）",
        topics: [
          "商業信件架構",
          "提案撰寫技巧",
          "報告寫作",
          "合約與協議書閱讀",
          "商業文件範本應用"
        ]
      },
      {
        title: "第三階段：口語表達（Week 7-9）",
        topics: [
          "會議英文",
          "簡報技巧與表達",
          "談判用語",
          "跨文化溝通",
          "商務社交場合應對"
        ]
      },
      {
        title: "第四階段：綜合實戰（Week 10）",
        topics: [
          "完整商業情境模擬",
          "案例分析與討論",
          "個人商業簡報實作",
          "求職面試英文",
          "職場文化與禮儀"
        ]
      }
    ],
    suitableFor: [
      "需要在工作中使用英文的上班族",
      "想要轉職到外商公司的求職者",
      "即將進入職場的大學畢業生",
      "需要與國外客戶或同事溝通的人",
      "想要提升職場競爭力的專業人士"
    ],
    faqs: [
      {
        question: "我的英文程度普通，適合上這門課嗎？",
        answer: "適合！只要有中級以上的英文基礎（大約高中程度）就可以學習。課程會從基礎的商業用語開始教起。"
      },
      {
        question: "課程有提供商業英文的範本嗎？",
        answer: "有！課程包含超過 50 個常用的商業文件範本，包括 Email、提案、報告等，你可以直接套用在工作上。"
      },
      {
        question: "會有實際的商業情境練習嗎？",
        answer: "會！每週都有實戰作業，老師會批改並給予回饋。課程結束前還會有完整的情境模擬演練。"
      },
      {
        question: "這門課和多益課程有什麼不同？",
        answer: "多益課程著重考試技巧和分數提升，而商業英文課程專注在實際職場應用，兩者的學習目標不同。"
      },
      {
        question: "完成課程後會有證書嗎？",
        answer: "會！完成所有課程內容和作業後，會頒發結業證書，可以放在履歷或 LinkedIn 上。"
      }
    ]
  },
  "4": {
    id: 4,
    title: "文法基礎建構班",
    subtitle: "系統化學習英文文法，建立紮實基礎",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop",
    price: "NT$ 7,800",
    originalPrice: "NT$ 10,800",
    duration: "8 週",
    students: "4,500+",
    level: "初級到中級",
    description: `英文文法是學習英文的基礎，本課程用最簡單易懂的方式，帶你系統化學習所有重要的文法概念。

從最基礎的句型結構開始，逐步深入到時態、語態、假設語氣等進階文法。每個概念都搭配豐富的例句和練習題，確保你真正理解並能靈活運用。

特別適合文法基礎薄弱、想要重新打好基礎的學習者。`,
    outline: [
      {
        title: "第一階段：句型基礎（Week 1-2）",
        topics: [
          "五大句型結構",
          "詞性與詞類",
          "主詞與動詞的搭配",
          "基礎句型練習",
          "常見錯誤修正"
        ]
      },
      {
        title: "第二階段：時態掌握（Week 3-5）",
        topics: [
          "現在式時態",
          "過去式時態",
          "未來式時態",
          "完成式時態",
          "時態綜合運用"
        ]
      },
      {
        title: "第三階段：進階文法（Week 6-7）",
        topics: [
          "被動語態",
          "假設語氣",
          "間接問句",
          "關係子句",
          "分詞構句"
        ]
      },
      {
        title: "第四階段：實戰應用（Week 8）",
        topics: [
          "文法在閱讀中的應用",
          "文法在寫作中的應用",
          "常見文法陷阱",
          "綜合練習",
          "總複習"
        ]
      }
    ],
    suitableFor: [
      "英文文法基礎薄弱的學習者",
      "想要重新打好文法基礎的人",
      "準備各類英文考試的學生",
      "需要提升寫作能力的人",
      "想要系統化學習文法的初學者"
    ],
    faqs: [
      {
        question: "完全沒有文法基礎可以學嗎？",
        answer: "可以！課程從最基礎的概念開始教起，就算是零基礎也能輕鬆跟上。"
      },
      {
        question: "課程會很枯燥嗎？",
        answer: "不會！我們使用動畫教學和互動練習，讓文法學習變得有趣又容易理解。"
      },
      {
        question: "需要買教材嗎？",
        answer: "不需要！所有學習資料都包含在課程中，包括講義、練習題和解答。"
      },
      {
        question: "學完後真的能理解文法嗎？",
        answer: "可以！課程設計強調理解而非死記，搭配大量練習，確保你真正掌握每個概念。"
      },
      {
        question: "有作業批改嗎？",
        answer: "有！每週都有作業，老師會批改並給予詳細回饋，幫助你發現並改正錯誤。"
      }
    ]
  },
  "5": {
    id: 5,
    title: "英文閱讀理解特訓",
    subtitle: "提升閱讀速度與理解能力",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&auto=format&fit=crop",
    price: "NT$ 8,800",
    originalPrice: "NT$ 11,800",
    duration: "10 週",
    students: "3,800+",
    level: "中級到高級",
    description: `閱讀是英文學習的關鍵能力，本課程專注於提升你的閱讀速度和理解能力，讓你能夠快速準確地理解各類英文文章。

課程涵蓋各種文體，從新聞報導、學術文章到文學作品，教你如何快速抓住文章重點、理解作者意圖，以及有效回答各類閱讀測驗題目。

特別適合準備各類考試或想要提升英文閱讀能力的學習者。`,
    outline: [
      {
        title: "第一階段：閱讀基礎（Week 1-3）",
        topics: [
          "閱讀策略介紹",
          "速讀技巧訓練",
          "詞彙推測法",
          "文章結構分析",
          "主旨大意判斷"
        ]
      },
      {
        title: "第二階段：文體分析（Week 4-7）",
        topics: [
          "新聞報導閱讀",
          "學術文章理解",
          "說明文分析",
          "議論文解讀",
          "文學作品欣賞"
        ]
      },
      {
        title: "第三階段：答題技巧（Week 8-9）",
        topics: [
          "細節題解題法",
          "推論題技巧",
          "主旨題策略",
          "詞彙題方法",
          "態度題分析"
        ]
      },
      {
        title: "第四階段：實戰演練（Week 10）",
        topics: [
          "限時閱讀訓練",
          "模擬測驗",
          "錯誤分析",
          "弱點加強",
          "總複習"
        ]
      }
    ],
    suitableFor: [
      "想要提升閱讀速度的學習者",
      "準備各類英文考試的考生",
      "需要閱讀英文資料的上班族或學生",
      "想要培養英文閱讀習慣的人",
      "閱讀理解能力需要加強的學習者"
    ],
    faqs: [
      {
        question: "我閱讀速度很慢，這門課能幫助我嗎？",
        answer: "當然！課程會教你多種速讀技巧，並透過練習逐步提升你的閱讀速度。"
      },
      {
        question: "課程會提供閱讀材料嗎？",
        answer: "會！課程包含豐富的閱讀材料，涵蓋各種主題和文體，讓你有充分的練習機會。"
      },
      {
        question: "單字量不夠怎麼辦？",
        answer: "課程會教你如何從上下文推測詞義，即使遇到生字也能理解文章。同時也會提供重要詞彙的學習。"
      },
      {
        question: "這門課適合準備托福或雅思嗎？",
        answer: "適合！課程教授的閱讀技巧和策略適用於各類英文考試，包括托福、雅思、多益等。"
      },
      {
        question: "需要多久才能看到進步？",
        answer: "大多數學生在4-6週後就能明顯感受到閱讀速度和理解能力的提升。"
      }
    ]
  },
  "6": {
    id: 6,
    title: "英文聽力訓練營",
    subtitle: "透過大量真實語料訓練聽力",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&auto=format&fit=crop",
    price: "NT$ 8,800",
    originalPrice: "NT$ 11,800",
    duration: "10 週",
    students: "4,200+",
    level: "初級到高級",
    description: `聽力是英文學習中最需要長期訓練的技能。本課程提供大量真實的英文聽力材料，從慢速到常速，從單一口音到多國口音，全方位訓練你的聽力。

課程使用各種真實情境的對話和獨白，包括日常對話、新聞廣播、學術講座等，讓你能夠適應各種聽力場景。

特別適合聽力基礎薄弱或想要突破聽力瓶頸的學習者。`,
    outline: [
      {
        title: "第一階段：聽力基礎（Week 1-3）",
        topics: [
          "音標與發音規則",
          "連音與弱讀",
          "基礎聽力訓練",
          "聽寫練習",
          "日常對話理解"
        ]
      },
      {
        title: "第二階段：情境聽力（Week 4-7）",
        topics: [
          "購物與餐廳情境",
          "旅遊與交通情境",
          "工作與會議情境",
          "學校與課堂情境",
          "新聞與廣播"
        ]
      },
      {
        title: "第三階段：多元口音（Week 8-9）",
        topics: [
          "美式英文",
          "英式英文",
          "澳洲英文",
          "其他口音",
          "口音辨識訓練"
        ]
      },
      {
        title: "第四階段：進階訓練（Week 10）",
        topics: [
          "學術講座聽力",
          "影片無字幕訓練",
          "聽力速度提升",
          "綜合測驗",
          "總複習"
        ]
      }
    ],
    suitableFor: [
      "聽力基礎薄弱的學習者",
      "準備各類英文聽力考試的考生",
      "想要聽懂英文影片和音頻的人",
      "需要在工作中使用英文溝通的上班族",
      "想要全面提升聽力能力的學習者"
    ],
    faqs: [
      {
        question: "我幾乎聽不懂英文，適合這門課嗎？",
        answer: "適合！課程從基礎開始，會先訓練你聽懂慢速英文，再逐步提升到常速。"
      },
      {
        question: "課程會教發音嗎？",
        answer: "會！課程會教授音標和發音規則，這對提升聽力很有幫助。好的發音能力能促進聽力理解。"
      },
      {
        question: "每天需要練習多久？",
        answer: "建議每天至少練習30分鐘。聽力需要持續練習才能進步，我們會提供每日練習材料。"
      },
      {
        question: "課程包含字幕嗎？",
        answer: "有！初期會提供字幕輔助理解，後期會逐步移除字幕，訓練你純靠聽力理解。"
      },
      {
        question: "學完後能聽懂英文電影嗎？",
        answer: "是的！完成課程後，你應該能聽懂大部分的英文電影和影集，至少達到70-80%的理解度。"
      }
    ]
  }
};

export default function CourseSalesDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">課程不存在</h1>
          <Button onClick={() => navigate("/landing")}>返回課程列表</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => navigate("/landing")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回課程列表
          </Button>
          
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <Badge variant="secondary" className="text-lg py-1 px-4">
              {course.level}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {course.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>{course.students} 位學員</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart className="w-5 h-5 text-primary" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Course Description */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">課程介紹</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Course Outline */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">課程大綱</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {course.outline.map((section: any, index: number) => (
                  <AccordionItem key={index} value={`section-${index}`} className="border rounded-lg">
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-3">
                        {section.topics.map((topic: string, topicIndex: number) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Suitable For */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">適合對象</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {course.suitableFor.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">常見問題</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {course.faqs.map((faq: any, index: number) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg">
                    <AccordionTrigger className="px-6 hover:no-underline text-left">
                      <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar - Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-primary">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <Badge variant="destructive" className="w-fit">限時優惠中</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Button className="w-full text-lg py-6" size="lg">
                    立即購買課程
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    加入購物車
                  </Button>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-bold text-foreground">課程包含：</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">永久觀看權限</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">AI 智能批改系統</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">老師直播 Q&A</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">學習社群支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">結業證書</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>七天無條件退款保證</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>免費試聽體驗</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            準備好開始學習了嗎？
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            立即購買課程，開始你的英文學習之旅
          </p>
          <Button size="lg" className="text-lg px-12 py-6 hover-scale">
            立即購買 {course.price}
          </Button>
        </div>
      </section>
    </div>
  );
}