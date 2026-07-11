// ==========================================
// 数学二：极限与连续
// ==========================================
const KP_MATH_LIMIT = {
  id: "math-ch1-limit",
  subject: "math",
  chapter: "ch1-极限与连续",
  title: "极限的概念与计算",
  tags: ["极限", "必考", "基础"],
  related: ["math-ch2-derivative", "math-ch4-integral"],
  sections: [
    { type: "definition", content: "极限是微积分的基础工具。$\\lim_{x\\to x_0}f(x)=A$ 表示当 $x$ 无限接近 $x_0$ 时，$f(x)$ 无限接近常数 $A$。（$\\varepsilon$-$\\delta$ 语言定义）" },
    { type: "key-points", items: ["极限存在 $\\iff$ 左右极限存在且相等", "$\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$，$\\lim_{x\\to \\infty}(1+\\frac{1}{x})^x=e$ 是两个重要极限", "等价无穷小代换是求极限最快的方法"] },
    { type: "formula", content: "$\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$，$\\lim_{x\\to 0}(1+x)^{\\frac{1}{x}}=e$" },
    { type: "comparison", headers: ["无穷小阶数", "常见例子", "特点"], rows: [["$x$", "$\\sin x \\sim \\tan x \\sim \\arcsin x$", "一阶"], ["$x^2$", "$1-\\cos x \\sim \\frac{1}{2}x^2$", "二阶"], ["$x^n$", "$\\ln(1+x) \\sim x$", "需记忆等价代换表"]] },
    { type: "tip", content: "等价无穷小代换只能在**乘除法**中用，加减法中慎用！$x-\\sin x \\neq 0$（正确是 $\\sim \\frac{1}{6}x^3$）" },
    { type: "pitfall", content: "极限计算三大坑：① 等价代换在加减法中乱用 ② 极限存在性不分左右 ③ 洛必达法则条件不验证（$\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$）" },
    { type: "example", question: "求 $\\lim_{x\\to 0}\\frac{\\sin x - x}{x^3}$", answer: "$-\\frac{1}{6}$", solution: "$\\sin x = x - \\frac{x^3}{6} + o(x^3)$，代入得 $\\frac{-\\frac{x^3}{6}}{x^3} = -\\frac{1}{6}$。也可用洛必达法则。" },
    { type: "memory-tip", content: "**等价无穷小代换表用口诀记**：『sin tan arcsin，等价 x 是亲人；cos 减一是二分之 x 方，ln 一加 x 是 x 君。』" },
    { type: "note", content: "间断点分类：**第一类**（可去/跳跃）左右极限都存在；**第二类**（无穷/振荡）至少一个不存在。" }
  ]
};
