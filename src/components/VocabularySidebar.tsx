import { useState } from "react";
import { ChevronRight, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VocabularyItem {
  word: string;
  definition: string;
  partOfSpeech?: string;
  exampleSentence?: string;
}

interface VocabularySidebarProps {
  vocabularyList: VocabularyItem[];
  onNavigateToCollection?: () => void;
}

export function VocabularySidebar({
  vocabularyList,
  onNavigateToCollection,
}: VocabularySidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={cn(
        "fixed right-0 top-20 h-[calc(100vh-5rem)]",
        "bg-card border-l border-border shadow-lg",
        "transition-all duration-300 ease-in-out z-40",
        isExpanded ? "w-80" : "w-12"
      )}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          {isExpanded && (
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">本篇單字集</h3>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="shrink-0"
          >
            {isExpanded ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5 rotate-90" />
            )}
          </Button>
        </div>

        {/* Content */}
        {isExpanded && (
          <>
            <ScrollArea className="flex-1 p-4">
              {vocabularyList.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">尚未加入任何單字</p>
                  <p className="text-xs mt-1">點擊文章中的單字來加入</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {vocabularyList.map((item, index) => (
                    <div
                      key={`${item.word}-${index}`}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-base">{item.word}</h4>
                        {item.partOfSpeech && (
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {item.partOfSpeech}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.definition}</p>
                      {item.exampleSentence && (
                        <p className="text-xs text-muted-foreground italic mt-2 pl-2 border-l-2 border-primary/30">
                          {item.exampleSentence}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t border-border">
              <div className="text-center mb-3">
                <span className="text-sm text-muted-foreground">
                  已收集 <span className="font-bold text-primary">{vocabularyList.length}</span> 個單字
                </span>
              </div>
              <Button
                onClick={onNavigateToCollection}
                className="w-full"
                variant="outline"
              >
                前往我的單字集
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
