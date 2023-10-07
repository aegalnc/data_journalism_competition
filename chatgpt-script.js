
// 获得DOM元素
const chatgpt_message_1_p = document.getElementById("chatgpt-message-1");
const user_message_1_p = document.getElementById("user-message-1");
const user_message_container_1 = document.getElementById("user-message-container-1");
const chatgpt_message_container_1 = document.getElementById("chatgpt-message-container-1");
const input_message_p = document.getElementsByClassName("input-message")[0];
const chat_messages = document.getElementsByClassName("chat-messages")[0];
const cursor = document.getElementById("cursor");
const send_button = document.getElementsByClassName("send-button")[0];
const chat_container = document.getElementsByClassName("chat-container")[0];

// 为message赋值

const title = "付费实习";
const user_message_1 = "那如果我想留学深造呢？";
const user_message_2 = "那我该怎么找实习？";
const user_message_3 = "那我要从哪里得知这些付费信息？"

const chatgpt_message_1 = "你的情况符合大多数人。根据智联招聘发布的《2022 大学生就业力调研报告》显示，2022年我国高校毕业生首次突破 1000 万大关，刷新历史记录。其中，有74%的毕业生有在校实习经历，高于2021 年的 57.9%。我国高校毕业生躺平大军逐渐减少，面对严峻的经济形势，大学生正在逐步走出舒适圈，走入“内卷”。";
const chatgpt_message_2 = "“求职难”已经是在校生必须正视的事实，无论是企业的“应届生要求两年工作经验”，还是学校的“毕业需提交两份实习资料”，早早实习已然成为大学生提高就业竞争力的重要规划。根据DT财经联合牛客撰写的《2022实习态度调查报告》显示，有10.6%的本科生在大一时开始第一段实习，在大二的有32.8%，而在大三有41.1%，在大四有15.4%，你现在开始实习并不晚。"
const chatgpt_message_3 = "境外留学形势仍然相当严峻。由于国内高校毕业生逐年增加，就业形势十分困难，不少毕业生为了暂避就业压力，纷纷选择升学读研读博。2015年，我国研究生考试报名人数有177万人，而2022年我国研考人数已高达457万人，境外留学成为另一种选择，分担国内升学压力";
const chatgpt_message_4 = "根据中国教育在线发布的《2022年中国学生出国留学趋势调查报告》显示，2019年我国出国留学人员总数为70.35万人，从2000年的3.9万人到2019年的70.35万人，增长了接近18倍。出国留学深造同样竞争激烈，留学申请中绩点、语言成绩、实习经历、科研经历等等都占据了相当大的比重。";
const chatgpt_message_5 = "我这边建议你选择“”。";
const chatgpt_message_6 = "你可以寻找一些求职公众号，例如下面的...";



// 选择专业
const major = {
  "business": {
    "user_message": "我是二本商科专业的大三学生，身边很多同学都有好几份实习了，但是我一份也没有，投简历也没回信，我该怎么办",
    "passages_info": [
      {
        "img": "image/b1.jpg",
        "title": "中金实习内推 | 中金行研实习生招聘",
        "href": "https://mp.weixin.qq.com/s/_YVV05yEWSq3ZGwoG-5FUw"
      },
      {
        "img": "image/b2.jpg",
        "title": "投行实习内推 | 华泰证券投行实习招聘",
        "href": "https://mp.weixin.qq.com/s/IFA15L2YLXfrD9l2jBZ5ig"
      },
      {
        "img": "image/b3.jpg",
        "title": "行研实地实习内推 | 国泰君安行研部实习生招聘",
        "href": "https://mp.weixin.qq.com/s/ERugu3HqaxBlb-yASh00sA"
      },
      {
        "img": "image/b4.jpg",
        "title": "日常实习 | 申万宏源、华泰联合证券、盈渊资本、海通证券等",
        "href": "https://mp.weixin.qq.com/s/ERugu3HqaxBlb-yASh00sA"
      },
      {
        "img": "image/b5.jpg",
        "title": "券商实习内推 | 招商证券行研/投行正式实习生招聘",
        "herf": "https://mp.weixin.qq.com/s/O2wGSfP2JoB-ieqZ-_oAgw"
      },
    ]
  },
  "internet": {
    "user_message": "我是二本互联网专业的大三学生，身边很多同学都有好几份实习了，但是我一份也没有，投简历也没回信，我该怎么办",
    "passages_info": [
      {
        "img": "image/i1.jpg",
        "title": "字节跳动实习内推 | 字节跳动商业化战略分析实习生招聘",
        "href": "https://mp.weixin.qq.com/s/4pDPS-mhhuJAN0QMzMHvjA"
      },
      {
        "img": "image/i2.jpg",
        "title": "互联网实习内推 | 百度产品正式实习生招聘",
        "href": "https://mp.weixin.qq.com/s/pOtxVnMvHKISPsBHo1w5qQ"
      },
      {
        "img": "image/i3.jpg",
        "title": "战略实习内推 | 小红书战略分析实习生招聘",
        "href": "https://mp.weixin.qq.com/s/bPBiThWEFgftVvs-o2BQtw"
      },
      {
        "img": "image/i4.jpg",
        "title": "互联网内推｜腾讯+美团+微软+阿里巴巴 实习生热招中, 尽快投递!",
        "href": "https://mp.weixin.qq.com/s/HNHjnlcWVBwOn8oyeEtHTQ"
      },
      {
        "img": "image/i5.jpg",
        "title": "互联网内推｜腾讯+快手+京东+爱奇艺实习生热招中,尽快投递!",
        "href": "https://mp.weixin.qq.com/s/0p3xyOWyK6b81_Ie60J_wg"
      },
    ]
  }
}
const selector = document.getElementById("selector");
const selector_buttons = Array.from(document.getElementsByClassName("selector_button"));

