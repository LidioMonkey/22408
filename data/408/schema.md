# 408 知识点模板规范

## 字段总览

```js
{
  // === 基础元信息 ===
  id: "string",           // 唯一标识，格式: "ds-章节-名称"
  subject: "string",      // 科目: data-structure / computer-organization / operating-system / computer-network
  chapter: "string",      // 章节名, e.g. "绪论", "线性表", "树"
  title: "string",        // 知识点名称
  tags: ["string"],       // 标签，用于搜索/筛选
  related: ["string"],    // 关联知识点ID

  // === 内容体（有序章节数组） ===
  sections: [
    {
      type: "definition",       // 定义/概念
      content: "markdown/公式"  // 支持 MathJax $...$
    },
    {
      type: "key-points",       // 要点列表
      items: ["item1", "item2"]
    },
    {
      type: "code",             // 代码示例
      lang: "c",                // 语言
      content: "int main()..."
    },
    {
      type: "comparison",       // 对比表格
      headers: ["方案A", "方案B"],
      rows: [
        ["优点1", "优点2"],
        ["缺点1", "缺点2"]
      ]
    },
    {
      type: "tip",              // 技巧/口诀
      content: "记住这个..."
    },
    {
      type: "pitfall",          // 易错点
      content: "容易混淆..."
    },
    {
      type: "example",          // 例题
      question: "题目",
      answer: "答案",
      solution: "解析（可选）"
    },
    {
      type: "formula",          // 公式
      content: "$E = mc^2$"
    },
    {
      type: "memory-tip",       // 记忆技巧
      content: "联想记忆法..."
    },
    {
      type: "timeline",         // 时间线/流程
      steps: ["step1", "step2", "step3"]
    },
    {
      type: "note",             // 注意事项
      content: "注意..."
    }
  ]
}
```

## sections 字段详解

| type | 必须字段 | 渲染效果 |
|------|---------|---------|
| `definition` | `content` | 左竖线标记的定义框 |
| `key-points` | `items[]` | 带圆点列表 |
| `code` | `lang`, `content` | 深色代码块+语法高亮 |
| `comparison` | `headers[]`, `rows[][]` | 表格 |
| `tip` | `content` | 黄色提示框 |
| `pitfall` | `content` | 红色警告框 |
| `example` | `question`, `answer` | 左右结构题目+答案 |
| `formula` | `content` | MathJax公式居中 |
| `memory-tip` | `content` | 紫色记忆卡片 |
| `timeline` | `steps[]` | 步骤箭头流程图 |
| `note` | `content` | 灰色注释框 |

## 示例

```js
{
  id: "ds-array-definition",
  subject: "data-structure",
  chapter: "线性表",
  title: "顺序表",
  tags: ["线性表", "顺序存储", "基础"],
  related: ["ds-linked-list"],
  sections: [
    { type: "definition", content: "顺序表是用**连续存储单元**存储线性表数据元素的..." },
    { type: "key-points", items: ["逻辑上相邻的元素物理位置也相邻", "可随机存取"] },
    { type: "code", lang: "c", content: "#define MaxSize 50\ntypedef struct {\n  ElemType data[MaxSize];\n  int length;\n} SqList;" },
    { type: "comparison", headers: ["操作", "顺序表", "链表"], rows: [["插入", "O(n)", "O(1)"] ] },
    { type: "tip", content: "插入删除=移动元素，平均移动 n/2 个" }
  ]
}
```

## 文件命名

`data/408/kp/{subject}-{chapter}-{name}.js`

例如：`ds-linear-sequence.js`、`os-page-table.js`
