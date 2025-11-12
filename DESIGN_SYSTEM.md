# 🎨 WordQuest Chronicles - Design System

**版本**: 1.0  
**風格定位**: 清新亮色、圓角卡通風格（Duolingo + ClassDojo）  
**目標**: 友善、有趣、激勵學習的視覺體驗

---

## 📐 1. 顏色方案 (Color Palette)

### 主題色彩 (Theme Colors)

#### Light Mode
```css
/* Primary - Rich Amber Gold (寶藏/寶石主題) */
--primary: hsl(38, 92%, 50%)           /* #E6A532 */
--primary-foreground: hsl(0, 0%, 100%) /* #FFFFFF */
--primary-glow: hsl(45, 100%, 60%)     /* #FFD966 - 發光效果 */

/* Secondary - Deep Teal (古代文物主題) */
--secondary: hsl(184, 65%, 42%)        /* #25A39B */
--secondary-foreground: hsl(0, 0%, 100%) /* #FFFFFF */

/* Accent - Terracotta Orange (冒險主題) */
--accent: hsl(16, 75%, 55%)            /* #E57547 */
--accent-foreground: hsl(0, 0%, 100%)  /* #FFFFFF */

/* Background & Surfaces */
--background: hsl(42, 45%, 96%)        /* #FAF7F0 - 羊皮紙色 */
--foreground: hsl(25, 35%, 15%)        /* #372617 - 深棕色文字 */
--card: hsl(40, 40%, 98%)              /* #FDFCFA */
--popover: hsl(40, 40%, 98%)           /* #FDFCFA */

/* Muted - Parchment Tones */
--muted: hsl(40, 30%, 88%)             /* #E8E1D5 */
--muted-foreground: hsl(25, 20%, 45%)  /* #826854 */

/* Borders & Inputs */
--border: hsl(40, 25%, 85%)            /* #DFDACF */
--input: hsl(40, 25%, 85%)             /* #DFDACF */
--ring: hsl(38, 92%, 50%)              /* Focus ring = Primary */
```

#### Dark Mode
```css
/* Night Expedition Theme */
--background: hsl(25, 25%, 8%)         /* #1A130D */
--foreground: hsl(42, 45%, 95%)        /* #F7F4ED */
--primary: hsl(38, 92%, 55%)           /* #F0AE3B */
--card: hsl(25, 20%, 12%)              /* #241812 */
/* ... 其他顏色對應調整 */
```

### 功能性顏色 (Functional Colors)

```css
/* Success - 答對提示 */
--success: hsl(142, 76%, 36%)          /* #16A34A - 翠綠色 */
--success-bg: hsl(142, 76%, 95%)       /* 淺綠背景 */

/* Error - 答錯提示 */
--destructive: hsl(0, 72%, 51%)        /* #DC2626 - 紅色 */
--destructive-bg: hsl(0, 72%, 95%)     /* 淺紅背景 */

/* Warning - 時間警告 */
--warning: hsl(38, 92%, 50%)           /* #E6A532 - 使用 Primary */
--warning-bg: hsl(38, 92%, 95%)        /* 淺黃背景 */

/* Info - 提示訊息 */
--info: hsl(200, 70%, 50%)             /* #2E9FD4 - 藍色 */
--info-bg: hsl(200, 70%, 95%)          /* 淺藍背景 */
```

### 特殊主題色 (Adventure-Specific Colors)

```css
/* Treasure & Gems */
--treasure-gold: hsl(45, 95%, 55%)     /* #FFD54F - 金幣寶石 */
--treasure: hsl(45, 95%, 55%)          /* Tailwind class: text-treasure */

/* Map & Exploration */
--map-brown: hsl(30, 35%, 35%)         /* #6B5340 - 地圖色 */
--explorer-badge: hsl(200, 70%, 50%)   /* #2E9FD4 - 探索者徽章 */

/* Rarity Colors */
--rarity-common: hsl(40, 30%, 88%)     /* #E8E1D5 - 灰色 */
--rarity-rare: hsl(200, 70%, 50%)      /* #2E9FD4 - 藍色 */
--rarity-epic: hsl(280, 70%, 55%)      /* #A855F7 - 紫色 */
--rarity-legendary: hsl(38, 92%, 50%)  /* #E6A532 - 金色 */
```

