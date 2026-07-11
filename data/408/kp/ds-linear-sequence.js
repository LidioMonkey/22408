// ==========================================
// 408 知识点：顺序表
// 模板版本: v1 | 对应 schema: data/408/schema.md
// ==========================================

const KP_DS_LINEAR_SEQUENCE = {
  id: "ds-linear-sequence",
  subject: "data-structure",
  chapter: "线性表",
  title: "顺序表",
  tags: ["线性表", "顺序存储", "必考", "基础"],
  related: ["ds-intro-complexity", "ds-linear-linkedlist"],
  sections: [
    {
      type: "definition",
      content: "顺序表是用**连续存储单元**依次存储线性表数据元素的，逻辑上相邻的元素物理位置也相邻。具有**随机存取**特性——只要知道首地址和下标，$O(1)$ 访问任意元素。"
    },
    {
      type: "key-points",
      items: [
        "优点：可随机存取（$O(1)$），存储密度高（无需指针）",
        "缺点：插入/删除需移动大量元素（平均 $O(n)$），需要预分配空间",
        "静态分配：数组大小固定，满了无法扩展",
        "动态分配：用 `realloc` 扩展，但移动元素耗时长"
      ]
    },
    {
      type: "code",
      lang: "c",
      content: "#define MaxSize 50\ntypedef struct {\n  ElemType data[MaxSize];  // 数组存储元素\n  int length;               // 当前长度\n} SqList;\n\n// 插入操作：在位置 i 插入元素 e\nbool ListInsert(SqList &L, int i, ElemType e) {\n  if (i < 1 || i > L.length + 1) return false;\n  if (L.length >= MaxSize) return false;\n  for (int j = L.length; j >= i; j--)\n    L.data[j] = L.data[j-1];  // 元素后移\n  L.data[i-1] = e;\n  L.length++;\n  return true;\n}"
    },
    {
      type: "comparison",
      headers: ["操作", "平均时间复杂度", "说明"],
      rows: [
        ["按位查找", "$O(1)$", "直接通过下标访问 data[i-1]"],
        ["按值查找", "$O(n)$", "需要遍历比较（有序时可二分 $O(\\log n)$）"],
        ["插入", "$O(n)$", "平均移动 n/2 个元素"],
        ["删除", "$O(n)$", "平均移动 (n-1)/2 个元素"]
      ]
    },
    {
      type: "tip",
      content: "插入/删除移动元素时，**从后往前**移动（插入）或**从前往后**移动（删除），注意下标不要写错！"
    },
    {
      type: "pitfall",
      content: "注意区分**位序**（从1开始）和**数组下标**（从0开始）。题目中的第 $i$ 个元素在数组中是 `data[i-1]`。"
    },
    {
      type: "example",
      question: "长度为 n 的顺序表，在等概率情况下插入一个元素的平均移动次数是多少？删除呢？",
      answer: "插入：$n/2$ 次；删除：$(n-1)/2$ 次",
      solution: "插入位置有 $n+1$ 种可能（表尾也算），移动次数分别为 $n, n-1, ..., 0$，平均 $n/2$。\n删除位置有 $n$ 种可能，移动次数分别为 $n-1, n-2, ..., 0$，平均 $(n-1)/2$。"
    },
    {
      type: "memory-tip",
      content: "顺序表=数组+长度。**随存随取**（随机存取）是它的标志性特征，面试常问『数组和链表的区别』就从这一点切入。"
    }
  ]
};