let str_major;
selector_buttons.forEach(ele => {
  ele.addEventListener("click", () => {
    selector.style.display = "none";
    $(".blur").toggleClass("blur");
    $(".icons").addClass("down");
    str_major = ele.id;
    cursor.classList.add("cursor")
  })
})


// 逐字渲染消息
function render_message(message_p, message) {
    let i = 0;
    return new Promise((resolve) => {
      function interval_callback() {
        if (i < message.length) {
          message_p.innerHTML += message[i];
          i++;
          if (message === chatgpt_message_5 && (message.length - i) === 2) {
            const span_wrap = document.createElement("div");
            message_p.appendChild(span_wrap);
            span_wrap.classList.add("title_wrap");

            const span = document.createElement("span");
            span_wrap.appendChild(span);
            span.classList.add("title");

            for (let j = 0; j < title.length; j++) {
              span.innerHTML += title[j];
            }

            const value = window.getComputedStyle(span).getPropertyValue("font-size");
            span_wrap.setAttribute("style", "width: " + (parseFloat(value.slice(0, -2)) * 4) + "px; height: " + parseFloat(value.slice(0, -2)) + "px");

            const a_left = span.getBoundingClientRect().left - chat_container.getBoundingClientRect().left;
            const a_top = span.getBoundingClientRect().top - chat_container.getBoundingClientRect().top;
            const left_offset = span.getClientRects()[0].left - chat_container.getClientRects()[0].left;
            const top_offset = span.getClientRects()[0].top - chat_container.getClientRects()[0].top;
            span.setAttribute("style", "position: absolute; left: " + left_offset + "px; top: " + top_offset + "px")
            console.log(a_left, a_top, left_offset, top_offset);
          }

          if ($(".chat-messages")[0].scrollHeight - $(".chat-messages")[0].scrollTop - $(".chat-messages")[0].clientHeight > 1) {
            $(".chat-messages")[0].scrollTop = $(".chat-messages")[0].scrollHeight - $(".chat-messages")[0].clientHeight;
            console.log("ok")
          }
        } else {
          clearInterval(render_message_interval);
          resolve();
        }
      }
    
      const render_message_interval = setInterval(interval_callback, 100); 
    });
  }

  // 用户输入
  function input_message(user_message) {
    $(".input-message").html('');
    return render_message(input_message_p, user_message);
  }
  
  // chatgpt回复
  function chatgpt_reply(chatgpt_message) {
    const chatgpt_message_container = document.createElement('div');
    chat_messages.appendChild(chatgpt_message_container);
    chatgpt_message_container.classList.add('chatgpt-message-container');
  
    const chatgpt_avator = document.createElement('img');
    chatgpt_message_container.appendChild(chatgpt_avator);
    chatgpt_avator.classList.add('chatgpt-avatar');
    chatgpt_avator.src = "image/chatgpt.png";

    const chatgpt_message_p = document.createElement('p');
    chatgpt_message_container.appendChild(chatgpt_message_p);
    chatgpt_message_p.classList.add('chatgpt-message');
  
    return render_message(chatgpt_message_p, chatgpt_message);
    
  }

  // 提交input_message
  function submit_input_message(user_message) {
    // 清空input_message
    $(".input-message").html('');
    // 添加user-message
    const user_message_container = document.createElement('div');
    chat_messages.appendChild(user_message_container);
    user_message_container.classList.add('user-message-container');
  
    const user_avator = document.createElement('img');
    user_message_container.appendChild(user_avator);
    user_avator.classList.add('user-avatar');
    user_avator.src = "image/user-avatar.png";

    const user_message_p = document.createElement('p');
    user_message_container.appendChild(user_message_p);
    user_message_p.classList.add('user-message');
    for (let i = 0; i < user_message.length; i++) {
      user_message_p.innerHTML += user_message[i];
    }
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300)
    })
  }