### 漸層效果 (Gradients)

```css
/* Hero Gradient - 主要英雄區塊 */
--gradient-hero: linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(16 75% 55%) 100%);

/* Card Gradient - 卡片柔和背景 */
--gradient-card: linear-gradient(to bottom, hsl(40 40% 98%), hsl(42 45% 96%));

/* Shine Effect - 閃亮特效 */
--gradient-shine: linear-gradient(90deg, transparent, hsl(45 100% 70% / 0.3), transparent);

/* Treasure Chest Gradients */
--gradient-common: linear-gradient(135deg, hsl(40 30% 70%), hsl(40 30% 85%));
--gradient-rare: linear-gradient(135deg, hsl(200 70% 40%), hsl(200 70% 60%));
--gradient-legendary: linear-gradient(135deg, hsl(38 92% 40%), hsl(45 95% 60%));
```

### 陰影系統 (Shadow System)

```css
/* Elevation Levels */
--shadow-sm: 0 1px 2px 0 hsl(25 35% 15% / 0.05);
--shadow-md: 0 4px 6px -1px hsl(25 35% 15% / 0.1);
--shadow-lg: 0 10px 15px -3px hsl(25 35% 15% / 0.1);
--shadow-xl: 0 20px 25px -5px hsl(25 35% 15% / 0.1);

/* Special Shadows */
--shadow-treasure: 0 10px 40px -10px hsl(38 92% 50% / 0.4);  /* 寶藏光暈 */
--shadow-card: 0 4px 20px -2px hsl(25 35% 15% / 0.08);       /* 卡片陰影 */
--shadow-button: 0 4px 12px -2px hsl(38 92% 50% / 0.3);      /* 按鈕陰影 */
```

---

## ✍️ 2. 字體系統 (Typography)

### 字體家族 (Font Families)

```css
/* Display Font - 標題、數字、徽章 */
font-family: 'Fredoka', 'Nunito', -apple-system, sans-serif;
用途: 大標題、等級數字、成就名稱

/* Body Font - 內文、說明 */
font-family: 'Inter', 'Noto Sans TC', -apple-system, sans-serif;
用途: 正文、描述、按鈕文字

/* Code/Mono - 數據、時間 */
font-family: 'JetBrains Mono', 'Courier New', monospace;
用途: 倒數計時、經驗值、統計數字
```

### Tailwind 配置
```typescript
// tailwind.config.ts
fontFamily: {
  display: ['Fredoka', 'Nunito', 'sans-serif'],
  sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### 字體大小與行高 (Font Scale)

| Class | Size | Line Height | 用途 |
|-------|------|-------------|------|
| `text-xs` | 12px | 16px | 小標籤、提示 |
| `text-sm` | 14px | 20px | 卡片描述、次要文字 |
| `text-base` | 16px | 24px | 正文內容 |
| `text-lg` | 18px | 28px | 子標題 |
| `text-xl` | 20px | 28px | 卡片標題 |
| `text-2xl` | 24px | 32px | 區塊標題 |
| `text-3xl` | 30px | 36px | 頁面標題 |
| `text-4xl` | 36px | 40px | 英雄標題 |
| `text-5xl` | 48px | 1 | 等級數字、特殊強調 |
| `text-6xl` | 60px | 1 | 慶祝畫面 |

### 字重 (Font Weights)

```css
font-normal    /* 400 - 正文 */
font-medium    /* 500 - 次要標題 */
font-semibold  /* 600 - 卡片標題 */
font-bold      /* 700 - 主標題、按鈕 */
font-extrabold /* 800 - 數字、特殊強調 */
```

### 文字顏色語義 (Text Color Semantics)

```css
text-foreground        /* 主要內容 */
text-muted-foreground  /* 次要內容、說明 */
text-primary           /* 強調、連結 */
text-success           /* 成功訊息 */
text-destructive       /* 錯誤訊息 */
text-treasure          /* 寶石、金幣 */
```

---

## 🎯 3. 按鈕系統 (Button Styles)

### 按鈕變體 (Button Variants)

#### Primary Button - 主要動作
```tsx
<Button variant="default" size="lg">
  Start Quest
</Button>

