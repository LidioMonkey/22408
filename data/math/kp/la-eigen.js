// ==========================================
// 数学二：线性代数核心
// ==========================================
const KP_MATH_LINALG = {
  id: "math-la-eigen",
  subject: "math",
  chapter: "la-线性代数",
  title: "特征值与二次型",
  tags: ["特征值", "二次型", "线代", "必考"],
  related: ["math-ch4-integral"],
  sections: [
    { type: "definition", content: "设 $A$ 是 $n$ 阶方阵，若存在非零向量 $\\alpha$ 和数 $\\lambda$ 使得 $A\\alpha = \\lambda\\alpha$，则 $\\lambda$ 是 $A$ 的**特征值**，$\\alpha$ 是对应的**特征向量**。" },
    { type: "key-points", items: ["特征多项式 $|\\lambda E - A| = 0$ 的根就是特征值", "特征向量的线性组合仍是同特征值的特征向量", "不同特征值对应的特征向量线性无关", "实对称矩阵不同特征值的特征向量正交", "二次型 $f = x^T A x$ 可通过正交变换化为标准形"] },
    { type: "comparison", headers: ["矩阵变换", "特征值变化"], rows: [["$A$", "$\\lambda$"], ["$kA$", "$k\\lambda$"], ["$A^n$", "$\\lambda^n$"], ["$A^{-1}$", "$1/\\lambda$"], ["$A^T$", "$\\lambda$（相同）"], ["$A+kE$", "$\\lambda+k$"]] },
    { type: "formula", content: "$\\sum_{i=1}^n \\lambda_i = \\mathrm{tr}(A)$（迹）     $\\prod_{i=1}^n \\lambda_i = |A|$（行列式）" },
    { type: "tip", content: "二次型化为标准形三步骤：① 写出矩阵 $A$ ② 求 $A$ 的特征值 ③ 正交变换 $x=Qy$ 得标准形 $f=\\lambda_1 y_1^2+\\lambda_2 y_2^2+...$" },
    { type: "pitfall", content: "特征向量是**非零**向量！写特征向量时不要丢掉 $k\\neq 0$。另外，$|A-\\lambda E|$ 和 $|\\lambda E-A|$ 只是符号差 $(-1)^n$，特征值相同。" },
    { type: "example", question: "已知 $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$，求 $A$ 的特征值和特征向量。", answer: "$\\lambda_1=3,\\alpha_1=k(1,1)^T$；$\\lambda_2=-1,\\alpha_2=k(1,-1)^T$", solution: "$|\\lambda E-A|=\\begin{vmatrix}\\lambda-1&-2\\\\-2&\\lambda-1\\end{vmatrix}=(\\lambda-1)^2-4=$ $\\lambda^2-2\\lambda-3=(\\lambda-3)(\\lambda+1)=0$。$\\lambda=3$ 代入得特征向量 $(1,1)^T$，$\\lambda=-1$ 得 $(1,-1)^T$。" },
    { type: "memory-tip", content: "**特征值三大性质**：迹是和、行列式是积、不同特值向量无关。二次型：『**正交变换化标准，特征值就是系数**』。" }
  ]
};
