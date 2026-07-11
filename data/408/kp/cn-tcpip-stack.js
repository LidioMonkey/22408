// 408 计网：TCP/IP 协议栈
const KP_CN_TCPIP = {
  id: "cn-tcpip-stack",
  subject: "computer-network",
  chapter: "传输层",
  title: "TCP 协议",
  tags: ["TCP", "传输层", "必考", "大题"],
  related: [],
  sections: [
    {
      type: "definition",
      content: "TCP（传输控制协议）是**面向连接**、**可靠**的传输层协议。提供流量控制、拥塞控制、差错控制机制，确保数据按序、不丢失、不重复地交付。"
    },
    {
      type: "key-points",
      items: [
        "三次握手建立连接（SYN → SYN+ACK → ACK）",
        "四次挥手释放连接（FIN → ACK → FIN → ACK）",
        "序号 = 上一次序号 + 数据长度（SYN/FIN 消耗一个序号）",
        "确认号 = 期望收到的下一个序号",
        "窗口大小 = 接收方剩余缓存空间"
      ]
    },
    {
      type: "code",
      lang: "text",
      content: "// 三次握手流程\nClient                              Server\n  |  -------- SYN=1, seq=x --------> |  LISTEN\n  |                                 |\n  |  <---- SYN=1, ACK=1, seq=y, --- |  SYN-RCVD\n  |         ack_seq=x+1             |\n  |                                 |\n  |  ----- ACK=1, seq=x+1, -------> |  ESTABLISHED\n  |         ack_seq=y+1             |\n  |                                 |\n  |  -------- 数据传输 ---------->  |"
    },
    {
      type: "comparison",
      headers: ["特性", "TCP", "UDP"],
      rows: [
        ["连接", "面向连接（三次握手）", "无连接"],
        ["可靠性", "可靠（确认+重传）", "不可靠（尽最大努力）"],
        ["流量控制", "滑动窗口", "无"],
        ["拥塞控制", "有（慢开始/拥塞避免/快重传/快恢复）", "无"],
        ["首部开销", "20-60字节", "8字节"],
        ["适用场景", "文件传输/网页/邮件", "视频/语音/游戏"]
      ]
    },
    {
      type: "tip",
      content: "三次握手的 **seq 和 ack** 计算是高频考点。记住：CLIENT 发的 seq=x，SERVER 回 ack=x+1 且自己的 seq=y；CLIENT 再回 ack=y+1。SYN 和 FIN 各占一个序号。"
    },
    {
      type: "pitfall",
      content: "区分「流量控制」与「拥塞控制」：流量控制是**端到端**的（接收方速度跟不上），通过滑动窗口实现；拥塞控制是**全网**的（网络中间节点过载），通过慢开始/拥塞避免/快重传/快恢复实现。"
    },
    {
      type: "example",
      question: "TCP 慢开始阶段，初始拥塞窗口=1MSS，阈值=16MSS。问经过几轮后拥塞窗口达到 20MSS？",
      answer: "第4轮后达到 20MSS。",
      solution: "慢开始每轮翻倍：1→2→4→8→16（到达阈值，进入拥塞避免）。第5轮：16+1=17，第6轮：18，第7轮：19，第8轮：20。所以从1开始翻倍3轮到8，然后第4到8轮线性增长到20，共8轮。注意：阈值=16时，当cwnd=16后进入拥塞避免（每个RTT+1）。"
    },
    {
      type: "memory-tip",
      content: "**三次握** = 确认双方收发能力正常。**四次挥** = 半关闭（一方停止发，另一方还可以发）。口诀：『发发发回，发回回回』——三次握：发SYN、回SYN+ACK、回ACK。"
    }
  ]
};