樣式:
- 背景: bg-primary
- 文字: text-primary-foreground
- Hover: hover:bg-primary/90 + scale-105
- Active: active:scale-95
- 陰影: shadow-button
- 圓角: rounded-xl
```

#### Secondary Button - 次要動作
```tsx
<Button variant="secondary" size="default">
  View Details
</Button>

樣式:
- 背景: bg-secondary
- 文字: text-secondary-foreground
- Hover: hover:bg-secondary/90
```

#### Outline Button - 輕量動作
```tsx
<Button variant="outline" size="default">
  Cancel
</Button>

樣式:
- 背景: transparent
- 邊框: border-2 border-border
- 文字: text-foreground
- Hover: hover:bg-muted
```

#### Ghost Button - 極輕量
```tsx
<Button variant="ghost" size="sm">
  Skip
</Button>

樣式:
- 背景: transparent
- Hover: hover:bg-muted/50
```

#### Destructive Button - 危險動作
```tsx
<Button variant="destructive" size="default">
  Delete
</Button>

樣式:
- 背景: bg-destructive
- 文字: text-destructive-foreground
```

### 按鈕尺寸 (Button Sizes)

```typescript
sm:  h-8  px-3  text-xs    /* 小型按鈕 */
default: h-10 px-4  text-sm    /* 標準按鈕 */
lg:  h-12 px-6  text-base  /* 大型按鈕 */
xl:  h-14 px-8  text-lg    /* 超大按鈕（CTA） */
icon: h-10 w-10            /* 圖示按鈕 */
```

### 按鈕動畫 (Button Animations)

```css
/* Hover Scale */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
hover:scale-105
active:scale-95

/* Pulse Glow - 主要 CTA */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px hsl(38 92% 50% / 0.3); }
  50% { box-shadow: 0 0 40px hsl(38 92% 50% / 0.6); }
}
animate-pulse-glow

/* Shine Effect - 限時優惠 */
@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

---

## 📱 4. Layout 架構

### 整體布局結構

```
┌─────────────────────────────────────────┐
│           Top Bar (Header)              │ ← 固定 h-16
├─────────────────────────────────────────┤
│                                         │
│                                         │
│          Main Content Area              │
│         (Scrollable Content)            │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│      Bottom Navigation (Mobile)         │ ← 固定 h-16 (僅行動裝置)
└─────────────────────────────────────────┘
```

### Top Bar (桌面版)

```tsx
<header className="sticky top-0 z-50 h-16 bg-background/95 backdrop-blur-lg border-b border-border">
  <div className="container mx-auto h-full flex items-center justify-between px-4">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <Trophy className="h-8 w-8 text-primary" />
      <h1 className="text-2xl font-bold font-display text-foreground">
        WordQuest
      </h1>
    </div>

    {/* Stats (Desktop) */}
    <div className="hidden md:flex items-center gap-6">
      <StatPill icon={Flame} value="7" label="Streak" />
      <StatPill icon={Gem} value="1,250" label="Gems" color="treasure" />
      <StatPill icon={Star} value="Level 7" label="Explorer" />
    </div>

    {/* User Avatar */}
    <Avatar>
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  </div>
</header>

尺寸規範:
- 高度: h-16 (64px)
- 內距: px-4 (16px)
- Logo 尺寸: h-8 w-8 (32px)
- 頭像尺寸: h-10 w-10 (40px)
```

### Main Content Area

```tsx
<main className="min-h-screen bg-background">
  <div className="container mx-auto px-4 py-8 max-w-7xl">
    {/* Page Content */}
  </div>
</main>

響應式間距:
- Mobile: px-4 py-6
- Tablet: px-6 py-8
- Desktop: px-8 py-12
- Max Width: max-w-7xl (1280px)
```

### Bottom Navigation (行動裝置)

```tsx
<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-lg border-t border-border z-50">
  <div className="h-full flex items-center justify-around px-2">
    <NavButton icon={Map} label="Quests" to="/quests" />
    <NavButton icon={Trophy} label="Achievements" to="/achievements" />
    <NavButton icon={ShoppingBag} label="Shop" to="/shop" />
    <NavButton icon={User} label="Profile" to="/profile" />
  </div>
</nav>

規範:
- 固定底部: fixed bottom-0
- 高度: h-16 (64px)
- 圖示大小: h-6 w-6 (24px)
- 文字: text-xs
- 間距: justify-around
- 隱藏桌面版: md:hidden
```