// 鼠标移动的回调函数
cursor.addEventListener("animationend", () => {
  input_message(major[str_major].user_message)
  .then(() => 
    send_button.classList.add("flash")
  )
})
// submit第一条信息
send_button.addEventListener("animationend", () => {
  submit_input_message(major[str_major].user_message)
  .then(() => chatgpt_reply(chatgpt_message_1))
  .then(() => chatgpt_reply(chatgpt_message_2))
  .then(() => input_message(user_message_1))
  .then(() => submit_input_message(user_message_1))
  .then(() => chatgpt_reply(chatgpt_message_3))
  .then(() => chatgpt_reply(chatgpt_message_4))
  .then(() => input_message(user_message_2))
  .then(() => submit_input_message(user_message_2))
  .then(() => chatgpt_reply(chatgpt_message_5))
  .then(() => {
    setTimeout(() => {
      const span = document.getElementsByClassName("title")[0];
      span.classList.add("magnify");
      $("#after_title_blur").addClass("after_title_blur");
      span.addEventListener("animationend", () => {
        $(".prompt").eq(0).css("display", "block");
      })
    }, 1000)
  })
})

$(".prompt").eq(0).click(() => {
  $(".after_title_blur").remove();
  $(".user-message-container").remove();
  $(".chatgpt-message-container").remove();
  $(".prompt").eq(0).css("display", "none");
  input_message(user_message_3)
  .then(() => submit_input_message(user_message_3))
  .then(() => chatgpt_reply(chatgpt_message_6))
  .then(() => {

    // 添加推文
    const passages_wrap = document.createElement('div');
    passages_wrap.classList.add("passages_wrap");
    const chatgpt_message_container = document.getElementsByClassName("chatgpt-message-container")[0];
    chatgpt_message_container.appendChild(passages_wrap);
    const passages = document.createElement('div');
    passages.classList.add("passages");
    passages_wrap.appendChild(passages)
    for (let i = 0; i < 5; i++) {
      const passage = document.createElement('div');
      passage.classList.add("passage");
      passages.appendChild(passage);
      const passage_image = document.createElement('img');
      passage_image.classList.add("passage_image");
      passage.appendChild(passage_image);
      passage_image.src = major[str_major].passages_info[i].img;
      const passage_title = document.createElement('a');
      passage_title.classList.add("passage_title");
      passage.appendChild(passage_title);
      passage_title.innerHTML = major[str_major].passages_info[i].title;
      passage_title.href = major[str_major].passages_info[i].href
    }
    //添加下滑按钮
    $(".prompt").eq(1).css("display", "block");
  })
})

$(".prompt").eq(1).click(() => {
  $('html, body').animate({
    scrollTop: $(".map").eq(0).offset().top,
  }, 'slow')
});
// hover弹出推文卡片
/*$(".passage").each(function() {
  $(this).mouseover(function() {
    $(this).addClass("focus");
})})
$(".passage").each(function() {
  $(this).mouseleave(function() {
    $(this).addClass("restore");
    $(this).removeClass("focus");
})})*/


// 重构元素slide in
function delayed_slide_in() {
  const pre_slide = document.getElementsByClassName("pre_slide");
  const is_added = [];
  const sliding_position = [];
  for (let i = 0; i < pre_slide.length; i++) {
    sliding_position.push(pre_slide[i].getBoundingClientRect().top + document.documentElement.scrollTop);
    is_added.push(false)
  }
  window.addEventListener("scroll", () => {
    for (let i = 0; i < pre_slide.length; i++) {
      if (!is_added[i] && (scrollY  + window.innerHeight >= sliding_position[i])) {
        pre_slide[i].classList.add("slide");
        is_added[i] = true;
      }
    }
  })
}
delayed_slide_in();







// scroll监听第二页chatgpt
/*function once_listener_scroll(scroll_std, once, callback) {
  window.addEventListener("scroll", () => {
    console.log("scrollY:" + scrollY);
    if (scrollY >= scroll_std && once) {
      callback();
      once = false;
    }
  })
}

let second_chatgpt_show = true;
const second_chatgpt_scroll_std = window.innerHeight - 150;
console.log(second_chatgpt_scroll_std)
function second_chatgpt_callback() {
  input_message(input_message_p[1], user_message_5)
  .then(() => submit_input_message(input_message_p[1], chat_messages[1], user_message_5))
  .then(() => chatgpt_reply(chat_messages[1], chatgpt_message_5))
}
once_listener_scroll(second_chatgpt_scroll_std, second_chatgpt_show, second_chatgpt_callback);*/



