import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { VocabularyWord } from "@/components/VocabularyWord";
import { VocabularySidebar } from "@/components/VocabularySidebar";

interface VocabularyItem {
  word: string;
  definition: string;
  partOfSpeech?: string;
  exampleSentence?: string;
}

// Mock article data - replace with actual data from API
const mockArticle = {
  id: "1",
  title: "Climate Change Accelerates as Global Temperatures Continue to Rise",
  subtitle: "Scientists warn that urgent action is needed to prevent catastrophic environmental consequences and protect future generations.",
  publishDate: "2024-01-15",
  tags: ["Environment", "Science", "Global Issues"],
  content: [
    {
      paragraph: "Recent studies have revealed that global temperatures are rising at an unprecedented rate, posing significant challenges to ecosystems worldwide. The phenomenon of climate change has become increasingly evident through extreme weather events and rising sea levels."
    },
    {
      paragraph: "Environmental scientists emphasize the urgent need for sustainable practices and renewable energy sources. The devastating effects of climate change are already being felt across multiple continents, with droughts, floods, and wildfires becoming more frequent and severe."
    },
    {
      paragraph: "International cooperation is essential to address this global crisis. Governments, corporations, and individuals must collaborate to implement effective strategies that reduce carbon emissions and promote environmental conservation."
    }
  ],
  vocabularyWords: [
    { word: "unprecedented", definition: "從未發生過的；前所未有的", partOfSpeech: "adj.", exampleSentence: "The company achieved unprecedented success this year." },
    { word: "phenomenon", definition: "現象；特殊的人或事物", partOfSpeech: "n.", exampleSentence: "Social media is a modern phenomenon that has changed communication." },
    { word: "sustainable", definition: "可持續的；能維持的", partOfSpeech: "adj.", exampleSentence: "We need to adopt sustainable farming practices." },
    { word: "devastating", definition: "毀滅性的；破壞力極大的", partOfSpeech: "adj.", exampleSentence: "The earthquake had devastating effects on the city." },
    { word: "cooperation", definition: "合作；協作", partOfSpeech: "n.", exampleSentence: "International cooperation is vital for world peace." },
    { word: "essential", definition: "必要的；不可缺少的", partOfSpeech: "adj.", exampleSentence: "Good communication is essential in any relationship." },
  ]
};

export default function NewsReading() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [collectedVocabulary, setCollectedVocabulary] = useState<VocabularyItem[]>([]);

  const handleAddVocabulary = (wordData: VocabularyItem) => {
    // Check if word already exists
    if (!collectedVocabulary.some(item => item.word === wordData.word)) {
      setCollectedVocabulary(prev => [...prev, wordData]);
    }
  };

  const handleNavigateToCollection = () => {
    navigate("/vocabulary-collections");
  };

  // Create a map for easy word lookup
  const vocabularyMap = new Map(
    mockArticle.vocabularyWords.map(v => [v.word.toLowerCase(), v])
  );

  // Function to render paragraph with vocabulary words
  const renderParagraphWithVocabulary = (text: string) => {
    const words = text.split(/(\s+)/);
    
    return words.map((word, index) => {
      // Remove punctuation for lookup
      const cleanWord = word.replace(/[.,!?;:"'()]/g, "").toLowerCase();
      const vocabData = vocabularyMap.get(cleanWord);

      if (vocabData) {
        return (
          <span key={index}>
            <VocabularyWord
              word={word.replace(/[.,!?;:"'()]/g, "")}
              definition={vocabData.definition}
              partOfSpeech={vocabData.partOfSpeech}
              exampleSentence={vocabData.exampleSentence}
              onAdd={handleAddVocabulary}
            />
            {word.match(/[.,!?;:"']/) ? word.slice(-1) : ""}
            {word.match(/\s/) ? " " : ""}
          </span>
        );
      }

      return <span key={index}>{word}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="container max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {mockArticle.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {mockArticle.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {mockArticle.subtitle}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time dateTime={mockArticle.publishDate}>
                {new Date(mockArticle.publishDate).toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-foreground leading-relaxed">
            {mockArticle.content.map((section, index) => (
              <p key={index} className="text-base md:text-lg">
                {renderParagraphWithVocabulary(section.paragraph)}
              </p>
            ))}
          </div>
        </article>

        {/* Tips Section */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <span className="text-primary">💡</span>
            學習小提示
          </h3>
          <p className="text-sm text-muted-foreground">
            將滑鼠移到文章中的<span className="font-semibold underline decoration-primary/50">底線單字</span>上方，即可查看單字解釋。點擊單字旁的 <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs">+</span> 按鈕，即可將該單字加入你的單字集中！
          </p>
        </div>
      </div>

      {/* Vocabulary Sidebar */}
      <VocabularySidebar
        vocabularyList={collectedVocabulary}
        onNavigateToCollection={handleNavigateToCollection}
      />
    </div>
  );
}