### 卡片布局 (Card Layouts)

#### 單欄布局 (Mobile)
```tsx
<div className="grid grid-cols-1 gap-4">
  <Card />
</div>
```

#### 雙欄布局 (Tablet)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  <Card />
</div>
```

#### 三欄布局 (Desktop)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <Card />
</div>
```

#### 任務地圖布局 (Quest Grid)
```tsx
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
  <QuestCard />
</div>
```

---

## 🎬 5. 動態反饋系統

### 答題回饋動畫

#### 答對特效 ✅
```typescript
// 組件: FeedbackAnimation
觸發條件: 答題正確

視覺效果:
1. 綠色圓形背景淡入 (bg-success/20)
2. ✅ 圖示從小到大彈出 (scale-0 → scale-100)
3. 星星粒子效果 (sparkles)
4. 震動回饋 (震動 API)

時長: 800ms
音效: "correct_answer.mp3" (叮鈴聲)
```

#### 答錯特效 ❌
```typescript
觸發條件: 答題錯誤

視覺效果:
1. 紅色圓形背景淡入 (bg-destructive/20)
2. ❌ 圖示搖晃 (animate-shake)
3. 選項卡片搖動
4. 震動回饋 (長震動)

時長: 600ms
音效: "wrong_answer.mp3" (錯誤音)
```

### 連擊特效 (Combo Effects)

```typescript
// 組件: ComboIndicator
觸發條件: 連續答對 3, 5, 7, 10 題

3連擊: 🔥 火焰圖示 + "Great!" + 小閃爍
5連擊: 🔥🔥 雙火焰 + "Awesome!" + 火花效果
7連擊: ⚡ 閃電 + "Amazing!" + 爆炸效果
10連擊: 👑 皇冠 + "Legendary!" + 金色煙火

音效:
- 3連: "combo_3.mp3" (升調音)
- 5連: "combo_5.mp3" (激昂音)
- 7連: "combo_7.mp3" (史詩音)
- 10連: "combo_10.mp3" (傳奇音)
```

### 升級慶祝動畫

```typescript
// 組件: LevelUpCelebration
觸發條件: 經驗值達到下一等級

動畫序列:
1. 背景淡入 (backdrop-blur-lg)
2. 卡片從下方滑入 (slide-in-up)
3. 獎盃圖示旋轉放大 + 脈衝光暈
4. 等級數字從小放大 + 彈跳
5. 新稱號淡入 + 金色光芒
6. 彩紙效果 (confetti + stars)
7. 獎勵列表逐個彈出

時長: 3秒
音效: "level_up.mp3" (勝利號角)
```

### 成就解鎖通知

```typescript
// 組件: BadgeUnlockNotification
觸發條件: 達成成就條件

動畫:
1. 從右側滑入 (slide-in-right)
2. 徽章圖示脈衝光暈
3. 稀有度顏色漸層背景
4. 5秒後淡出或點擊關閉

稀有度效果:
- Common: 無特效
- Rare: 星星效果 (stars)
- Epic: 爆炸效果 (explosion)
- Legendary: 煙火效果 (explosion + gems + sparkles)

音效:
- Common: "badge_common.mp3"
- Rare: "badge_rare.mp3"
- Epic: "badge_epic.mp3"
- Legendary: "badge_legendary.mp3"
```

### 寶箱開啟動畫

```typescript
// 組件: TreasureChestReveal
觸發條件: 完成任務後

動畫序列:
1. 寶箱從下方彈入 (bounce-in)
2. 懸浮動畫 (floating)
3. 點擊後震動 + 發光
4. 蓋子彈開 (rotate + translate)
5. 光芒射出
6. 獎勵物品逐個彈出
7. 粒子效果（依稀有度）

稀有度動畫:
- Common: sparkles
- Rare: gems + sparkles
- Legendary: explosion + gems + sparkles

時長: 2-4秒
音效: 
- 點擊: "chest_click.mp3"
- 開啟: "chest_open_[rarity].mp3"
```

### 進度條動畫

```typescript
// 組件: ProgressBar
用途: 經驗值、任務進度、時間條

動畫:
- 填充: transition-all duration-500 ease-out
- 達到 100%: 脈衝 (animate-pulse) + 閃光
- 警告狀態 (< 20%): 紅色 + 閃爍

顏色:
- 正常: bg-primary
- 警告: bg-warning (黃色)
- 危險: bg-destructive (紅色)
- 完成: bg-success (綠色)
```

