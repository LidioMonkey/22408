// ==========================================
// 数学二：不定积分与定积分
// ==========================================
const KP_MATH_INTEGRAL = {
  id: "math-ch4-integral",
  subject: "math",
  chapter: "ch4-不定积分与定积分",
  title: "积分计算与应用",
  tags: ["积分", "必考", "计算"],
  related: ["math-ch2-derivative", "math-ch1-limit"],
  sections: [
    { type: "definition", content: "不定积分是求导的逆运算：$\\int f(x)dx = F(x)+C$ 其中 $F'(x)=f(x)$。定积分 $\\int_a^b f(x)dx$ 是曲边梯形的面积。" },
    { type: "formula", content: "$\\int_a^b f(x)dx = \\lim_{\\lambda\\to 0}\\sum_{i=1}^n f(\\xi_i)\\Delta x_i$" },
    { type: "key-points", items: ["换元法：$\\int f(\\varphi(x))\\varphi'(x)dx \\xrightarrow{u=\\varphi(x)} \\int f(u)du$", "分部积分：$\\int u dv = uv - \\int v du$（**反对幂指三**的顺序）", "三角代换：$\\sqrt{a^2-x^2}\\to x=a\\sin t$，$\\sqrt{a^2+x^2}\\to x=a\\tan t$", "定积分对称性：奇函数在对称区间积分为 0，偶函数加倍"] },
    { type: "comparison", headers: ["积分技巧", "适用场景", "典型代换"], rows: [["凑微分", "被积函数是复合函数", "$\\int f(g(x))g'(x)dx$"], ["分部积分", "乘积形式", "反对幂指三"], ["三角代换", "含根号", "$x=a\\sin t / a\\tan t / a\\sec t$"], ["有理函数", "分式积分", "拆成部分分式"]] },
    { type: "tip", content: "**反对幂指三**——分部积分时排在前面的作 $u$（被求导），排在后面的作 $dv$（被积分）：反三角函数 > 对数 > 幂函数 > 指数 > 三角。" },
    { type: "example", question: "求 $\\int_0^1 x e^x dx$", answer: "$1$", solution: "用分部积分：$\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C$，代入上下限得 $(1\\cdot e- e) - (0-1) = 1$。" },
    { type: "memory-tip", content: "积分计算三步：**一凑二换三分部**。定积分别忘了对称性——奇零偶倍，省一半计算。" }
  ]
};
