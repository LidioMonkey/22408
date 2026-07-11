// 408 计组：Cache 与内存层次
const KP_CO_CACHE = {
  id: "co-cache-memory",
  subject: "computer-organization",
  chapter: "存储系统",
  title: "Cache 与内存层次",
  tags: ["Cache", "存储层次", "必考"],
  related: [],
  sections: [
    {
      type: "definition",
      content: "Cache 是位于 CPU 和主存之间的**高速缓冲存储器**，利用**程序局部性原理**（时间局部性+空间局部性）来缩小 CPU 与主存之间的速度差距。"
    },
    {
      type: "key-points",
      items: [
        "时间局部性：刚访问过的地址可能很快再次访问 → 用 Cache 缓存",
        "空间局部性：刚访问过的地址附近的地址可能很快被访问 → 预取相邻块",
        "Cache 失效（Miss）后从主存取数据，写策略分为写直达（Write Through）和写回（Write Back）",
        "三种映射方式：直接映射、全相联映射、组相联映射"
      ]
    },
    {
      type: "comparison",
      headers: ["映射方式", "特点", "优点", "缺点"],
      rows: [
        ["直接映射", "主存块只能映射到Cache固定行", "实现简单，查找快", "冲突率高，块冲突时频繁替换"],
        ["全相联映射", "主存块可映射到Cache任一行", "空间利用率高，冲突率低", "需并行比较所有行，硬件贵"],
        ["组相联映射", "折中，分若干组，组内全相联", "冲突率适中，硬件适中", "综合性能好"]
      ]
    },
    {
      type: "formula",
      content: "$\\text{平均访问时间} = \\text{命中率} \\times \\text{Cache访问时间} + \\text{失效率} \\times \\text{主存访问时间}$"
    },
    {
      type: "tip",
      content: "Cache 计算题的套路：① 确定块大小（Byte/Word）② 计算地址的 Tag/Index/Offset 位数 ③ 计算容量。记住公式：Cache 总容量 = 数据容量 + 标记阵列容量（含有效位+脏位等）。"
    },
    {
      type: "example",
      question: "某计算机主存地址空间为 256MB，按字节编址，Cache 有 64 行，每行 64B。采用直接映射，求：① Cache 总容量（不含有效位和脏位）② 主存地址格式（Tag、Index、Offset 各多少位）",
      answer: "① 64×64B = 4KB；② 主存 256MB = $2^{28}$B → 28位地址。每行64B → Offset 6位；64行 → Index 6位；剩余 Tag = 28-6-6 = 16位。",
      solution: "地址划分：[Tag 16位 | Index 6位 | Offset 6位]。直接映射中 Index 决定主存块映射到Cache的哪一行。"
    },
    {
      type: "memory-tip",
      content: "**直接映射像宿舍**——每个班只能住固定房间；**全相联像自由选座**——随便坐；**组相联像分年级选座**——年级内随便坐。"
    },
    {
      type: "pitfall",
      content: "注意区分 Cache **容量** 和 **Cache 标记阵列容量**！Cache 总容量 = 数据存储容量 + 标记位（Valid + Dirty + Tag）+ 替换算法控制位。很多题只算数据容量，标记容量容易被忽略。"
    }
  ]
};