---

## 🎵 6. 音效系統建議

### 音效資源清單

#### 介面互動音效
```
ui/
├── button_click.mp3       (50ms, 柔和點擊)
├── button_hover.mp3       (30ms, 微弱提示音)
├── tab_switch.mp3         (80ms, 切換音)
├── card_flip.mp3          (150ms, 翻牌音)
└── drawer_open.mp3        (200ms, 滑出音)
```

#### 答題回饋音效
```
feedback/
├── correct_answer.mp3     (400ms, 叮鈴聲 - C大調)
├── wrong_answer.mp3       (300ms, 低沉錯誤音)
├── perfect_score.mp3      (2s, 勝利音樂)
└── time_warning.mp3       (500ms, 緊張提示音)
```

#### 連擊音效
```
combo/
├── combo_3.mp3            (300ms, 上升音階)
├── combo_5.mp3            (500ms, 激昂音)
├── combo_7.mp3            (700ms, 史詩音)
└── combo_10.mp3           (1s, 傳奇號角)
```

#### 成就音效
```
achievements/
├── badge_common.mp3       (400ms, 簡單叮聲)
├── badge_rare.mp3         (600ms, 魔法音效)
├── badge_epic.mp3         (800ms, 史詩鼓聲)
├── badge_legendary.mp3    (1.5s, 傳奇號角)
└── level_up.mp3           (2s, 升級音樂)
```

#### 寶箱音效
```
treasure/
├── chest_click.mp3        (100ms, 木箱點擊)
├── chest_open_common.mp3  (1s, 簡單開啟)
├── chest_open_rare.mp3    (1.5s, 閃亮開啟)
└── chest_open_legendary.mp3 (2s, 史詩開啟)
```

#### 背景音樂（可選）
```
bgm/
├── menu_theme.mp3         (循環, 輕快冒險曲)
├── quest_theme.mp3        (循環, 專注學習曲)
└── celebration_theme.mp3  (20s, 慶祝音樂)
```

### 音效實作建議

```typescript
// src/hooks/useSound.ts
import { useCallback, useRef } from 'react';

interface SoundOptions {
  volume?: number;
  loop?: boolean;
}

export const useSound = () => {
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  const play = useCallback((soundPath: string, options: SoundOptions = {}) => {
    const { volume = 0.5, loop = false } = options;
    
    // Get or create audio element
    let audio = audioCache.current.get(soundPath);
    if (!audio) {
      audio = new Audio(soundPath);
      audioCache.current.set(soundPath, audio);
    }

    audio.volume = volume;
    audio.loop = loop;
    audio.currentTime = 0;
    audio.play().catch(err => console.warn('Audio play failed:', err));
  }, []);

  const stop = useCallback((soundPath: string) => {
    const audio = audioCache.current.get(soundPath);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  return { play, stop };
};

// 使用範例
const { play } = useSound();

// 答對音效
play('/sounds/feedback/correct_answer.mp3', { volume: 0.7 });

// 背景音樂
play('/sounds/bgm/quest_theme.mp3', { volume: 0.3, loop: true });
```

### 音效設計原則

1. **音量控制**: 預設 50%，允許用戶調整
2. **可開關**: 提供全域音效開關
3. **不干擾**: 音效簡短、不刺耳
4. **回饋即時**: 音效延遲 < 50ms
5. **情境適配**: 不同場景使用不同音效

---

## 🎨 7. 組件樣式規範

### Card 組件
```tsx
<Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  {/* Content */}
</Card>

規範:
- 內距: p-6 (24px)
- 圓角: rounded-xl (12px)
- 邊框: border border-border
- Hover: 提升 + 陰影增強
- 過渡: transition-all duration-300
```

### Badge 組件
```tsx
<Badge variant="default" className="px-3 py-1">
  Level 7
</Badge>

變體:
- default: 主色徽章
- secondary: 次要徽章
- outline: 邊框徽章
- destructive: 危險徽章

尺寸:
- 小: px-2 py-0.5 text-xs
- 標準: px-3 py-1 text-sm
- 大: px-4 py-1.5 text-base
```