// map覆盖
/*function map_cover() {
  const map = document.getElementsByClassName("map")[0];
  window.addEventListener("scroll", () => {
    const new_top = Math.max(0, (3 * window.innerHeight - scrollY))
    map.style.top = new_top + 'px';
    console.log(scrollY);
  })
}
map_cover();*/

// 下滑一个窗口
/*function scroll_viewport_down() {
  const buttons = document.querySelectorAll(".scroll");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      function interval_callback() {
        if (window.scrollY <= (i + 1) * (window.innerHeight)) {
          window.scrollBy(0, 15);
        } else {
          clearInterval(scroll_viewport_downInterval);
        }
      }
      
      const scroll_viewport_downInterval = setInterval(interval_callback, 1)
    }) 
  }
}

scroll_viewport_down();*/

$(document).ready(function() {
    $(".scroll").eq(0).click(function() {
      var scrolling = false;
      if (!scrolling) {
        scrolling = true;
        $('html, body').animate({
          scrollTop: $(".container").eq(1).offset().top,
        }, 'slow')
        scrolling = false;
      } 
    })
    $(".scroll").eq(1).click(function() {
      var scrolling = false;
      if (!scrolling) {
      scrolling = true;
        $('html, body').animate({
          scrollTop: $(".map").eq(0).offset().top,
        }, 'slow')
        scrolling = false;
      }
    })
  })
// 实现提示词闪烁
/* const prompt = document.getElementsByClassName("prompt")[0];
setInterval(() => {
  prompt.classList.toggle("prompt");
}, 500) */

// 控制小人位置
// function control_position() {
//   console.log("ok");
//   const reature = document.getElementById("reature_background");
//   const reality_charactor = document.getElementById("reality_charactor");

//   window.addEventListener("scroll", () => {

//     const rect = reature.getBoundingClientRect();
//     const end_line = 2 * window.innerHeight;
//     const rect_top = - rect.top;

//     if (rect_top >= 0 && rect_top <= end_line) {
//       const pre_top = window.innerHeight;
//       const pre_right = window.innerWidth / 3;
//       const new_top = pre_top + rect_top;
//       const new_right = pre_right + (window.innerWidth / 6) / (2 * window.innerHeight) * rect_top;
//       console.log("new_top" + new_top)
//       reality_charactor.setAttribute("style", "top: " + new_top + "px; right: " + new_right + "px;")
//     }
//   })
// }
// control_position();

$(document).ready(function() {
  $(window).scroll(function() {
    $(".pure_student").each(function(index, element) {
      var rect = element.getBoundingClientRect();
      if (rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
        $(element).addClass("pure_student_animation");
      } else {
        $(element).removeClass("pure_student_animation");
      }
    });
  });
});



// 地图覆盖出现卡片
const svgObject = document.getElementById('svg-object');
const card = document.getElementsByClassName("card")[0];
const card_wrap = document.getElementsByClassName("card_wrap")[0];
const area = document.getElementById("area");
const company = document.getElementById("company");
const secard = document.getElementsByClassName("secard")[0];
const industry  = document.getElementsByClassName("industry")[0];
const date = document.getElementsByClassName("date")[0];
const representative = document.getElementsByClassName("representative")[0];
const city = document.getElementsByClassName("city")[0];
const test = document.getElementsByClassName("test")[0];
const mapobj = document.getElementsByClassName("map")[0];
var on_secard = false;
var on_card = false;
var on_p = false;
var on_ele = false;

