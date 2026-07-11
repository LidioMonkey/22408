// ==========================================
// 数学二：多元函数 + 微分方程
// ==========================================
const KP_MATH_MULTI = {
  id: "math-ch6-multivariable",
  subject: "math",
  chapter: "ch6-多元函数微积分",
  title: "多元函数与二重积分",
  tags: ["多元函数", "二重积分", "必考"],
  related: ["math-ch4-integral", "math-ch2-derivative"],
  sections: [
    { type: "definition", content: "多元函数 $z=f(x,y)$ 在点 $(x_0,y_0)$ 处的偏导数：$f_x(x_0,y_0)=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x,y_0)-f(x_0,y_0)}{\\Delta x}$。二重积分 $\\iint_D f(x,y)d\\sigma$ 是曲顶柱体的体积。" },
    { type: "key-points", items: ["求偏导：对 $x$ 求偏导时把 $y$ 当常数", "全微分：$dz = f_x dx + f_y dy$", "无条件极值：$f_x=0, f_y=0$ → $AC-B^2>0$ 有极值（$A<0$ 极大，$A>0$ 极小）", "二重积分直角坐标：先 $y$ 后 $x$ 或先 $x$ 后 $y$", "二重积分极坐标：$\\iint f(x,y)dxdy = \\iint f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta$"] },
    { type: "formula", content: "**极值判别式**：$A = f_{xx}(x_0,y_0), B = f_{xy}(x_0,y_0), C = f_{yy}(x_0,y_0)$" },
    { type: "comparison", headers: ["坐标系", "适用情况", "面积元"], rows: [["直角坐标", "矩形/直线边界", "$dxdy$"], ["极坐标", "圆/环形区域", "$rdrd\\theta$"]] },
    { type: "tip", content: "二重积分关键步骤：**画区域 → 定边界 → 选积分次序 → 计算**。坐标系选择：圆域用极坐标，否则用直角坐标。" },
    { type: "memory-tip", content: "偏导几何含义：对 $x$ 求偏导是沿 $x$ 方向的切线斜率。极值口诀：『$AC-B^2$ 正定极，负定鞍，零需判。』" }
  ]
};
const KP_MATH_ODE = {
  id: "math-ch7-ode",
  subject: "math",
  chapter: "ch7-微分方程",
  title: "常微分方程",
  tags: ["微分方程", "必考"],
  related: ["math-ch4-integral"],
  sections: [
    { type: "definition", content: "含有未知函数及其导数的方程称为微分方程。阶数是最高阶导数的阶数。解微分方程就是求满足方程的函数。" },
    { type: "comparison", headers: ["方程类型", "标准形式", "解法"], rows: [["可分离变量", "$y'=f(x)g(y)$", "分离→两边积分"], ["齐次方程", "$y'=f(y/x)$", "令 $u=y/x$"], ["一阶线性", "$y'+P(x)y=Q(x)$", "$y=e^{-\\int Pdx}[\\int Qe^{\\int Pdx}dx+C]$"], ["二阶常系数齐次", "$y''+py'+qy=0$", "特征方程 $\\lambda^2+p\\lambda+q=0$"]] },
    { type: "key-points", items: ["一阶线性通用解：$y = e^{-\\int Pdx}(\\int Qe^{\\int Pdx}dx + C)$", "二阶常系数：特征根 $\\lambda_1\\neq\\lambda_2 \\to y=C_1e^{\\lambda_1 x}+C_2e^{\\lambda_2 x}$", "$\\lambda_1=\\lambda_2 \\to y=(C_1+C_2x)e^{\\lambda_1 x}$", "共轭复根 $\\alpha\\pm i\\beta \\to y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$"] },
    { type: "tip", content: "解微分方程四步：**判类型 → 选方法 → 代公式 → 定常数**。一阶线性记得带积分因子，二阶齐次先解特征方程。" },
    { type: "example", question: "求微分方程 $y''+2y'+y=xe^x$ 的通解。", answer: "$y=(C_1+C_2x)e^{-x} + \\frac{1}{4}(x-1)e^x$", solution: "特征方程 $\\lambda^2+2\\lambda+1=0$，得 $\\lambda=-1$（二重）。齐次通解 $(C_1+C_2x)e^{-x}$。设特解 $y^*=(ax+b)e^x$ 代入得 $a=\\frac14, b=-\\frac14$。" }
  ]
};
