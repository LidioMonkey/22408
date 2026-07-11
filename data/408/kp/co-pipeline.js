// 408 计组：指令流水线
const KP_CO_PIPELINE = {
  id: "co-pipeline",
  subject: "computer-organization",
  chapter: "CPU",
  title: "指令流水线",
  tags: ["流水线", "CPU", "必考", "大题"],
  related: ["co-cache-memory"],
  sections: [
    {
      type: "definition",
      content: "指令流水线将指令执行过程分为多个阶段（取指 IF、译码 ID、执行 EX、访存 MEM、写回 WB），每个阶段由独立硬件并行处理不同指令，提高吞吐率。"
    },
    {
      type: "key-points",
      items: [
        "理想情况下，k 段流水线的加速比 $S = k$（每条时钟周期完成一条指令）",
        "实际加速比受**结构冒险、数据冒险、控制冒险**限制",
        "流水线CPI = 1 + 停顿(Stall)周期数/指令数",
        "超标量：每个时钟周期发射多条指令"
      ]
    },
    {
      type: "code",
      lang: "asm",
      content: "// 数据冒险示例：RAW（先写后读）\nADD R1, R2, R3  // R1 = R2 + R3  (WB阶段才写回)\nSUB R4, R1, R5  // R1还没写好就拿来用 → 冒险！\n\n// 解决方法：\n// ① 插入气泡（Stall）：暂停一个周期\n// ② 转发（Forwarding/Bypass）：从EX/MEM寄存器直接取结果"
    },
    {
      type: "comparison",
      headers: ["冒险类型", "原因", "解决方法"],
      rows: [
        ["结构冒险", "硬件资源冲突（如同一周期读写同一存储器）", "分离指令Cache和数据Cache"],
        ["数据冒险", "后续指令依赖前面指令的结果", "转发 + 插入气泡"],
        ["控制冒险", "分支/跳转指令改变PC值", "分支预测 + 延迟槽"]
      ]
    },
    {
      type: "tip",
      content: "数据冒险分三类：RAW（读后写）、WAR（写后读）、WAW（写后写）。流水线中**最常见的是 RAW**，转发是主要解决手段。转发条件：EX阶段的运算结果可以直接转发给下一个指令的EX阶段输入。"
    },
    {
      type: "example",
      question: "5段流水线（IF/ID/EX/MEM/WB）执行以下指令序列：\nI1: LW R1, 0(R2)\nI2: ADD R3, R1, R4\nI3: SW R3, 0(R5)\n问：存在哪些数据冒险？需要插入多少个 Stall？",
      answer: "I1→I2存在RAW冒险（R1），I2→I3存在RAW冒险（R3）。若无转发，需插入2个气泡；若采用转发，只需1个气泡（LW的MEM→EX转发需要1个Stall）。",
      solution: "I1的LW在MEM阶段才得到R1的值，I2在EX阶段就需要R1。转发路径：I1的MEM阶段结果 → I2的EX阶段输入，但LW的MEM→EX转发需要1个时钟周期的停顿（Load-Use冒险）。"
    },
    {
      type: "pitfall",
      content: "**Load-Use 冒险**是数据冒险中最特殊的——LW 指令的结果在 MEM 阶段才就绪，即使有转发也要多停顿一个周期。做计算题时看见 LW 后面紧跟着用其结果的指令，记得+1 Stall。"
    },
    {
      type: "memory-tip",
      content: "流水线五阶段：**I-D-E-M-W**（取-译-执-访-写）。冒险口诀：**结控数**（结构/控制/数据）——解题第一步先判断冒险类型。"
    }
  ]
};