window.addEventListener("load", function() {
    const svgDocument = svgObject.contentDocument;
    console.log(svgObject);
    console.log(svgDocument);
    var provinces = Array.from(svgDocument.getElementsByClassName("province"));
    console.log(provinces);
    provinces.forEach(element => {

      const last_fill = element.style.fill;
      element.addEventListener("mouseover", (event) => {
        
        var mouseX = event.clientX; // 获取鼠标相对于浏览器窗口左上角的横坐标
        var mouseY = event.clientY; // 获取鼠标相对于浏览器窗口左上角的纵坐标
        
        
        
        for (var key in map) {
          if (map.hasOwnProperty(key) && typeof map[key] === 'object' && 'data' in map[key] && map[key].data !== '' ) {
            element.style.fill = "pink";
            const card = this.document.createElement("div");
            mapobj.appendChild(card);
            card.classList.add("card");
            const area = this.document.createElement("div");
            card.appendChild(area);
            area.classList.add("area");
            area.innerHTML = map[key].title;
            map[key].data.forEach((ele, index) => {
              const company = this.document.createElement("div");
              card.appendChild(company);
              company.classList.add("company");
              const company_name = this.document.createElement("div");
              company.appendChild(company_name);
              company_name.classList.add("company_name");
              company_name.innerHTML = ele.split(',')[0];
              const content = this.document.createElement("div");
              company.appendChild(content);
              content.classList.add("content");
              const left = this.document.createElement("div");
              content.appendChild(left);
              left.classList.add("left");
              const industry = this.document.createElement("p");
              left.appendChild(industry);
              industry.classList.add("industry");
              industry.innerHTML = ele.split(',')[5];
              const date = this.document.createElement("p");
              left.appendChild(date);
              date.classList.add("date");
              date.innerHTML = ele.split(',')[2];
              const right = this.document.createElement("div");
              content.appendChild(right);
              right.classList.add("right");
              const city = this.document.createElement("p");
              right.appendChild(city);
              city.classList.add("city");
              city.innerHTML = ele.split(',')[4];
              const representative = this.document.createElement("p");
              right.appendChild(representative);
              representative.classList.add("representative");
              representative.innerHTML = ele.split(',')[1];
            });
          }
        }          
      })

      element.addEventListener("mouseleave", () => {
        console.log("leave")
        const card = this.document.getElementsByClassName("card")[0];
        card.remove()
        element.style.fill = last_fill;
      })

    });

    card_wrap.addEventListener("mouseover", () => {
      on_card = true;
      console.log("on_card" + on_card)
    })
    card_wrap.addEventListener("mouseleave", () => {
      on_card = false;
      console.log("on_card" + on_card)
    })
    window.addEventListener("mousemove", () => {
      setTimeout(() => {
        if (!on_ele && !on_card) {
          card_wrap.style.display = "none";
          const companies = Array.from(card.getElementsByClassName("company"));
          companies.forEach((ele, index) => {
            card.remove(ele);
          })

        }
      }, 100)
      
    })
});

  const map = {
    "Beijing": {
      "title": "北京市",
      "data": [
        "风灵创景（北京）技术有限公司,李媛,2011-07-19,北京市,北京市,科技推广和应用服务业,www.combofin.cn",
        "风灵创景（北京）技术有限公司,李媛,2011-07-19,北京市,北京市,科技推广和应用服务业,www.combofin.cn",
        "三节课信息咨询（北京）有限公司,后显慧,2015-01-13,北京市,北京市,商务服务业,www.sanjieke.cn",
        "北京多知科技有限公司,李好宇,2013-11-21,北京市,北京市,科技推广和应用服务业,www.kcl.pub",
        "职派咨询（北京）有限责任公司,魏铼,2015-05-13,北京市,北京市,商务服务业,http://www.futuretour.cn",
      ],
      "comment": [
        "“正式实习根本买不到，学校不好过不了公司审核关，顶多黑工罢了。学校好，能买到的其实不用花钱就能去了，利用信息差骗学生的钱真的很可耻”",
        "“因为大多数人投简历都石沉大海，又没有背景关系，根本填补不了留学所需要的实习bg”",
        "“我也问过，随便一个什么公司的实习就要一万多，太离谱了”",
        "“我其实不太明白，愿意花几万买实习还没负担的家庭，多少拐弯抹角也能塞一个不要钱的免费实习生去各种公司吧,北京不会真的有人信这些吧”",
      ]
      
  },
  "Anhui": {
    "title": "安徽省",
    "data": [
      "安徽思杰拓信息科技有限公司,翁梅玉,2018-10-22,安徽省,合肥市,科技推广和应用服务业,www.cepingvip.com",
    ]
  },
  "Guangdong": {
    "title": "广东省",
    "data": [
      "深圳永葆好奇科技有限公司,李亚平,2015-03-18,广东省,深圳市,软件和信息技术服务业,http://www.ciweishixi.com/",
      "广州精通教育科技有限公司,刘维嘉,2007-07-13,广东省,广州市,研究和试验发展,http://www.gzjingtong.com",
      "深圳找份工作科技有限公司,杨延霖,2015-04-14,广东省,深圳市,互联网和相关服务,http://icebear.me/",
      "海道（深圳）教育科技有限责任公司,王为,2018-01-04,广东省,深圳市,软件和信息技术服务业,http://www.hdedu.com",
      "深圳市远界管理咨询有限公司,袁宇立,2004-09-07,广东省,深圳市,商务服务业,linklearn.com.cn",
    ],
    "comment": [
      "“这种我觉得可以举报了”",
      "“这是付费打黑工嘛”",
      "“没有相关经历 四大八大都进不了吧”",
      "“傻子才给钱内推，你通过面试，内推的那个人还可以拿到推荐奖励呢，两边收钱”",
      "“线下实习还好，线上真的是智商税”",
    ]
  },
  "Hubei": {
    "title": "湖北省",
    "data": [
      "武汉鸣鸾信息科技有限公司,王欣欣,2011-08-10,湖北省,武汉市,研究和试验发展,http://haitou.cc",
      "入行（武汉）教育科技有限公司,杨昊,2018-05-10,湖北省,武汉市,软件和信息技术服务业,0",
    ],
    "comment": [
      "“付费实习难绷，实习应该挣钱才对”",
      "“八大不是随便去吗？”",
      "“我之前也咨询过付费实习，那个人说 实在不行不来也可以直接把证明给你开好记录查得到 背调也能过”",
      "“花两天给你讲讲做了什么出去跟别人也好说。”",
      "“姐妹 完全可以自己投啊 投行招日常实习生jd很多的…遇到项目缺人的 立马要了 成都可能是比较少 其他”",
      "“地方的真的不至于付费”",
      "“这是赌概率还是一定保呢？”",
    ]
  },
  "Shanghai": {
    "title": "上海市",
    "data": [
      "上海学无国界教育科技股份有限公司,郝斐,2011-01-14,上海市,上海市,商务服务业,http://www.myoffer.com",
      "上海高顿教育科技有限公司,李锋,2014-04-15,上海市,上海市,教育,http://group.gaodun.com",
      "上海微令信息科技有限公司,彭一楠,2013-12-09,上海市,上海市,专业技术服务业,www.schedline.com",
      "上海乔布堂信息科技有限公司,马德远,2011-10-24,上海市,上海市,科技推广和应用服务业,0",
      "上海凯洛格信息科技有限公司,卢明霞,2011-04-21,上海市,上海市,科技推广和应用服务业,www.careerfrog.com.cn",
    ],
    "comment": [
      "“刚刚加了一个内推的说帮我推30个公司要收1w-3w，还说不保证能进而且不退钱，大概觉得我像冤大头”",
      "“付费上班成真了 太魔幻现实主义了”",
      "“我就搞不懂了，现在居然付费上班之风盛行！！！什么世道啊！”",
      "“就好奇问问，上班后同事会知道是内推进的吗”",
      "“当时也是遇见一个说可以远程实习的，加上以后才说付费，我问多少钱，她说2w，真敢要啊”"
    ]
  },
  "Sichuan": {
    "title": "四川省",
    "data": [
      "成都先胜信息科技有限公司,王梓帆,2017-01-10,四川省,成都市,软件和信息技术服务业,www.offerxiansheng.com",
      "成都来者教育科技有限公司,吕勇,2013/11/12,四川省,成都市,教育,www.dreambigcareer.com",
      "盛世创客（成都）科技有限公司,陶然,2020-10-10,四川省,成都市,广播、电视、电影和录音制作业,http://hrclass.com.cn/",
      "成都焉得科技有限公司,唐黄铎,2015-10-19,四川省,成都市,软件和信息技术服务业,0",
      "成都觅新教育咨询有限公司,王军,2021/10/27,四川省,成都市,商务服务业,0",
    ],
    "comment": [
      "“纯粹骗钱的”",
      "“我同学在深信服工作，他们每个员工都有内推的机会，区别只在于推荐的人能力够不够拿到offer”",
      "“老实讲，你们自己去银行，基本能找到一个大堂经理的实习，体验一下。大堂经理，和所谓的付费实习，对于申请来说，没有差别！”",
      "“妈呀,,,我领导还经常找我帮忙招人 我们千亿级的股权投资基金 那我这想收费得收多少钱”",
      "duck不必，直接投就好",
    ]
  },
  "Liaoning": {
    "title": "辽宁省",
    "data": [
      "互联派教育科技（大连）有限公司,孟令峰,2015-11-13,辽宁省,大连市,软件和信息技术服务业,https://www.hulianpai.com/",
      "沈阳久极文化传媒有限公司,张博,2012-05-07,辽宁省,沈阳市,文化艺术业,www.xiaotao360.com",
      "大连思成教育咨询有限公司,孔祥,2009-04-15,辽宁省,大连市,教育,www.sicheng.info",
      "大连智科咨询顾问有限公司,陈池,2015-11-11,辽宁省,大连市,商务服务业,0",
      "沈阳即刻职业中介服务有限公司,沙金,2016-06-01,辽宁省,沈阳市,商务服务业,0",
    ]
  },
  "Jiangsu": {
    "title": "江苏省",
    "data": [
      "南京君阳志恒信息科技有限公司,周志俊,2017-03-01,江苏省,南京市,软件和信息技术服务业,0",
      "南京冠升杰咨询有限公司,张全霞,2020/12/9,江苏省,南京市,教育,www.championjob.cn",
      "南京索沃企业管理有限公司,唐海艳,2017/9/7,江苏省,南京市, 商务服务业,0",
      "南京才多多网络科技有限公司,刘海,2018-03-28,江苏省,南京市,软件和信息技术服务业,0",
      "南京职芽网络科技有限公司,杜鹏程,2020/8/5,江苏省,南京市,软件和信息技术服务业,zhiyajob.cn",
    ],
    "comment": [
      "“准备出国，但是没有实习经历，中介给我推3个w的四大实习，还是线上的，一个月一周一个小时，这种会有问题吗？",
      "“我觉得线下的不一定假吧 本来很多卖的就是黑工 过hr的他们其实也是赌罢了，黑工有啥假的”",
      "“智商税”",
      "“谁买我笑谁，学商科还没挣钱反倒给人倒贴十几k买了个毫无用处的文字经历”",
      "“这种实习没啥用，面试的时候会深挖简历，没干过啥核心活的一问就漏了”",
    ]
  },
  "Shandong": {
    "title": "山东省",
    "data": [
      "青岛思语信息科技有限公司,马列伟,2012-12-24,山东省,青岛市,软件和信息技术服务业,0",
      "山东校聘信息技术有限公司,苏志南,2016-02-01,山东省,济南市,软件和信息技术服务业,http://www.xiaozhaosheng.com",
      "山东一亩三分地网络科技有限公司,王明祥,2014-10-27,山东省,烟台市,软件和信息技术服务业,www.1point3acres.cn",
    ],
    "comment": [
      "“？前几天不是港发文打击付费实习吗 还敢这么大胆”",
      "“贷款上班 就魔幻”",
      "“咨询了好几个大机构给我疯狂安利各种安利各种实习科研…后来听他的介绍才知道交钱就行”",
      "“内推还需要花钱？我就是内推，免费的，而且本身企业已经就给推荐人钱了，不需要你额外付钱”",
      "“直接投简历，内推个什么，费钱的很。建议挑年底年初这种人少活多的怨种时刻，我觉得概率更大”",
    ]
  },
  "Tianjin": {
    "title": "天津市",
    "data": [
      "御峰金服（天津）有限公司,王玉峰,2016-04-15,天津市,天津市,其他金融业,www.creditparty.cn",
      "天津立夫特教育咨询有限公司,周鑫,2017-03-22,天津市,天津市,商务服务业,0",
    ]
  },
  "Zhejiang": {
    "title": "浙江省",
    "data": [
      "浙江校友邦科技有限公司,陈小玲,2009-09-04,浙江省,金华市,教育,http://www.xybsyw.com/",
      "杭州开课吧科技有限公司,方业昌,2020-09-14,浙江省,杭州市,科技推广和应用服务业,www.kaike8.com",
      "浙江新通教育科技股份有限公司,麻亚炜,2000-09-11,浙江省,杭州市,软件和信息技术服务业,http://www.igo.cn",
      "杭州睿博信息咨询有限公司,LIU YI,2017-06-29,浙江省,杭州市,商务服务业,www.cmcaus.com",
      "杭州乙霖科技有限公司,杨时莲,2018-10-11,浙江省,杭州市,软件和信息技术服务业,0",
    ],
    "comment": [
      "只能说人类的悲欢并不相通 对于985学生来说可能大厂四大之类的不难进（也越来越卷了），但对那些学历没那么高的学生，用钱买一段好看经历，等于换了一个平台，能够接触到的资源和机会也会更多。至于是否值得就看自己了。特别是在留学申请这种很看软件背景的情况下，选择付费实习的人会更多", 
      "人傻钱多吧，不敢想象bg差到什么地步才付费内推，难道有这份实习就包你下半辈子荣华富贵了？", 
      "怎么还有付费实习的？", 
      "幸好！我没入坑，加的中介十有八九是付费项目，还给我搞焦虑。。。",
      "劝大家别整，花钱给别人做牛做马吗……别被pua的太狠了。付费实习大概率都是不支持背景调查的。做了也只能写到“项目经历”而不是“实习经历”里"
    ]
  },
  "Fujian": {
    "title": "福建省",
    "data": [
      "坚果求职（厦门）教育信息咨询有限公司,苏凯贤,2022/6/13,福建省,厦门市,教育,jgqzoffer.com",
      "厦门瑾往思教育咨询有限公司,陈俊宏,2021/6/3,福建省,厦门市,教育,0",
    ]
  },
  "Jilin": {
    "title": "吉林省",
    "data": [
      "途美彼岸长春教育咨询有限公司,王晓峰,2018-11-08,吉林省,长春市,教育,nystudent.net",
    ]
  }, 
  "Hong_Kong": {
    "title": "香港特别行政区",
    "comment": [
      "“我之前问一个姐姐了解的没有这么贵的啊…可能是中介自己加价太高了，如果真的需要的家人们多找找渠道比较一下价格！”",
      "“付费实习也能接广了吗？”",
      "“之前在某top快消实习 经常有这种中介给我发邮件要合作…我只能说谁买谁冤大头。很多招聘实习生的都是你的前任intern罢了 就算把你的简历推到leader那里也不保录啊！花几万买一个只有title大都不走人事的实习真的没必要”",
      "“有很多人买吧，尤其top公司，有见过买了一段top的接下来就一直top实习的了，不过肯定肯定个人能力也有的”",
      "“如果能线下的话其实也没法骗，身边人有买过三中一华的成功去了后来也过背调了，但是导师什么有用的活都没派是真的，天天坐工位打坐”",
    ]
  },
  "Heilongjiang": {
    "title": "黑龙江",
    "comment": [
      "“天天付费实习 够了 我说够了”",
      "“法学又爆了的情况下，四年之后可能律所就可以实现实习律师付费实习了”",
      "“有的·家里打招呼比这玩意好使的多”",
    ]
  }
}    

