import { useState } from "react";
import { Plus } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface VocabularyWordProps {
  word: string;
  definition: string;
  partOfSpeech?: string;
  exampleSentence?: string;
  onAdd?: (wordData: {
    word: string;
    definition: string;
    partOfSpeech?: string;
    exampleSentence?: string;
  }) => void;
}

export function VocabularyWord({
  word,
  definition,
  partOfSpeech = "n.",
  exampleSentence,
  onAdd,
}: VocabularyWordProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAdded) {
      const wordData = { word, definition, partOfSpeech, exampleSentence };
      onAdd?.(wordData);

      // TODO: Send to API endpoint
      // fetch('/api/vocabulary/add', { method: 'POST', body: JSON.stringify(wordData) })

      toast({
        title: "已加入單字集！",
        description: `"${word}" 已成功加入你的單字集中`,
      });

      setIsAdded(true);
    }
  };

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <span className="relative inline-block group cursor-help">
          <span className={cn(
            "font-semibold underline decoration-primary/50 decoration-2 underline-offset-4",
            "transition-colors hover:text-primary hover:decoration-primary"
          )}>
            {word}
          </span>
          <button
            onClick={handleAdd}
            disabled={isAdded}
            className={cn(
              "absolute -top-2 -right-2 w-4 h-4 rounded-full",
              "flex items-center justify-center text-[10px]",
              "transition-all duration-200",
              "opacity-0 group-hover:opacity-100",
              isAdded 
                ? "bg-green-500 text-white cursor-default"
                : "bg-primary text-primary-foreground hover:scale-110 active:scale-95"
            )}
            aria-label={isAdded ? "已加入" : "加入單字集"}
          >
            {isAdded ? "✓" : <Plus className="w-3 h-3" />}
          </button>
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <h4 className="font-bold text-lg">{word}</h4>
            {partOfSpeech && (
              <span className="text-xs text-muted-foreground italic">{partOfSpeech}</span>
            )}
          </div>
          <p className="text-sm text-foreground">{definition}</p>
          {exampleSentence && (
            <div className="pt-2 mt-2 border-t border-border">
              <p className="text-xs text-muted-foreground italic">"{exampleSentence}"</p>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
