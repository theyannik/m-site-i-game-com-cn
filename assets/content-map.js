const contentMap = {
  sections: [
    {
      id: "games",
      title: "游戏专区",
      tags: ["爱游戏", "动作", "冒险", "策略"],
      items: [
        { title: "星际征途", url: "https://m-site-i-game.com.cn/game/star-trek", keywords: ["爱游戏", "星际", "动作"] },
        { title: "幻境迷城", url: "https://m-site-i-game.com.cn/game/mystic-city", keywords: ["爱游戏", "冒险", "解谜"] },
        { title: "王国纪元", url: "https://m-site-i-game.com.cn/game/kingdom-era", keywords: ["爱游戏", "策略", "建造"] }
      ]
    },
    {
      id: "news",
      title: "新闻动态",
      tags: ["爱游戏", "更新", "公告", "活动"],
      items: [
        { title: "版本更新预告", url: "https://m-site-i-game.com.cn/news/update-preview", keywords: ["爱游戏", "更新", "公告"] },
        { title: "国庆庆典活动", url: "https://m-site-i-game.com.cn/news/event-national", keywords: ["爱游戏", "活动", "庆典"] },
        { title: "新角色登场", url: "https://m-site-i-game.com.cn/news/new-character", keywords: ["爱游戏", "角色", "更新"] }
      ]
    },
    {
      id: "guides",
      title: "攻略指南",
      tags: ["爱游戏", "攻略", "技巧", "教程"],
      items: [
        { title: "新手入门指南", url: "https://m-site-i-game.com.cn/guide/newbie", keywords: ["爱游戏", "攻略", "新手"] },
        { title: "装备强化攻略", url: "https://m-site-i-game.com.cn/guide/equipment-upgrade", keywords: ["爱游戏", "技巧", "装备"] },
        { title: "副本通关教程", url: "https://m-site-i-game.com.cn/guide/dungeon-walkthrough", keywords: ["爱游戏", "教程", "副本"] }
      ]
    }
  ],
  globalTags: ["爱游戏", "热门", "推荐", "最新"]
};

function searchContent(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  contentMap.sections.forEach(section => {
    section.items.forEach(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
      const tagMatch = section.tags.some(t => t.toLowerCase().includes(lowerQuery));

      if (titleMatch || keywordMatch || tagMatch) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          ...item
        });
      }
    });
  });

  return results;
}

function filterByTag(tag) {
  const results = [];
  const lowerTag = tag.toLowerCase();

  contentMap.sections.forEach(section => {
    const hasSectionTag = section.tags.some(t => t.toLowerCase() === lowerTag);
    section.items.forEach(item => {
      const hasItemKeyword = item.keywords.some(k => k.toLowerCase() === lowerTag);
      if (hasSectionTag || hasItemKeyword) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          ...item
        });
      }
    });
  });

  return results;
}

function getAllItems() {
  const items = [];
  contentMap.sections.forEach(section => {
    section.items.forEach(item => {
      items.push({
        sectionId: section.id,
        sectionTitle: section.title,
        ...item
      });
    });
  });
  return items;
}

window.contentMap = contentMap;
window.searchContent = searchContent;
window.filterByTag = filterByTag;
window.getAllItems = getAllItems;