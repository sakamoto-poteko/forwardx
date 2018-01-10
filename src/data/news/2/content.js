const img1 = require('./img/1.jpg');
const img2 = require('./img/2.jpg');
const html = `
<p>在12月11日的京东“2017全球新一代物流峰会”上，官方在开场环节公布的视频中出现一款新型仓储协作机器人，疑似京东在智能仓储中布局的新动作。经证实，该机器人是由一家名为灵动科技(forwardx.ai)的AI初创型公司研发。</p>
<p>如今，人工智能领域备受关注，行业发展下一步将着重于具体的应用场景，仓储、物流方向对智能机器人的需求是较突出领域之一。此前京东曾在综艺节目里曝光过目前正在使用的智能机器人负责分拣包裹，而最新曝光的灵动仓储协作机器人则可能是其下一个潜在的战略方向。</p>
<p>据了解，灵动科技是一家中美两地注册的人工智能机器人企业，旗下视觉感知轮式机器人搭载了行业领先的核心技术，包括机器视觉即时定位与环境理解技术(VSLAM)、多机运动决策与控制以及低速自动驾驶底盘系统三大方向。</p>
<p>目前，国内的商用智能移动机器人大多使用激光雷达实现定位与环境理解，即单线激光雷达SLAM技术(Simultaneous Localization and Mapping)，实现二维地图环境下的定位与导航。而灵动科技研发的视觉即时定位与环境理解技术(VSLAM)，以摄像头为主要传感器，完成三维空间的定位与环境理解，这种使用机器视觉的人工智能技术，属国内首创。</p>
<p>相对于激光定位技术，视觉定位技术具有传感器成本低、适用范围广泛、感知信息丰富，人机协同等优点，是全球机器人发展的一个明确方向。</p>
<p>在实际应用场景中，有室内自动驾驶能力的灵动仓储协作机器人，可根据物流仓的工作人员的人脸信息，得到拣货单，并跟踪拣货员到达库位协同拣货。更关键的是，机器人在满载后会自动返回打包区。这样的机器人设计，可帮助物流企业在无需改变仓库结构基础上，实现仓储内部物流的效率提升。</p>
<img src="${img1}" alt="">
<p>同时，在物流投递最后一公里需求越来越旺盛的背景下，楼宇及小区等较大封闭空间可自动投放的物流机器人也将大受欢迎。灵动科技的视觉感知轮式机器人可在该类应用场景下用于巡逻、安防、物流和保洁等综合任务。</p>
<p>另外，智能机器人也将在未来服务于普通用户，灵动科技首款面向C端的产品将在1月初的CES展上亮相。</p>
<p>官方消息显示，灵动科技成立于2016年，一年内完成了种子轮、天使轮和融资额达千万美金的A轮融资。其中，A轮两家领投方为国内顶级的风投企业。该笔投资用于提升 AI视觉交互能力轮式机器人的研发进度，其首款基于视觉感知的仓储协作机器人将在2018年初投入生产。</p>
<p>目前已有数家国内零售、物流和航空领域龙头企业与灵动科技接洽，希望获得优先采购机会。同时，国内某最大地产公司之一也在接洽采购灵动科技的小区安保及快递投递业务机器人。
据介绍，灵动科技创始人及团队中有前国家机器人大赛冠军、前甲骨文中国区云计算高管，以及中科院百人计划科学家，国内顶级VSLAM科学家等行业资深人士，团队获得十余项发明专利，还握有十余个全国及全球各项计算机、电子、机器人类大赛冠军。</p>
<img src="${img2}">
<p>公司创始人齐欧表示，灵动科技要成为视觉感知轮式机器人领域的先行者，通过更快、更强、更智能的技术产品解放劳动力，让我们的工作和生活变得更便捷。</p>
<p>有专家表示，过去的人工智能追求计算机模拟人，而下一步人工智能的发展方向是融入人类的各行各业，提高社会生产力，形成一种人机协同的系统。AI带来的生产力发展，促使如今的人工智能潮流迈向新一代，而灵动科技将成为人工智能走向2.0时代中的佼佼者之一。</p>
`;

module.exports = html;