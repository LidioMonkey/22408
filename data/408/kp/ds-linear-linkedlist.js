// ==========================================
// 408 知识点：单链表
// 模板版本: v1 | 对应 schema: data/408/schema.md
// ==========================================

const KP_DS_LINEAR_LINKEDLIST = {
  id: "ds-linear-linkedlist",
  subject: "data-structure",
  chapter: "线性表",
  title: "单链表",
  tags: ["线性表", "链式存储", "必考", "基础"],
  related: ["ds-linear-sequence", "ds-intro-complexity"],
  sections: [
    {
      type: "definition",
      content: "单链表通过**指针**将一组**任意存储位置**的结点链接起来。每个结点包含**数据域**和**指针域**（指向下一个结点）。头指针指向第一个结点，尾结点的指针为 `NULL`。"
    },
    {
      type: "key-points",
      items: [
        "优点：插入/删除仅修改指针（$O(1)$），无需移动元素",
        "缺点：不支持随机存取，查找需遍历（$O(n)$），存储密度低（多一个指针）",
        "带**头结点** vs 不带头结点：头结点不存数据，简化边界处理",
        "头插法：新结点插入头部 → 数据逆序",
        "尾插法：维护尾指针 → 数据顺序"
      ]
    },
    {
      type: "code",
      lang: "c",
      content: "typedef struct LNode {\n  ElemType data;\n  struct LNode *next;\n} LNode, *LinkList;\n\n// 头插法建立单链表\nLinkList HeadInsert(LinkList &L) {\n  L = (LinkList)malloc(sizeof(LNode));\n  L->next = NULL;  // 带头结点\n  int x; LNode *s;\n  while (scanf(\"%d\", &x) != EOF) {\n    s = (LNode*)malloc(sizeof(LNode));\n    s->data = x;\n    s->next = L->next;  // 新结点指向首元结点\n    L->next = s;        // 头结点指向新结点\n  }\n  return L;\n}\n\n// 按位查找（第 i 个）\nLNode* GetElem(LinkList L, int i) {\n  if (i < 1) return NULL;\n  LNode *p = L->next;  // 跳过头结点\n  int j = 1;\n  while (p && j < i) { p = p->next; j++; }\n  return p;\n}"
    },
    {
      type: "comparison",
      headers: ["操作", "带头结点", "不带头结点"],
      rows: [
        ["判空", "L->next == NULL", "L == NULL"],
        ["插入位序1", "统一处理", "需单独修改头指针"],
        ["删除位序1", "统一处理", "需单独修改头指针"],
        ["代码简洁度", "✅ 边界统一", "❌ 需分类讨论"]
      ]
    },
    {
      type: "tip",
      content: "带**头结点**的单链表操作统一、代码简洁，考研/408 默认使用带头结点的版本。"
    },
    {
      type: "pitfall",
      content: "链表操作三步骤：① 保存后继指针 ② 修改指针 ③ 检查边界。**顺序不能颠倒**，否则会断链！尤其在删除结点时，一定要先 `q = p->next; p->next = q->next; free(q);`"
    },
    {
      type: "example",
      question: "设计算法，在带头结点的单链表 L 中删除所有值为 x 的结点。",
      answer: "用双指针法（前驱 `pre` 和当前 `p`）遍历",
      solution: "void DeleteX(LinkList &L, ElemType x) {\n  LNode *pre = L, *p = L->next;\n  while (p) {\n    if (p->data == x) {\n      pre->next = p->next;\n      free(p);\n      p = pre->next;\n    } else {\n      pre = p;\n      p = p->next;\n    }\n  }\n}"
    },
    {
      type: "memory-tip",
      content: "链表操作牢记三个字：**接、断、收**。接（新结点接入）、断（旧连接断开）、收（收尾指针置 NULL）。"
    }
  ]
};
