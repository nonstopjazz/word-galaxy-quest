import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Gem, Zap, Heart, Eye, Sparkles, Lock, Unlock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";

interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "powerup" | "cosmetic" | "content";
  icon: typeof Zap;
  owned?: boolean;
}

const shopItems: ShopItem[] = [
  {
    id: "1",
    name: "Extra Life",
    description: "Get one additional attempt for the current quest",
    price: 50,
    category: "powerup",
    icon: Heart
  },
  {
    id: "2",
    name: "Unlimited Hints",
    description: "Use hints without limit for 1 quest",
    price: 100,
    category: "powerup",
    icon: Eye
  },
  {
    id: "3",
    name: "Double XP Boost",
    description: "Earn 2x Explorer EXP for 1 hour",
    price: 150,
    category: "powerup",
    icon: Zap
  },
  {
    id: "4",
    name: "Skip Question",
    description: "Skip one difficult question without penalty",
    price: 75,
    category: "powerup",
    icon: Sparkles
  },
  {
    id: "5",
    name: "Golden Frame",
    description: "Legendary golden avatar frame",
    price: 300,
    category: "cosmetic",
    icon: Sparkles,
    owned: false
  },
  {
    id: "6",
    name: "Treasure Map Background",
    description: "Ancient map profile background",
    price: 200,
    category: "cosmetic",
    icon: Sparkles,
    owned: true
  },
  {
    id: "7",
    name: "Explorer Title",
    description: "Display 'Master Explorer' title on your profile",
    price: 250,
    category: "cosmetic",
    icon: Sparkles
  },
  {
    id: "8",
    name: "Unlock Territory Early",
    description: "Unlock Conditional Canyon without prerequisites",
    price: 500,
    category: "content",
    icon: Unlock
  },
  {
    id: "9",
    name: "Business Vocabulary Pack",
    description: "Exclusive 50-lesson business English pack",
    price: 400,
    category: "content",
    icon: Lock
  }
];

const Shop = () => {
  const [userGems] = useState(3420);

  const handlePurchase = (item: ShopItem) => {
    if (userGems < item.price) {
      toast.error("Not enough gems!", {
        description: `You need ${item.price - userGems} more gems to purchase this item.`
      });
      return;
    }

    toast.success(`${item.name} purchased!`, {
      description: `You spent ${item.price} gems.`
    });
  };

  const renderItems = (category?: string) => {
    const filtered = category 
      ? shopItems.filter(item => item.category === category)
      : shopItems;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          const canAfford = userGems >= item.price;

          return (
            <Card
              key={item.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {item.owned && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground">Owned</Badge>
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                  {item.description}
                </p>

                {/* Price & Purchase */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Gem className="h-5 w-5 text-treasure" />
                    <span className="text-xl font-bold text-foreground">
                      {item.price}
                    </span>
                  </div>
                  <Button
                    onClick={() => handlePurchase(item)}
                    disabled={!canAfford || item.owned}
                    variant={canAfford ? "default" : "outline"}
                    size="sm"
                  >
                    {item.owned ? "Owned" : canAfford ? "Buy" : "Not Enough"}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">Gem Shop</h1>
                <p className="text-muted-foreground">Spend your hard-earned gems</p>
              </div>
            </div>

            {/* Gems Balance */}
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center gap-2">
                <Gem className="h-6 w-6 text-treasure animate-pulse-glow" />
                <div>
                  <p className="text-xs text-muted-foreground">Your Balance</p>
                  <p className="text-2xl font-bold text-foreground">
                    {userGems.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Shop Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="powerup">Power-ups</TabsTrigger>
            <TabsTrigger value="cosmetic">Cosmetics</TabsTrigger>
            <TabsTrigger value="content">Bonus Content</TabsTrigger>
          </TabsList>

          <TabsContent value="all">{renderItems()}</TabsContent>
          <TabsContent value="powerup">{renderItems("powerup")}</TabsContent>
          <TabsContent value="cosmetic">{renderItems("cosmetic")}</TabsContent>
          <TabsContent value="content">{renderItems("content")}</TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-secondary/10 to-explorer/10 border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/20">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">How to Earn More Gems?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete quests and lessons (+10-50 gems each)</li>
                <li>• Maintain daily streaks (bonus +25 gems per week)</li>
                <li>• Unlock achievements (+50-200 gems)</li>
                <li>• Get perfect scores on difficult quests (+30 gems)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Shop;