for (const key in map) {
  if (map.hasOwnProperty(key)) {
    const data = map[key].data;
    data.forEach((item, index) => {
      console.log(item.split(',').length);
    });
  }
}

// 检查二维码出现
function check_qr() {
  $(".qr").on("animationend", function() {
    $(".phone").css("display", "block")
  })
}
check_qr();
// 扫码成功换照片
function change_photos() {
  $(".phone").on("animationend", function() {
    $(".phone").attr("src", "image/success.PNG");
  })
}
change_photos();

// 元素进入viewport固定
function fix(last, next) {
  window.addEventListener("scroll", () => {
    const next_bottom = next.getBoundingClientRect().top - window.innerHeight;
    if(next_bottom < 0 && next_bottom > (-window.innerHeight)) {
      last.classList.add("fix");
    }
    if (next_bottom > 0) {
      last.classList.remove("fix");
    }
  })
}
fix($("#title_one")[0], $("#para_1")[0]);
fix($("#title_two")[0], $("#para_2")[0]);
fix($(".intermediary_fix_wrap")[0], $(".wechat_container")[0])

function fix_plus(ele, condition) {
  $(window).scroll(function() {
    var ele_client_top = $(ele).get(0).getBoundingClientRect().top;
    if (condition) {
      $(ele).children().eq(0).removeClass("fix _plus");
    } else if (ele_client_top <= 0) {
      $(ele).children().eq(0).addClass("fix_plus");
    } else {
      $(ele).children().eq(0).removeClass("fix_plus");
    }
  });
}

