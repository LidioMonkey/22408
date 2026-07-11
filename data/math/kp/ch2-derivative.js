// ==========================================
// 数学二：导数与微分
// ==========================================
const KP_MATH_DERIVATIVE = {
  id: "math-ch2-derivative",
  subject: "math",
  chapter: "ch2-导数与微分",
  title: "导数计算与中值定理",
  tags: ["导数", "中值定理", "必考"],
  related: ["math-ch1-limit", "math-ch4-integral"],
  sections: [
    { type: "definition", content: "导数 $f'(x_0)=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$ 表示函数在某点的**瞬时变化率**，也是曲线在该点的切线斜率。" },
    { type: "key-points", items: ["求导公式（16个基本初等函数导数）必须背熟", "复合函数求导：$f(g(x))' = f'(g(x)) \\cdot g'(x)$", "隐函数求导：方程两边对 $x$ 求导，把 $y$ 看成 $y(x)$", "参数方程：$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$", "高阶导数：莱布尼茨公式 $(uv)^{(n)}=\\sum C_n^k u^{(k)}v^{(n-k)}$"] },
    { type: "comparison", headers: ["中值定理", "条件", "结论", "几何意义"], rows: [["罗尔定理", "$f(a)=f(b)$", "$\\exists\\xi$ 使 $f'(\\xi)=0$", "水平切线"], ["拉格朗日", "连续+可导", "$\\frac{f(b)-f(a)}{b-a}=f'(\\xi)$", "斜率相等"], ["柯西", "两个函数", "$\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}$", "推广"]] },
    { type: "formula", content: "**莱布尼茨公式**：$(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)} v^{(n-k)}$" },
    { type: "tip", content: "辅助函数构造法：要证 $f'(\\xi)+g(\\xi)f(\\xi)=0$，构造 $F(x)=f(x)e^{\\int g(x)dx}$。" },
    { type: "memory-tip", content: "求导口诀：『**复合函数从外到内逐层求导，相乘就导数乘积分**』。中值定理：『罗尔端点值相等，拉格朗日差商成导，柯西推广到双函数。』" }
  ]
};
