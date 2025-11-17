import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookmarkPlus,
  Search,
  Filter,
  Trash2,
  FolderInput,
  Download,
  ChevronLeft,
  Tag,
  Volume2,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Word {
  id: string;
  word: string;
  ipa: string;
  translation: string;
  example: string;
  exampleTranslation: string;
  theme: string;
  source: string;
  dateAdded: string;
}

const VocabularyCollections = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isMoveDialogOpen, setIsMoveDialogOpen] = useState(false);
  const [targetTheme, setTargetTheme] = useState("");

  const [collectedWords] = useState<Word[]>([
    {
      id: "1",
      word: "serendipity",
      ipa: "/ˌserənˈdɪpəti/",
      translation: "意外發現美好事物的能力",
      example: "Finding this café was pure serendipity.",
      exampleTranslation: "發現這間咖啡廳純屬偶然的幸運。",
      source: "英文學習社群",
      theme: "進階詞彙",
      dateAdded: "2024-03-15",
    },
    {
      id: "3",
      word: "ephemeral",
      ipa: "/ɪˈfemərəl/",
      translation: "短暫的；瞬息的",
      example: "The beauty of cherry blossoms is ephemeral.",
      exampleTranslation: "櫻花的美是短暫的。",
      source: "文學賞析",
      theme: "文學詞彙",
      dateAdded: "2024-03-14",
    },
    {
      id: "4",
      word: "resilience",
      ipa: "/rɪˈzɪliəns/",
      translation: "復原力；韌性",
      example: "Her resilience helped her overcome the challenges.",
      exampleTranslation: "她的韌性幫助她克服了挑戰。",
      source: "心理學詞庫",
      theme: "學術英語",
      dateAdded: "2024-03-13",
    },
    {
      id: "5",
      word: "eloquent",
      ipa: "/ˈeləkwənt/",
      translation: "雄辯的；有說服力的",
      example: "She gave an eloquent speech at the conference.",
      exampleTranslation: "她在會議上發表了一場雄辯的演說。",
      source: "演講技巧",
      theme: "進階詞彙",
      dateAdded: "2024-03-12",
    },
  ]);

  const themes = [
    { value: "all", label: "全部主題" },
    { value: "進階詞彙", label: "進階詞彙" },
    { value: "文學詞彙", label: "文學詞彙" },
    { value: "學術英語", label: "學術英語" },
    { value: "商務英語", label: "商務英語" },
  ];

  const filteredWords = collectedWords.filter((word) => {
    const matchesSearch =
      word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.translation.includes(searchQuery);
    const matchesTheme = selectedTheme === "all" || word.theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  const toggleSelectWord = (wordId: string) => {
    setSelectedWords((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
  };

  const selectAll = () => {
    if (selectedWords.length === filteredWords.length) {
      setSelectedWords([]);
    } else {
      setSelectedWords(filteredWords.map((w) => w.id));
    }
  };

  const handleDelete = () => {
    toast.success(`已移除 ${selectedWords.length} 個單字`);
    setSelectedWords([]);
  };

  const handleMove = () => {
    if (!targetTheme) {
      toast.error("請選擇目標主題集");
      return;
    }
    toast.success(`已將 ${selectedWords.length} 個單字移至「${targetTheme}」`);
    setSelectedWords([]);
    setIsMoveDialogOpen(false);
    setTargetTheme("");
  };

  const handleExport = () => {
    const exportData = collectedWords
      .filter((w) => selectedWords.includes(w.id))
      .map((w) => `${w.word}\t${w.ipa}\t${w.translation}\t${w.example}`)
      .join("\n");

    const blob = new Blob([exportData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vocabulary-collection.txt";
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success(`已匯出 ${selectedWords.length} 個單字`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/vocabulary")}
            className="mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            返回單字複習中心
          </Button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookmarkPlus className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">我的收藏列表</h1>
              <p className="text-muted-foreground">
                共 {collectedWords.length} 個單字 • {selectedWords.length > 0 && `已選擇 ${selectedWords.length} 個`}
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <Card className="p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜尋單字或翻譯..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Theme Filter */}
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="選擇主題" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme.value} value={theme.value}>
                    {theme.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Select All */}
            <Button variant="outline" onClick={selectAll} className="w-full md:w-auto">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              {selectedWords.length === filteredWords.length ? "取消全選" : "全選"}
            </Button>
          </div>
        </Card>

        {/* Batch Actions */}
        {selectedWords.length > 0 && (
          <Card className="p-4 mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-foreground">
                已選擇 {selectedWords.length} 個單字
              </span>
              <div className="flex gap-2 ml-auto">
                <Dialog open={isMoveDialogOpen} onOpenChange={setIsMoveDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <FolderInput className="h-4 w-4 mr-2" />
                      移動到
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>移動單字到其他主題集</DialogTitle>
                      <DialogDescription>
                        選擇要移動到的目標主題集
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <Select value={targetTheme} onValueChange={setTargetTheme}>
                        <SelectTrigger>
                          <SelectValue placeholder="選擇主題集" />
                        </SelectTrigger>
                        <SelectContent>
                          {themes
                            .filter((t) => t.value !== "all")
                            .map((theme) => (
                              <SelectItem key={theme.value} value={theme.value}>
                                {theme.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={() => setIsMoveDialogOpen(false)}>
                          取消
                        </Button>
                        <Button onClick={handleMove}>確認移動</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="h-4 w-4 mr-2" />
                  匯出
                </Button>

                <Button variant="destructive" size="sm" onClick={handleDelete}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  移除
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Word List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWords.map((word) => {
            const isSelected = selectedWords.includes(word.id);

            return (
              <Card
                key={word.id}
                className={`p-6 transition-all duration-200 ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20 bg-primary/5"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleSelectWord(word.id)}
                    className="mt-1"
                  />

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Theme Tag */}
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {word.theme}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{word.source}</span>
                    </div>

                    {/* Word */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-foreground">{word.word}</h3>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Volume2 className="h-4 w-4 text-primary" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{word.ipa}</p>
                      <p className="text-base text-foreground font-medium">{word.translation}</p>
                    </div>

                    {/* Example */}
                    <div className="p-3 rounded-lg bg-muted/50 border-l-4 border-primary">
                      <p className="text-sm text-foreground italic mb-1">{word.example}</p>
                      <p className="text-xs text-muted-foreground">{word.exampleTranslation}</p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>加入時間：{word.dateAdded}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredWords.length === 0 && (
          <Card className="p-12 text-center">
            <BookmarkPlus className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">沒有找到單字</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || selectedTheme !== "all"
                ? "嘗試調整搜尋條件或篩選器"
                : "開始收藏你喜歡的單字吧"}
            </p>
            <Button onClick={() => navigate("/vocabulary")}>前往單字複習中心</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VocabularyCollections;
