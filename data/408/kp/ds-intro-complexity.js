// ==========================================
// 408 知识点：时间复杂度与空间复杂度
// 模板版本: v1 | 对应 schema: data/408/schema.md
// ==========================================
// 说明：新增知识点时复制此文件，按字段填写即可
// ==========================================

const KP_DS_INTRO_COMPLEXITY = {
  id: "ds-intro-complexity",
  subject: "data-structure",
  chapter: "绪论",
  title: "时间复杂度与空间复杂度",
  tags: ["复杂度", "必考", "基础"],
  related: ["ds-linear-sequence", "ds-linear-linkedlist"],
  sections: [
    {
      type: "definition",
      content: "算法的时间复杂度 $T(n)$ 是算法执行时间的度量，空间复杂度 $S(n)$ 是算法所需的辅助空间（不含输入数据本身）。两者都使用**大 $O$ 表示法**描述当 $n \\to \\infty$ 时的渐近行为。"
    },
    {
      type: "key-points",
      items: [
        "$O(1) < O(\\log n) < O(n) < O(n\\log n) < O(n^2) < O(n^3) < O(2^n)$",
        "时间复杂度看**最深层循环**的执行次数",
        "空间复杂度主要看**递归调用栈深度**和**额外数组**",
        "加法规则：$T(n) = T_1(n) + T_2(n) = O(\\max(f(n), g(n)))$",
        "乘法规则：$T(n) = T_1(n) \\times T_2(n) = O(f(n) \\times g(n))$"
      ]
    },
    {
      type: "comparison",
      headers: ["复杂度", "名称", "典型算法"],
      rows: [
        ["$O(1)$", "常数阶", "直接存取"],
        ["$O(\\log n)$", "对数阶", "二分查找"],
        ["$O(n)$", "线性阶", "顺序查找"],
        ["$O(n\\log n)$", "线性对数阶", "快速排序/归并排序"],
        ["$O(n^2)$", "平方阶", "冒泡排序/选择排序"],
        ["$O(2^n)$", "指数阶", "递归斐波那契"]
      ]
    },
    {
      type: "code",
      lang: "c",
      content: "// 例1：O(n) — 单层循环\nfor (int i = 0; i < n; i++) { x++; }\n\n// 例2：O(n²) — 双层循环\nfor (int i = 0; i < n; i++)\n  for (int j = 0; j < n; j++)\n    x++;\n\n// 例3：O(log n) — 每次减半\nfor (int i = 1; i < n; i *= 2) { x++; }"
    },
    {
      type: "tip",
      content: "分析时间复杂度时，只保留**最高阶项**，忽略低阶项和常数系数。比如 $3n^2 + 2n + 1 = O(n^2)$。"
    },
    {
      type: "pitfall",
      content: "递归算法的空间复杂度要考虑**递归调用栈深度**！比如斐波那契递归 $F(n)$ 的时间复杂度是 $O(2^n)$，空间复杂度是 $O(n)$（栈深度为 n）。"
    },
    {
      type: "example",
      question: "分析以下代码的时间复杂度：\nfor(i = 1; i < n; i *= 2)\n  for(j = 0; j < i; j++)\n    x++;",
      answer: "$O(n)$",
      solution: "外层循环 $i$ 取 $1, 2, 4, 8, ..., 2^k < n$，共 $\\log n$ 轮。\n内层循环次数为 $1 + 2 + 4 + ... + 2^k = 2^{k+1} - 1 < 2n = O(n)$。\n所以总时间复杂度为 $O(n)$。"
    },
    {
      type: "memory-tip",
      content: "口诀：**常对线，线对平，平立指** —— $1 < \\log n < n < n\\log n < n^2 < n^3 < 2^n$"
    }
  ]
};