fix_plus($(".unsuccessful_title_wrap")[0], false);


// 元素出viewport逐渐变浅
function fade_out(ele) {
    window.addEventListener("scroll", () => {
      const distance = -ele.getBoundingClientRect().top;
      if (distance > 0 && distance <  (window.innerHeight / 4)) {
        ele.style.opacity = 1 - (distance / (window.innerHeight / 4));
      }
    })
}
function fade_in(ele) {
  window.addEventListener("scroll", () => {
    const distance = ele.getBoundingClientRect().top;
    if (distance > 0 && distance <  (window.innerHeight / 4)) {
      ele.style.opacity = 1 - (distance / (window.innerHeight / 4));
    }
  })
}
// fade_out($("#svg-object")[0]) ;
// fade_in($("#svg-object")[0]) ;

$(".cases_paraghraph").each(function(index, element) {
  fade_out(element);
  fade_in(element);
});


 
// 始终保持滚轮在最底端
const chatMessages = $(".chat-messages")[0];
console.log( 'scroll' + chatMessages.scrollHeight);

// 小人变小
$(document).ready(function() {
  // 使用 jQuery 选择器选择要监视的元素
  $('#death').waypoint(function() {
      console.log("keke");
      $(this.element).addClass("death");   

  }, {
      offset: '-20%'
  });
  $('#blog').waypoint(function() {
    $(".heavy").css("display", "block");
    $(".heavy").on("animationend", () => {
      $(".signboard").animate({ top: 5000 }, 'slow');
      $(".signboard").css("display", "block")
    });

}, {
    offset: window.innerHeight * 1
});
});

// $(".connection").fadeIn(1000);


const connection_array = [-13, 39, 130, 207, 100, 252, 322, 423];
const connection_fade_in = setInterval(connection_fade_in_callback, 2000);
var i = 0;
function connection_fade_in_callback() {
  
  if (i < 8) {
    
    $(".con").eq(i).animate({
      top: connection_array[i] ,
      opacity: 1,// 为了演示目的，添加了一个 opacity 动画
    }, 1000, function() {
      // 动画完成后的回调函数
     console.log("h") // 设置最终位置
    });
    i ++;
  } else {
    clearInterval(connection_fade_in);
  }
}