### Progress Bar
```tsx
<Progress value={75} className="h-3 bg-muted" />

樣式:
- 高度: h-3 (12px)
- 背景: bg-muted
- 填充: bg-primary
- 圓角: rounded-full
- 動畫: transition-all duration-500
```

### Avatar 組件
```tsx
<Avatar className="h-12 w-12 border-2 border-primary">
  <AvatarImage src="/avatar.png" />
  <AvatarFallback className="bg-primary text-primary-foreground">
    UN
  </AvatarFallback>
</Avatar>

尺寸:
- 小: h-8 w-8
- 標準: h-10 w-10
- 大: h-12 w-12
- 超大: h-16 w-16
```

---

## 📐 8. 間距系統 (Spacing Scale)

```css
/* Tailwind Spacing */
0.5  = 2px   (超細間距)
1    = 4px   (最小間距)
2    = 8px   (小間距)
3    = 12px  (緊湊間距)
4    = 16px  (標準間距) ← 最常用
6    = 24px  (中等間距)
8    = 32px  (大間距)
12   = 48px  (超大間距)
16   = 64px  (區塊間距)

常用組合:
- 卡片內距: p-6
- 按鈕內距: px-4 py-2
- 區塊間距: space-y-6
- Grid 間距: gap-4
```

---

## 🔄 9. 動畫庫 (Animation Library)

### 已定義動畫

```css
/* 淡入淡出 */
animate-fade-in          /* 300ms 淡入 */
animate-fade-out         /* 300ms 淡出 */

/* 縮放 */
animate-scale-in         /* 200ms 放大淡入 */
animate-scale-out        /* 200ms 縮小淡出 */

/* 滑動 */
animate-slide-in-right   /* 300ms 從右滑入 */
animate-slide-out-right  /* 300ms 向右滑出 */

/* 特殊效果 */
animate-pulse-glow       /* 2s 脈衝光暈 (無限) */
animate-bounce           /* 1s 彈跳 */
animate-spin             /* 1s 旋轉 (無限) */
animate-ping             /* 1s Ping 效果 (無限) */

/* 組合動畫 */
animate-enter            /* fade-in + scale-in */
animate-exit             /* fade-out + scale-out */
```

### 自訂動畫範例

```tsx
// Floating Animation (懸浮)
<div className="animate-float">
  <TreasureChest />
</div>

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
animation: float 3s ease-in-out infinite;

// Shake Animation (搖晃)
<div className="animate-shake">
  <ErrorIcon />
</div>

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
animation: shake 0.5s;
```

---

## 🎯 10. 響應式設計

### 斷點系統 (Breakpoints)

```css
sm: 640px   /* 手機橫向 */
md: 768px   /* 平板直向 */
lg: 1024px  /* 平板橫向/小筆電 */
xl: 1280px  /* 桌機 */
2xl: 1536px /* 大螢幕 */
```

### 響應式規範

```tsx
// 文字大小
<h1 className="text-2xl md:text-3xl lg:text-4xl">

// 間距
<div className="px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">

// Grid 布局
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// 顯示/隱藏
<div className="hidden md:block">     /* 僅桌面顯示 */
<div className="md:hidden">           /* 僅行動裝置顯示 */
```

---

## 📦 11. 設計 Token 匯出

### CSS Variables 匯出
```css
/* 可供 JavaScript 使用 */
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');
```

### Tailwind Config 匯出
```typescript
// 可匯入到 JS
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;
```

---

## ✅ 設計檢查清單

### 新組件設計時確認：
- [ ] 使用設計系統定義的顏色（HSL）
- [ ] 使用語義化字體類別
- [ ] 包含 Hover/Active/Focus 狀態
- [ ] 響應式設計（至少支援手機/桌機）
- [ ] 動畫流暢（使用 cubic-bezier）
- [ ] 可訪問性（對比度 WCAG AA）
- [ ] 黑暗模式支援
- [ ] 載入狀態設計
- [ ] 錯誤狀態設計

---

## 🔗 相關資源

- **Figma 設計檔**: [連結]
- **圖示庫**: Lucide React
- **字體來源**: Google Fonts (Fredoka, Inter)
- **動畫參考**: Framer Motion 文檔
- **色彩工具**: HSL Color Picker
- **音效素材**: Freesound.org, Pixabay

---

**最後更新**: 2024-01-15  
**維護者**: WordQuest Design Team
