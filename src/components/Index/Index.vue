<template>
  <div>
    <div class="swiper-container swiperview" :style="swiperHeight">
      <div class="swiper-wrapper">
      <div class="swiper-slide"><a href="#lianxi"><img src="@/assets/banner1_02.png" alt="" class="swiperviewimg"></a></div>
      <!-- <div class="swiper-slide"><img src="@/assets/banner2_02.png" alt="" class="swiperviewimg"></div> -->
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
      <a name="open"></a>
      <div class="developbg" :style="swiperHeight">
          <div class="developitem" :style="note1">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_10.png" alt="">
              <div class="developinfo">大数据</div>
              <ul class="infolist">
                <li>数据挖掘</li>
                <li>数据分析</li>
                <li>云计算</li>
                <li>黑暗数据</li>
              </ul>
            </div>
          </div>
          <div class="developitem" :style="note2">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_12.png" alt="">
              <div class="developinfo">人工智能</div>
              <ul class="infolist">
                <li>智能IVR</li>
                <li>智能查询</li>
                <li>情绪识别</li>
                <li>精准营销</li>
              </ul>
            </div></div>
          <div class="developitem" :style="note3">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_14.png" alt="">
              <div class="developinfo">游戏开发</div>
              <ul class="infolist">
                <li>游戏规则</li>
                <li>地方特色</li>
                <li>竞技游戏</li>
                <li>微信H5游戏</li>
              </ul>
            </div></div>
          <div class="developitem" :style="note4">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_16.png" alt="">
              <div class="developinfo">APP开发</div>
              <ul class="infolist">
                <li>电商APP</li>
                <li>社交APP</li>
                <li>教育APP</li>
                <li>应用APP</li>
              </ul>
            </div></div>
          <div class="developitem" :style="note5">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_13.png" alt="">
              <div class="developinfo">网站开发</div>
              <ul class="infolist">
                <li>移动网站</li>
                <li>电商网站</li>
                <li>集团/品牌站</li>
                <li>H5响应式网站</li>
              </ul>
            </div></div>
          <div class="developitem" :style="note6">
            <div class="iteminfo">
              <img class="itemicon" src="@/assets/td_20.png" alt="">
              <div class="developinfo">小程序开发</div>
              <ul class="infolist">
                <li>品牌小程序</li>
                <li>企业小程序</li>
                <li>电商小程序</li>
                <li>工具/应用小程序</li>
              </ul>
            </div></div>
      </div>
      <a name="yewu"></a>
      <div class="businessbg" :style="swiperHeight">
        <div class="businesswrap" :style="busine">
            <ul class="businessitem1 listtem1">
              <li>01 意向洽谈</li>
              <li>02 需求分析</li>
              <li>03 初步文档</li>
              <li>04 签署合同</li>
              <li>05 项目启动</li>
            </ul>
        <div class="businessitem2">
            <img src="@/assets/bp_03.png" alt="" mode="widthFix">
        </div>
         <ul class="businessitem1 businessitem111">
             <li>06 原型/技术</li>
             <li>07 程序开发</li>
             <li>08 产品测试</li>
             <li>09 线上运维</li>
             <li>10 售后维护</li>
         </ul>
        </div>
      </div>
      <a name="anli"></a>
      <div class="success" :style="swiperHeight">
        <div class="success-top">
            <div class="success-1"><span>國</span><span>研</span></div>
            <div class="success-2"><span>一家</span> <span>设计创新 ——’</span></div>
            <div class="success-3">注重体验创新的新型服务公司</div>
            <div class="success-4">DESIGN INNOVTION</div>
        </div>
        <div class="success-middle">
            <div v-for="(item,index) in middleData" :key="index" @click="middleClick111(index)">
                <span class="spanClass111" :class="currentIndex111 == index ? 'activeClass111' : ''">{{item.name}}</span>
            </div>
        </div>
        <div class="success-bottom">
            <div v-for="(item,index) in bottomData" :key="index" class="bottom-kuang">
                <img :src="item.src" alt="" class="bottom-img">
            </div>
        </div>
      </div>

      <a name="zixun"></a>
      <div>
        <div class="pop-1">营销咨询专家</div>
        <div class="pop-2">专家咨询(大咖一对一落地指导，手把手带您超近道)</div>
        <!-- <div class="pop-middle">
            <div v-for="(item,index) in popData" :key="index" @click="middleClick(index, item)">
                <span class="spanClass" :class="currentIndex == index ? 'activeClass' : ''">{{item.name}}</span>
            </div>
        </div>
        <div class="pop-bottom">
            <div class="pop-centent">
                <div><img :src="src" alt="" class="pop-img"></div>
                <div>
                    <div class="position1">{{nameLook}}</div>
                    <div class="position2">{{desc}}</div>
                </div>
                <div class="xiangqi">了解详情 >></div>
            </div>
        </div> -->


        <div class="zixun-1">
          <div class="zixun-1-1">
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_03.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">荆建林</div>
                <div class="zixun-111-2-2">现任清华大学经管学院课程教授、中国石化集团首席教育专家、中国战略研究会特约研究员、并担任该会企业经营与战略部主任。</div>
              </div>
            </div>
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_05.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">阎旭临</div>
                <div class="zixun-111-2-2">国内著名品牌专家；特色小镇和田园综合体产业规划专家；莫高丝路全球文旅首席品牌专家；广东江门市特聘文化专家。美国加州大学博士后中国区品牌课主讲教授。</div>
              </div>
            </div>
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_07.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">路长全</div>
                <div class="zixun-111-2-2">当代最具有价值的是实战营销专家；中国一系列营销案列的策划人和操作者,其所著《切割》《软战争》《营销纲领》等成为当代中国营销指南针式的著作。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="zixun-1" style="margin-top: -1.5%;">
          <div class="zixun-1-1">
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_12.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">万 钧</div>
                <div class="zixun-111-2-2">现受聘中国企业联合会、河北省政府高级企业培训师、南京市、青岛市政府创业辅导专家。31年多行业经营管理经验，多家机关机构及企业顾问专家。</div>
              </div>
            </div>
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_13.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">曹建明</div>
                <div class="zixun-111-2-2">八年的华为技术有限公司营销、营销管理、培训工作经验，国内知名的华为专家营销管理专家，绩效管理专家。</div>
              </div>
            </div>
            <div class="zixun-111">
              <div class="zixun-111-1"><img src="@/assets/teacher_14.png" alt=""></div>
              <div class="zixun-111-2">
                <div class="zixun-111-2-1">周 炜</div>
                <div class="zixun-111-2-2">美国AACTP国际注册培训师、工商管理硕士、实战型职业经理人、资深管理技能训练专家，现任多家企业管理顾问。</div>
              </div>
            </div>
          </div>
        </div>

        <div class="zixun-a">
          <div class="zixun-a-1">
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_03.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">荆建林</div>
                <div class="zixun-aaa-2-2">现任清华大学经管学院课程教授、中国石化集团首席教育专家、中国战略研究会特约研究员、并担任该会企业经营与战略部主任。</div>
              </div>
            </div>
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_05.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">阎旭临</div>
                <div class="zixun-aaa-2-2">国内著名品牌专家；特色小镇和田园综合体产业规划专家；莫高丝路全球文旅首席品牌专家；广东江门市特聘文化专家。美国加州大学博士后中国区品牌课主讲教授。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="zixun-a" style="margin-top: -1.5%;">
          <div class="zixun-a-1">
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_07.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">路长全</div>
                <div class="zixun-aaa-2-2">当代最具有价值的是实战营销专家；中国一系列营销案列的策划人和操作者,其所著《切割》《软战争》《营销纲领》等成为当代中国营销指南针式的著作。</div>
              </div>
            </div>
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_12.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">万 钧</div>
                <div class="zixun-aaa-2-2">现受聘中国企业联合会、河北省政府高级企业培训师、南京市、青岛市政府创业辅导专家。31年多行业经营管理经验，多家机关机构及企业顾问专家。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="zixun-a" style="margin-top: -1.5%;">
          <div class="zixun-a-1">
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_13.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">曹建明</div>
                <div class="zixun-aaa-2-2">八年的华为技术有限公司营销、营销管理、培训工作经验，国内知名的华为专家营销管理专家，绩效管理专家。</div>
              </div>
            </div>
            <div class="zixun-aaa">
              <div class="zixun-aaa-1"><img src="@/assets/teacher_14.png" alt=""></div>
              <div class="zixun-aaa-2">
                <div class="zixun-aaa-2-1">周 炜</div>
                <div class="zixun-aaa-2-2">美国AACTP国际注册培训师、工商管理硕士、实战型职业经理人、资深管理技能训练专家，现任多家企业管理顾问。</div>
              </div>
            </div>
          </div>
        </div>

    </div>

    <a name="peixun"></a>
    <div>
        <div class="cust-1">定制培训</div>
        <div class="cust-2">我们为客户进行个性化服务，帮助顾客快速进入市场运营状态</div>
        <div class="cust-4">
            <div v-for="(item, index) in custData" :key="index" class="cust-4-1" :class="currentIndex222 == index ? 'active222' : ''" @click="custClick(index, item)">
                {{item.name}}
            </div>
        </div>
        <div class="cust-3">
            <img :src="src222" alt="" class="img-1">
            <img :src="img1" alt="" class="img-2">
            <img :src="img1" alt="" class="img-3">
            <div class="text-1">{{desc1}}</div>
            <div class="text-2">{{desc2}}</div>
            <div class="text-3">{{desc3}}</div>
        </div>
        <div class="cust-5">
            请随时关注我们
        </div>
    </div>

      <a name="lianxi"></a>
      <div class="contactus" :style="opcetyimg">
            <div class="contactimg" >
              <div class="contactinfo contactbusi" style="margin-left: 8%;">
                <h1>产品服务 Pruduct Service</h1>
                <p style="margin-top:5rem"><span>大数据</span> <span class="floatright">游戏开发</span></p>
                <p><span>人工智能</span> <span class="floatright">营销推广</span></p>
                <p><span>微信公众号开发</span> <span class="floatright">APP开发</span></p>
                <p><span>微信小程序开发</span> <span class="floatright">网站开发</span></p>
              </div>
              <div class="contactinfo contactcenter">
                <img src="@/assets/bottom_07.png" alt="">
                <div>扫码添加客服微信</div>
                <p>copyright © 2018 版权所有 | 京ICP备19031808号-1</p>
              </div>
              <div class="contactinfo contactadd">
                <h1>010-62750413</h1>
                <div style="margin-top:5rem">
                  <img src="@/assets/bottom_10.png" alt="">
                  <span>北京朝阳区北苑东路19号院中国铁建广场F座</span>
                </div>
                <div>
                  <img src="@/assets/bottom_13.png" alt="">
                  <span>周一到周五 9:00-18:00</span>
                </div>
                <div>
                  <img src="@/assets/bottom_15.png" alt="">
                  <span>guoyanyjy@126.com</span>
                </div>
              </div>
            </div>
        </div>

      <a href="javascript:scrollTo(0,0);" class="backtop">返回顶部</a>
  </div>
  
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
      swiperHeight: '',
      screenWidth: null,
      note1: {
        backgroundImage: 'url(' + require('@/assets/td_02.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note2: {
        backgroundImage: 'url(' + require('@/assets/td_03.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note3: {
        backgroundImage: 'url(' + require('@/assets/td_04.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note4: {
        backgroundImage: 'url(' + require('@/assets/td_05.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note5: {
        backgroundImage: 'url(' + require('@/assets/td_06.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      note6: {
        backgroundImage: 'url(' + require('@/assets/td_07.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      busine: {
        backgroundImage: 'url(' + require('@/assets/bp_06.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      middleData: [
        {name: '直播'},
        {name: '旅游'},
        {name: '医疗'},
        {name: '电商'},
        {name: '游戏'},
        {name: '教育'},
        {name: '社交'},
      ],
      currentIndex111: 0,
      bottomData: [
        {src: ''},
        {src: ''},
        {src: ''},
      ],
      popData: [
                {name: '荆建林', desc: '现任清华大学经管学院课程教授，中国石化集团首席教育专家；中国战略研究会特约研究员，并担任该会企业经营与战略部主任。'},
                {name: '阎旭临', desc: '国内著名品牌专家；特色小镇和田园综合体产业规划专家；莫高丝路全球文旅首席品牌专家；广东江门市特聘文化专家。美国加州大学博士后中国区品牌课主讲教授。'},
                {name: '路长全', desc: '当代最具有价值的是实战营销专家；中国一系列营销案列的策划人和操作者,其所著《切割》《软战争》《营销纲领》等成为当代中国营销指南针式的著作。'},
                {name: '万 钧', desc: '现受聘中国企业联合会、河北省政府高级企业培训师、南京市、青岛市政府创业辅导专家。31年多行业经营管理经验，多家机关机构及企业顾问专家。'},
                {name: '曹建明', desc: '八年的华为技术有限公司营销、营销管理、培训工作经验，国内知名的华为专家营销管理专家，绩效管理专家。'},
                {name: '周 炜', desc: '美国AACTP国际注册培训师、工商管理硕士、实战型职业经理人、资深管理技能训练专家，现任多家企业管理顾问。'},
                {name: '许丽杰', desc: '现任国家商务部海外营销专家，具有深厚的专业背景以及十九年丰富的外贸实战与外贸管理经验。'},
                {name: '张甲全', desc: '美国AACTP国际注册培训师、工商管理硕士、实战型职业经理人、资深管理技能训练专家，现任多家企业管理顾问。'},
                {name: '梁 山', desc: '专注营销15年，成美营销公司（怕上火喝王老吉的制定团队）运营总监，联想电脑、中粮、广汽集团、百雀羚特聘营销顾问。'},
            ],
            currentIndex: 0,
            src: '',
            nameLook: '',
            desc: '',

            custData: [
                {name: '定制培训', desc1: '帮助机构制定合作方案和框架', desc2: '并定期优化更新', desc3: '让合作更顺畅'},
                {name: '在线学习', desc1: '教学、培训、考试通过网络融为一体', desc2: '教育资源、对象、时空无缝衔接', desc3: '随时随地、终生学习'},
            ],
            currentIndex222: 0,
            src222: '',
            img1: require('@/assets/Making-training_03.png'),
            desc1: '',
            desc2: '',
            desc3: '',
            opcetyimg: {
        background: 'url(' + require('@/assets/opcetyimg.jpg') + ') center no-repeat #B23F46',
        width: '100%',
        height: '100vh'
      }
    }
  },
  created() {
    this.swiperHeight = 'height:' + parseInt(document.body.clientWidth * 0.49) + 'px';
    this.imgSrc111(require('@/assets/live_03.png'), require('@/assets/live_05.png'), require('@/assets/live_07.png'));
    this.imgSrc(require('@/assets/teacher_03.png'), this.popData[0]);
    this.imgSrc222(require('@/assets/training_14.png'), this.custData[0]);
  },
  methods: {
    custClick(index, item) {
            this.currentIndex222 = index;
            switch (index) {
                case 0:
                    this.imgSrc222(require('@/assets/training_14.png'), item);
                    break;
                case 1:
                    this.imgSrc222(require('@/assets/duiwai_03.png'), item);
                    break;
            }
        },
        imgSrc222(path, item) {
            this.src222 = path;
            this.desc1 = item.desc1;
            this.desc2 = item.desc2;
            this.desc3 = item.desc3;
        },
        middleClick111(index) {
            this.currentIndex111 = index;
            console.log(index);
            switch (index) {
                case 0:
                    this.imgSrc111(require('@/assets/live_03.png'), require('@/assets/live_05.png'), require('@/assets/live_07.png'));
                    break;
                case 1:
                    this.imgSrc111(require('@/assets/tourism_03.png'), require('@/assets/tourism_05.png'), require('@/assets/tourism_07.png'));
                    break;
                case 2:
                    this.imgSrc111(require('@/assets/medical_03.png'), require('@/assets/medical_05.png'), require('@/assets/medical_07.png'));
                    break;
                case 3:
                    this.imgSrc111(require('@/assets/electricity_03.png'), require('@/assets/electricity_05.png'), require('@/assets/electricity_07.png'));
                    break;
                case 4:
                    this.imgSrc111(require('@/assets/game_03.png'), require('@/assets/game_05.png'), require('@/assets/game_07.png'));
                    break;
                case 5:
                    this.imgSrc111(require('@/assets/education_03.png'), require('@/assets/education_05.png'), require('@/assets/education_07.png'));
                    break;
                case 6:
                    this.imgSrc111(require('@/assets/social_03.png'), require('@/assets/social_05.png'), require('@/assets/social_07.png'));
                    break;
            }
        },
        imgSrc111(a, b, c) {
            this.bottomData[0].src = a;
            this.bottomData[1].src = b;
            this.bottomData[2].src = c;
        },


        middleClick(index, item) {
            this.currentIndex = index;
            switch (index) {
                case 0:
                    this.imgSrc(require('@/assets/teacher_03.png'), item);
                    break;
                case 1:
                    this.imgSrc(require('@/assets/teacher_05.png'), item);
                    break;
                case 2:
                    this.imgSrc(require('@/assets/teacher_07.png'), item);
                    break;
                case 3:
                    this.imgSrc(require('@/assets/teacher_12.png'), item);
                    break;
                case 4:
                    this.imgSrc(require('@/assets/teacher_13.png'), item);
                    break;
                case 5:
                    this.imgSrc(require('@/assets/teacher_14.png'), item);
                    break;
                case 6:
                    this.imgSrc(require('@/assets/teacher_18.png'), item);
                    break;
                case 7:
                    this.imgSrc(require('@/assets/teacher_19.png'), item);
                    break;
                case 8:
                    this.imgSrc(require('@/assets/teacher_20.png'), item);
                    break;
            }
        },
        imgSrc(path, item) {
            this.src = path;
            this.nameLook = item.name;
            this.desc = item.desc;
        }
    },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: false,
      slideToClickedSlide: false,
      calculateHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  },
  watch: {
    screenWidth(newVal,oldVal){
      console.log(newVal);
      this.swiperHeight = 'height:' + parseInt(newVal * 0.49) + 'px';
    }
  }
}
</script>

<style>
.backtop{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #cd2d37;
  text-align: center;
  line-height: 100px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  text-decoration: none;
  display: inline-block;
}

@media (max-width: 1800px) {
  .success{
    padding-top: 1rem !important;
  }
  .zixun-1{
    /* transform: scale(.9); */
    height: 18.5rem !important;
  }
}

@media (max-width: 1600px){
  .businesswrap{
    padding-top: 6%;
  }
  .iteminfo{
    transform: scale(.9);
    top: 10% !important;
  }
  .businessitem1 li {
    margin-top: 5% !important;
  }
  .success-top{
    transform: scale(.9);
  }
  .success-middle{
    margin-top: 0rem !important;
  }
  .success-bottom{
    margin-top: 7rem !important;
  }
  .bottom-kuang{
    height: 100% !important;
  }
  .success{
    padding-top: 2rem !important;
  }
  .zixun-1{
    height: 17.5rem !important;
  }
}

@media (max-width: 1450px){
  .success-bottom{
    transform: scale(.9);
    margin-top: 5rem !important;
  }
  .success{
    padding-top: 1rem !important;
  }
  .zixun-1{
    display: none !important;
  }
  .zixun-a{
    display: block !important;
    height: 16rem !important;
    width: 70% !important;
  }
  .cust-1{
    margin-top: 60rem !important;
  }
  .contactimg{
    transform: scale(.9);
  }
}

@media (max-width: 1300px){
  .iteminfo{
    transform: scale(.8);
    top: 6% !important;
  }
  .businessitem1 li {
    margin-top: 3% !important;
  }
  .success-bottom{
    transform: scale(.9);
    margin-top: 3rem !important;
  }
  .success{
    padding-top: 0rem !important;
  }
  .zixun-a{
    height: 16rem !important;
    width: 70% !important;
  }
  .contactimg{
    transform: scale(.8);
  }
}

.swiper-container-horizontal>.swiper-pagination-bullets{
  bottom: 6rem;
}
.swiper-pagination-bullet{
  width: 1.875rem;
  height: 4px;
  border-radius: 0;
}
.swiper-pagination-bullet-active{
  background: #fff;
}
.swiperview{
  width: 100%;
  margin-top: 5.5rem !important;
  text-align: center;
}
.swiperviewimg{
  width: 100%;
  height: 100%;
}

li{
  list-style: none
}
.developbg {
  width: 100%;
  /* height: 100vh; */
  display: flex;
}
.developitem {
  flex: 1;
  height: 100%;
}
.iteminfo{
  width: 62%;
  height: 100%;
  color: #FFF;
  margin: 0 auto;
  position: relative;
  top: 20%;
}
.itemicon{
  height: 9rem;
  margin: 0 auto;
  display: block;
}
.iteminfo .developinfo{
  position: absolute;
  text-align: center;
  top: 11rem;
  left: 15%;
  width: 70%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 3px solid #FFF;
}
.infolist{
  position: absolute;
  top: 15rem;
  width: 100%;
  height: 20rem;
  padding: 0;
  margin: 0;
}
.infolist li{
  margin: 0;
  padding: 0;
  line-height: 3rem;
  height: 3rem;
  text-align: center;
  border: 2px solid #ffffff;
  margin-top: 1rem;
}

.businessbg {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* padding-top: 6%; */
}
.businesswrap {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex; 
  justify-content: space-between;
  padding-top: 4%;
}
.businessitem1,
.businessitem2 {
  height: 95%;
  flex: 1;
}
.businessitem2 img {
  height: auto;
  width: 65%;
  margin-left: 20%;
}
.businessitem1 {
  box-sizing: border-box;
  padding: 5% 0;
}
.businessitem1 li {
  margin-top: 8%;
  list-style: none;
  width: 60%;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  border: 2px solid #b51322;
  border-radius: .6rem;
  font-size: 1.6rem;
  color: #b41520;
  cursor: default;
  margin-left: 40%;
}
.businessitem111 li {
  margin-left: 3%;
}
.listtem1 li {
  float: left;
}
.businessitem1 li:hover {
  background-color: #b51322;
  color: #fff;
  transition: background-color,color .3s ease-in 0s;
}

.success{
        width: 100%;
        height: calc(100vh - 5.5rem);
        background: #ca3c46;
        margin: 0 auto;
        padding-top: 4rem;
        box-sizing: border-box;
    }
    .success-top{
        width: 42rem;
        height: 13rem;
        margin: 0 auto;
        /* margin-top: 5.5rem; */
        color: #fff;
        position: relative;
        padding-top: 2rem;
        padding-left: 3rem;
    }
    .success-1 span:first-of-type{
        font-size: 10rem;
        font-weight: bold;
        font-family: '宋体';
    }
    .success-1 span:last-of-type{
        font-size: 6rem;
        font-family: '宋体';
        margin-left: -1rem;
    }
    .success-2{
        position: absolute;
        right: 9.7rem;
        top: 6.5rem;
    }
    .success-2 span:first-of-type{
        font-size: 1.5rem;
    }
    .success-2 span:last-of-type{
        font-size: 2rem;
    }
    .success-3{
        position: absolute;
        right: 6.5rem;
        bottom: 5rem;
        font-size: 1.5rem;
    }
    .success-4{
        position: absolute;
        top: 3rem;
        right: 6rem;
        font-size: 2.5rem;
        color: #d15e65;
    }
    .success-middle{
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;       
        width: 60%;
        margin: 0 auto; 
        color: #ffa4aa;
        font-size: 1.5rem;
        margin-top: 2rem;
        cursor: pointer;
    }
    .activeClass111{
        color: #fff;
        border-bottom: 2px solid #fff !important;
    }
    .spanClass111{
        display: inline-block;
        width: 5rem;
        text-align: center;
        height: 3rem;
    }
    .success-bottom{
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        width: 86%;
        margin: 0 auto; 
        margin-top: 7rem;
        height: 18rem;
    }
    .bottom-kuang{
        width: 30%;
	    height: 22rem;
    }
    .bottom-img{
        width: 100%;
	    height: 100%;
    }

    .pop-1{
    color: #a4121b;
    text-align: center;
    margin-top: 8rem;
    font-weight: bold;
    font-size: 1.5rem;
}
.pop-2{
    color: #666666;
    text-align: center;
    margin-top: 4rem;
}
.pop-middle{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;       
    width: 80%;
    margin: 0 auto; 
    color: #b51322;
    font-size: 1.5rem;
    margin-top: 2rem;
    cursor: pointer;
    margin-top: 6rem;
}
.spanClass{
    display: inline-block;
    width: 6.8rem;
    height: 3rem;
    border: solid 1px #ff8d94;
    text-align: center;
    line-height: 3rem;
    border-radius: .25rem;
}
.activeClass{
    background-color: #b51322;
    color: #fff;
}
.pop-bottom{
    width: 84%;
    height: 26rem;
    background-color: #790008;
    padding-top: 4rem;
    margin: 0 auto;
    margin-top: 7rem;
    box-sizing: border-box;
}
.pop-centent{
    width: 80%;
    height: 18rem;
    margin: 0 auto;
    background-color: #c1242e;
    overflow: hidden;
}
.pop-img{
    width: 10rem;
    height: 14rem;
    background: #fff;
    margin-left: 2rem;
    margin-top: 2rem;
}
.position1{
    position: relative;
    top: 3rem;
    left: 14rem;
    color: #fff;
    font-size: 1.5rem;
}
.position2{
    min-width: 44rem;
    max-width: 74%;
    position: relative;
    top: 6rem;
    left: 14rem;
    color: #fff;
    font-size: 1.2rem;
    line-height: 2rem;
}
.xiangqi{
    position: relative;
    top: 14rem;
    left: 14rem;
    color: #fff;
}

.cust-1{
    color: #a4121b;
    text-align: center;
    margin-top: 50rem;
    font-weight: bold;
    font-size: 1.5rem;
}
.cust-2{
    color: #666666;
    text-align: center;
    margin-top: 4rem;
}
.cust-3{
    width: 84%;
    height: 30rem;
    background: #a4121b;
    margin: 0 auto;
    margin-top: 5rem;
    position: relative;
}
.img-1{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.img-2{
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: 99;
    top: 7rem;
    left: 15rem;
}
.img-3{
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: 99;
    bottom: 7rem;
    right: 15rem;
    transform: rotate(180deg);
}
.text-1{
    width: 40rem;
    height: 3.4rem;
    position: absolute;
    z-index: 99;
    font-size: 2rem;
    color: #fff;
    left: 50%;
    margin-left: -20rem;
    text-align: center;
    top: 10rem;
}
.text-2{
    width: 40rem;
    height: 3.4rem;
    position: absolute;
    z-index: 99;
    font-size: 2rem;
    color: #fff;
    left: 50%;
    margin-left: -20rem;
    text-align: center;
    top: 13rem;
}
.text-3{
    width: 40rem;
    height: 3.4rem;
    position: absolute;
    z-index: 99;
    font-size: 2rem;
    color: #fff;
    left: 50%;
    margin-left: -20rem;
    text-align: center;
    top: 16rem;
}
.cust-4{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;       
    width: 20%;
    margin: 0 auto; 
    margin-top: 4rem;
    text-align: center;
    line-height: 2.2rem;
    cursor: pointer;
}
.cust-4-1{
  width: 7rem;
  height: 2.2rem;
  background-color: #ff8b92;
  border-radius: 4px;
  color: #fff;
}
.active222{
  background: #cd2d37;
}
.cust-5{
    width: 30rem;
	height: 4rem;
	background-color: #cd2d37;
    border-radius: 3rem;
    line-height: 4rem;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    margin-top: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
}

.contactus {
  width: 100%;
  height: 48rem !important;
  box-sizing: border-box;
  padding-top: 14%;
  margin-top: 52rem;
}
.contactimg {
  width: 82rem;
  height:80%;
  margin: 0 auto;
  color: #FFF;
  display: flex;
}
.contactinfo{
  flex: 1;
  color: #EDEFEE
}
.contactinfo h1{
  font-size: 2rem;
  color: #FFF;
}
.contactbusi p{
  width: 70%;
  height: 3rem;
  font-size: 1.5rem;
}
.floatright{
  float: right;
}
.contactcenter{
  text-align: center;
}
.contactcenter img{
  width: auto;
  height: 15rem;
}
.contactcenter div{
  font-weight: normal;
  height: 5rem;
  line-height: 5rem;
}
.contactcenter p{
  margin-top: 1rem;
  font-size: 14px;
}
.contactadd div{
  height: 3rem;
  color: #EDEFEE
}
.contactadd img{
  height: 2rem;
  vertical-align: middle;
  margin-right: 1rem;
}

.zixun-1{
  width: 84%;
  height: 19rem;
  background: #dd434c;
  margin: 0 auto;
  margin-top: 4rem;
  box-sizing: border-box;
  padding-top: 1.5%;
  padding-left: 1.5%;
  display: block;
}
.zixun-1-1, .zixun-a-1{
  width: 98%;
  height: 92%;
  display: flex;
  justify-content: space-between;
}
.zixun-111{
  width: 32%;
  height: 100%;
  background: #c92630;
  padding: .6rem !important;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.zixun-aaa{
  width: 48%;
  height: 100%;
  background: #c92630;
  padding: .6rem !important;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.zixun-111-1, .zixun-aaa-1{
  width: 44%;
  height: 100%;
  background: #fff;
}
.zixun-111-1 img, .zixun-aaa-1 img{
  width: 100%;
  height: 100%;
}

.zixun-111-2, .zixun-aaa-2{
  width: 56%;
  height: 100%;
  color: #fff;
}
.zixun-111-2-1, .zixun-aaa-2-1{
  width: 100%;
  height: 2.5rem;
  line-height: 3rem;
  padding-left: 1rem;
  box-sizing: border-box;
  font-size: 18px;
}
.zixun-111-2-2, .zixun-aaa-2-2{
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  line-height: 1.5rem;
  font-size: 14px;
  padding-top: 1rem;
}
.zixun-a{
  width: 60%;
  height: 18rem;
  background: #dd434c;
  margin: 0 auto;
  margin-top: 4rem;
  box-sizing: border-box;
  padding-top: 1.5%;
  padding-left: 1.5%;
  display: none;
}

</style>
