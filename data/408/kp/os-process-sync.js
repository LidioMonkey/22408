// 408 OS：进程管理
const KP_OS_PROCESS = {
  id: "os-process-sync",
  subject: "operating-system",
  chapter: "进程管理",
  title: "进程同步与互斥",
  tags: ["进程", "同步", "PV操作", "必考", "大题"],
  related: [],
  sections: [
    {
      type: "definition",
      content: "进程同步解决多进程**协作**问题（直接制约），进程互斥解决**共享资源**争用问题（间接制约）。核心工具是**信号量机制**（PV操作）。"
    },
    {
      type: "key-points",
      items: [
        "临界资源：一次只允许一个进程使用的资源（打印机、共享变量）",
        "临界区：访问临界资源的代码段",
        "P操作：$S = S - 1$；若 $S < 0$ 则阻塞",
        "V操作：$S = S + 1$；若 $S \\leq 0$ 则唤醒一个等待进程",
        "同步：前V后P（先执行者V，等待者P）",
        "互斥：同P同V（同一个信号量，初值=1，前后各P和V）"
      ]
    },
    {
      type: "code",
      lang: "c",
      content: "// 生产者-消费者问题（经典同步互斥）\nsemaphore mutex = 1;    // 互斥访问缓冲池\nsemaphore empty = n;    // 空闲缓冲区数\nsemaphore full = 0;     // 满缓冲区数\n\nProducer() {\n  while(1) {\n    produce_item();\n    P(empty);     // 申请空缓冲区\n    P(mutex);     // 互斥进入\n    add_to_buffer();\n    V(mutex);     // 退出\n    V(full);      // 增加满缓冲区\n  }\n}\n\nConsumer() {\n  while(1) {\n    P(full);      // 申请满缓冲区\n    P(mutex);\n    remove_from_buffer();\n    V(mutex);\n    V(empty);     // 增加空缓冲区\n    consume_item();\n  }\n}"
    },
    {
      type: "tip",
      content: "PV操作的顺序很重要！**P操作顺序不能颠倒**（先资源后互斥），否则可能死锁；V操作顺序无所谓。同步P在前，互斥P在后。"
    },
    {
      type: "pitfall",
      content: "区分**同步**和**互斥**信号量：同步信号量初值通常为 0 或 n（代表资源数），互斥信号量初值固定为 1。考试大题如果要求写信号量赋值，同步=资源数量，互斥=1。"
    },
    {
      type: "comparison",
      headers: ["调度算法", "特点", "是否可抢占", "优缺点"],
      rows: [
        ["FCFS", "先来先服务", "否", "公平但平均等待时间长"],
        ["SJF", "最短作业优先", "可选", "平均等待最短，但长作业可能饿死"],
        ["优先级", "高优先级先执行", "可选", "低优先级可能饿死（需老化）"],
        ["RR", "时间片轮转", "是", "响应快但上下文切换开销大"],
        ["多级队列", "分队列各用不同算法", "是", "兼顾交互和批处理"]
      ]
    },
    {
      type: "example",
      question: "3个进程并发执行，P1：V(S) V(S)；P2：P(S) P(S) V(S)；P3：P(S) P(S)。S初值为2。问是否有死锁？",
      answer: "会死锁。",
      solution: "P1执行两次V→S=4。P2执行两次P→S=2，P3执行两次P→S=0。此时P2执行到最后的V→S=1。但若P3先于P2执行P(S)P(S)，则S从2→0，然后P2执行P(S)P(S)时S从0→-1→-2，P2阻塞。此时P1再执行V(S)两次唤醒P2，但P3仍在P(S)处阻塞，因为S=-1。死锁条件：P3在等V(S)，但没有进程会再执行V(S)（P1已结束，P2在阻塞）。"
    },
    {
      type: "memory-tip",
      content: "**前V后P**——同步题先找出『谁先执行』，先执行的V，后执行的P。**同P同V**——互斥题在临界区前后各P和V。PV操作本质是『等条件→干活→通知别人』。"
    }
  ]
};
