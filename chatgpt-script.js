
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

// 为message_array赋值
const chatgpt_message_2 = "境外留学形势仍然相当严峻。由于国内高校毕业生逐年增加，就业形势十分困难，不少毕业生为了暂避就业压力，纷纷选择升学读研读博。2015年，我国研究生考试报名人数有177万人，而2022年我国研考人数已高达457万人，境外留学成为另一种选择，分担国内升学压力。\n根据中国教育在线发布的《2022年中国学生出国留学趋势调查报告》显示，2019年我国出国留学人员总数为70.35万人，从2000年的3.9万人到2019年的70.35万人，增长了接近18倍。出国留学深造同样竞争激烈，留学申请中绩点、语言成绩、实习经历、科研经历等等都占据了相当大的比重。";
const user_message_3 = "那我该怎么找实习？";
const user_message_4 = "但是我没有实习经历，想进大厂的话不是要实习背景吗？";

const chatgpt_message_3 = "我这边建议你采取“”。";
const title = "付费实习";
const user_message_1 = "hi";
const chatgpt_message_1 = "你的情况符合大多数人。根据智联招聘发布的《2022 大学生就业力调研报告》显示，2022年我国高校毕业生首次突破 1000 万大关，刷新历史记录。其中，有74%的毕业生有在校实习经历，高于2021 年的 57.9%。我国高校毕业生躺平大军逐渐减少，面对严峻的经济形势，大学生正在逐步走出舒适圈，走入“内卷”。\n“求职难”已经是在校生必须正视的事实，无论是企业的“应届生要求两年工作经验”，还是学校的“毕业需提交两份实习资料”，早早实习已然成为大学生提高就业竞争力的重要规划。根据DT财经联合牛客撰写的《2022实习态度调查报告》显示，有10.6%的本科生在大一时开始第一段实习，在大二的有32.8%，而在大三有41.1%，在大四有15.4%，你现在开始实习并不晚。";
const user_message_2 = "那如果我想留学深造呢？";
const user_message_5 = "那我要从哪里得知这些付费信息？"
const chatgpt_message_5 = "你可以寻找一些求职公众号，例如下面的..."



// 选择专业
const major = {
  "business": {
    "user_message_1": "我是二本商科专业的大三学生，身边很多同学都有好几份实习了，但是我一份也没有，投简历也没回信，我该怎么办",
    "passage_array": [
      {
        "img": "b1.jpg",
        "title": "中金实习内推 | 中金行研实习生招聘",
        "href": "https://mp.weixin.qq.com/s/_YVV05yEWSq3ZGwoG-5FUw"
      },
      {
        "img": "b2.jpg",
        "title": "投行实习内推 | 华泰证券投行实习招聘",
        "href": "https://mp.weixin.qq.com/s/IFA15L2YLXfrD9l2jBZ5ig"
      },
      {
        "img": "b3.jpg",
        "title": "行研实地实习内推 | 国泰君安行研部实习生招聘",
        "href": "https://mp.weixin.qq.com/s/ERugu3HqaxBlb-yASh00sA"
      },
      {
        "img": "b4.jpg",
        "title": "日常实习 | 申万宏源、华泰联合证券、盈渊资本、海通证券等",
        "href": "https://mp.weixin.qq.com/s/ERugu3HqaxBlb-yASh00sA"
      },
      {
        "img": "b5.jpg",
        "title": "券商实习内推 | 招商证券行研/投行正式实习生招聘",
        "herf": "https://mp.weixin.qq.com/s/O2wGSfP2JoB-ieqZ-_oAgw"
      },
    ]
  },
  "internet": {
    "user_message_1": "我是二本互联网专业的大三学生，身边很多同学都有好几份实习了，但是我一份也没有，投简历也没回信，我该怎么办",
    "passage_array": [
      {
        "img": "i1.jpg",
        "title": "字节跳动实习内推 | 字节跳动商业化战略分析实习生招聘",
        "href": "https://mp.weixin.qq.com/s/4pDPS-mhhuJAN0QMzMHvjA"
      },
      {
        "img": "i2.jpg",
        "title": "互联网实习内推 | 百度产品正式实习生招聘",
        "href": "https://mp.weixin.qq.com/s/pOtxVnMvHKISPsBHo1w5qQ"
      },
      {
        "img": "i3.jpg",
        "title": "战略实习内推 | 小红书战略分析实习生招聘",
        "href": "https://mp.weixin.qq.com/s/bPBiThWEFgftVvs-o2BQtw"
      },
      {
        "img": "i4.jpg",
        "title": "互联网内推｜腾讯+美团+微软+阿里巴巴 实习生热招中, 尽快投递!",
        "href": "https://mp.weixin.qq.com/s/HNHjnlcWVBwOn8oyeEtHTQ"
      },
      {
        "img": "i5.jpg",
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
          if (message === chatgpt_message_3 && (message.length - i) === 2) {
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
    chatgpt_avator.src = "chatgpt.png";

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
    user_avator.src = "user-avatar.png";

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
  input_message(major[str_major].user_message_1)
  .then(() => 
    send_button.classList.add("flash")
  )
})
// submit第一条信息
send_button.addEventListener("animationend", () => {
  submit_input_message(major[str_major].user_message_1)
  .then(() => chatgpt_reply(chatgpt_message_1))
  .then(() => input_message(user_message_2))
  .then(() => submit_input_message(user_message_2))
  .then(() => chatgpt_reply(chatgpt_message_2))
  .then(() => input_message(user_message_3))
  .then(() => submit_input_message(user_message_3))
  .then(() => chatgpt_reply(chatgpt_message_3))
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
  input_message(user_message_5)
  .then(() => submit_input_message(user_message_5))
  .then(() => chatgpt_reply(chatgpt_message_5))
  .then(() => {
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
        passage_image.src = major[str_major].passage_array[i].img;
        const passage_title = document.createElement('a');
        passage_title.classList.add("passage_title");
        passage.appendChild(passage_title);
        passage_title.innerHTML = major[str_major].passage_array[i].title;
        passage_title.href = major[str_major].passage_array[i].href
      }
  })
})

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
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
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
        element.style.fill = "pink";
        var mouseX = event.clientX; // 获取鼠标相对于浏览器窗口左上角的横坐标
        var mouseY = event.clientY; // 获取鼠标相对于浏览器窗口左上角的纵坐标
        var left, top , right, bottom;
        if ((mouseX < (window.innerWidth / 2)) && (mouseY < (window.innerHeight / 2))) {
          left = mouseX;
          top = mouseY - test.getBoundingClientRect().top;
          card_wrap.setAttribute("style", "left: " + left + "px; " + "top: " + top + "px;");
        } else if((mouseX > (window.innerWidth / 2)) && (mouseY < (window.innerHeight / 2))) {
          right = window.innerWidth - mouseX;
          top = mouseY - test.getBoundingClientRect().top;
          card_wrap.setAttribute("style", "right: " + right + "px; " + "top: " + top + "px;");
        } else if((mouseX < (window.innerWidth / 2)) && (mouseY > (window.innerHeight / 2))) {
          left = mouseX;
          bottom = window.innerHeight - (mouseY - test.getBoundingClientRect().top);
          card_wrap.setAttribute("style", "left: " + left + "px; " + "bottom: " + bottom + "px;");
        } else {
          right = window.innerWidth - mouseX;
          bottom = window.innerHeight - (mouseY - test.getBoundingClientRect().top);
          card_wrap.setAttribute("style", "right: " + right + "px; " + "bottom: " + bottom + "px;");
        }
        
        card_wrap.style.display = "block";
        
        for (var key in map) {
          if (element.id === key) {
            area.innerHTML = map[key].title;
            map[key].data.forEach((ele, index) => {
              const p = document.createElement("p");
              card.appendChild(p);
              p.classList.add("company");
              p.innerHTML = ele.split(',')[0];
              p.addEventListener("click", () => {
                secard.style.display = "block"; 
                representative.innerHTML = ele.split(',')[1];
                industry.innerHTML = ele.split(',')[4];
                city.innerHTML = ele.split(',')[3];
              })
            });
          }
        }          
      })

      element.addEventListener("mouseleave", () => {
        element.style.fill = last_fill;
        on_ele = false;
        area.innerHTML = '';
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
        "实习（北京）科技有限公司,范永杰,北京市,北京市,科技推广和应用服务业",
        "独立说教育科技（北京）有限公司,刘水音,北京市,北京市,科技推广和应用服务业",
        "三节课信息咨询（北京）有限公司,后显慧,北京市,北京市,商务服务业",
        "北京亨瑞博文教育咨询有限责任公司,邹雪,北京市,北京市,教育",
        "北京艾维联盟教育咨询有限公司,解樵,北京市,北京市,教育",
        "北京大视界精英信息科技有限公司,刘文秀,北京市,北京市,软件和信息技术服务业",
        "翰泊铭途教育科技（北京）有限公司,姚华宇,北京市,北京市,科技推广和应用服务业",
        "易职（北京）科教咨询有限公司,刘腾然,北京市,北京市,教育",
        "北京爱思益咨询有限公司,孙静博,北京市,北京市,商务服务业",
        "北京多知科技有限公司,李好宇,北京市,北京市,科技推广和应用服务业",
        "北京旷智信息科技有限公司,胡海涛,北京市,北京市,科技推广和应用服务业",
        "北京菜鸟无忧教育科技有限公司,袁军,北京市,北京市,软件和信息技术服务业",
        "北京鸥飞科技有限公司,魏冰清,北京市,北京市,科技推广和应用服务业",
        "棕榈大道教育科技（北京）有限公司,朱殷,北京市,北京市,科技推广和应用服务业",
        "风灵创景（北京）技术有限公司,李媛,北京市,北京市,科技推广和应用服务业",
        "职派咨询（北京）有限责任公司,魏铼,北京市,北京市,商务服务业",
        "北京思享纵横教育科技有限公司,印崇萱,北京市,北京市,科技推广和应用服务业",
        "北京观海云远信息科技有限责任公司,胡华英,北京市,北京市,科技推广和应用服务业",
        "启思逐梦教育咨询（北京）有限公司,金思前,北京市,北京市,商务服务业",
        "高霖海拓（北京）教育科技有限公司,李旺,北京市,北京市,科技推广和应用服务业",
        "北京律匠国际教育咨询有限公司,徐玲巧,北京市,北京市,教育",
        "北京欧奇迹网络科技有限公司,常冬,北京市,北京市,科技推广和应用服务业",
        "时代兴华（北京）教育科技有限公司,高杰,北京市,北京市,科技推广和应用服务业"
      ]
  },
  "Anhui": {
    "title": "安徽省",
    "data": [
      "安徽思杰拓信息科技有限公司,翁梅玉,安徽省,合肥市,科技推广和应用服务业"
    ]
  },
  "Guangdong": {
    "title": "广东省",
    "data": [
      "深圳永葆好奇科技有限公司,李亚平,广东省,深圳市,软件和信息技术服务业",
      "深圳市远界管理咨询有限公司,袁宇立,广东省,深圳市,商务服务业",
      "广州市欧飓移民咨询有限公司,资晓利,广东省,广州市,商务服务业",
      "圈里网络科技（广州）有限公司,郭镇龙,广东省,广州市,研究和试验发展",
      "深圳市麦芽求职教育科技有限公司,任重,广东省,深圳市,软件和信息技术服务业",
      "深圳找份工作科技有限公司,杨延霖,广东省,深圳市,互联网和相关服务",
      "海道（深圳）教育科技有限责任公司,王为,广东省,深圳市,软件和信息技术服务业",
      "深圳市凯为咨询有限公司,邱康惠,广东省,深圳市,商务服务业",
      "广州优量传媒科技有限公司,黄嘉俊,广东省,广州市,软件和信息技术服务业",
      "广州精通教育科技有限公司,刘维嘉,广东省,广州市,研究和试验发展",
      "深圳己任教育科技有限公司,陈颖昌,广东省,深圳市,教育",
      "广州市有位来教育咨询有限公司,李志谦,广东省,广州市,商务服务业",
      "深圳前海美新咨询有限公司,曾婕,广东省,深圳市,商务服务业",
      "深圳市职询信息咨询有限公司,白淑珍,广东省,深圳市,商务服务业",
      "深圳市数字牧民文化传播有限公司,江丽婕,广东省,深圳市,广播、电视、电影和录音制作业"
    ]
  },
  "Hubei": {
    "title": "湖北省",
    "data": [
      "武汉鸣鸾信息科技有限公司,王欣欣,湖北省,武汉市,研究和试验发展",
      "入行（武汉）教育科技有限公司,杨昊,湖北省,武汉市,软件和信息技术服务业"
    ]
  },
  "Shanghai": {
    "title": "上海市",
    "data": [
      "上海高顿教育科技有限公司,李锋,上海市,上海市,教育",
      "迈才（上海）信息科技有限公司,周博文,上海市,上海市,软件和信息技术服务业",
      "上海简猎信息科技有限公司,马晓,上海市,上海市,专业技术服务业",
      "上海泽稷教育培训有限公司,蒋望,上海市,上海市,教育",
      "上海学无国界教育科技股份有限公司,郝斐,上海市,上海市,商务服务业",
      "上海微令信息科技有限公司,彭一楠,上海市,上海市,专业技术服务业",
      "上海乔布堂信息科技有限公司,马德远,上海市,上海市,科技推广和应用服务业",
      "上海君尧文化传播有限公司,周博文,上海市,上海市,商务服务业",
      "职优你（上海）教育科技有限公司,余佳,上海市,上海市,科技推广和应用服务业",
      "上海斟学商务信息咨询中心（有限合伙）,孙居然,上海市,上海市,商务服务业",
      "熙南（上海）网络科技有限公司,蒋志勇,上海市,上海市,科技推广和应用服务业",
      "上海智遇信息科技有限公司,刘文秀,上海市,上海市,软件和信息技术服务业",
      "上海泛远志商务咨询有限公司,黄弘贇,上海市,上海市,专业技术服务业",
      "上海想当年信息技术有限公司,李健良,上海市,上海市,软件和信息技术服务业",
      "上海职橙信息科技有限公司,李玉岚,上海市,上海市,软件和信息技术服务业",
      "上海职创教育科技有限公司,宗启航,上海市,上海市,科技推广和应用服务业",
      "上海逐元教育科技有限公司,袁振华,上海市,上海市,科技推广和应用服务业",
      "上海凯洛格信息科技有限公司,卢明霞,上海市,上海市,科技推广和应用服务业",
      "上海顶博商务咨询有限公司,李鹤,上海市,上海市,商务服务业",
      "善谋信息科技（上海）有限公司,莫晓骏,上海市,上海市,软件和信息技术服务业",
      "上海琛智教育科技有限公司,程名,上海市,上海市,专业技术服务业",
      "起向教育科技（上海）有限公司,孔宇,上海市,上海市,科技推广和应用服务业",
      "上海彧梦信息科技有限公司,孟庆春,上海市,上海市,软件和信息技术服务业",
      "上海藤智教育科技有限公司,徐贺平,上海市,上海市,科技推广和应用服务业",
      "上海乐留教育科技有限公司,何星慷,上海市,上海市,科技推广和应用服务业",
      "上海洛素文化艺术有限公司,陈立沂麟,上海市,上海市,文化艺术业",
      "上海优等申出国留学服务有限公司,周杰,上海市,上海市,教育"
    ]
  },
  "Sichuan": {
    "title": "四川省",
    "data": [
      "成都先胜信息科技有限公司,王梓帆,四川省,成都市,软件和信息技术服务业",
      "成都来者教育科技有限公司,吕勇,四川省,成都市,教育",
      "成都职梦商务信息咨询有限公司,吕勇,四川省,成都市,商务服务业",
      "盛世创客（成都）科技有限公司,陶然,四川省,成都市,广播、电视、电影和录音制作业",
      "成都焉得科技有限公司,唐黄铎,四川省,成都市,软件和信息技术服务业",
      "成都觅新教育咨询有限公司,王军,四川省,成都市,商务服务业",
      "四川名远环球教育科技有限公司,易秋雨,四川省,成都市,教育"
    ]
  },
  "Liaoning": {
    "title": "辽宁省",
    "data": [
      "互联派教育科技（大连）有限公司,孟令峰,辽宁省,大连市,软件和信息技术服务业",
      "沈阳久极文化传媒有限公司,张博,辽宁省,沈阳市,文化艺术业",
      "大连思成教育咨询有限公司,孔祥,辽宁省,大连市,教育",
      "大连智科咨询顾问有限公司,陈池,辽宁省,大连市,商务服务业",
      "沈阳即刻职业中介服务有限公司,沙金,辽宁省,沈阳市,商务服务业",
      "海马课堂网络科技（大连）有限公司,曲涵,辽宁省,大连市,科技推广和应用服务业",
      "大连直通硅谷教育咨询有限公司,张桂香,辽宁省,大连市,教育",
      "马可咨询服务（大连）有限公司,姜福宇,辽宁省,大连市,商务服务业"
    ]
  },
  "Jiangsu": {
    "title": "江苏省",
    "data": [
      "南京君阳志恒信息科技有限公司,周志俊,江苏省,南京市,软件和信息技术服务业",
      "南京冠升杰咨询有限公司,张全霞,江苏省,南京市,教育",
      "南京索沃企业管理有限公司,唐海艳,江苏省,南京市, 商务服务业",
      "南京才多多网络科技有限公司,刘海,江苏省,南京市,软件和信息技术服务业",
      "南京职芽网络科技有限公司,杜鹏程,江苏省,南京市,软件和信息技术服务业"
    ]
  },
  "Shandong": {
    "title": "山东省",
    "data": [
      "青岛思语信息科技有限公司,马列伟,山东省,青岛市,软件和信息技术服务业",
      "山东校聘信息技术有限公司,苏志南,山东省,济南市,软件和信息技术服务业",
      "山东一亩三分地网络科技有限公司,王明祥,山东省,烟台市,软件和信息技术服务业"
    ]
  },
  "Tianjin": {
    "title": "天津市",
    "data": [
      "御峰金服（天津）有限公司,王玉峰,天津市,天津市,其他金融业",
      "天津立夫特教育咨询有限公司,周鑫,天津市,天津市,商务服务业"
    ]
  },
  "Zhejiang": {
    "title": "浙江省",
    "data": [
      "浙江校友邦科技有限公司,陈小玲,浙江省,金华市,教育",
      "杭州开课吧科技有限公司,方业昌,浙江省,杭州市,科技推广和应用服务业",
      "浙江新通教育科技股份有限公司,麻亚炜,浙江省,杭州市,软件和信息技术服务业",
      "杭州睿博信息咨询有限公司,LIU YI,浙江省,杭州市,商务服务业",
      "杭州乙霖科技有限公司,杨时莲,浙江省,杭州市,软件和信息技术服务业"
    ]
  },
  "Fujian": {
    "title": "福建省",
    "data": [
      "坚果求职（厦门）教育信息咨询有限公司,苏凯贤,福建省,厦门市,教育",
      "厦门瑾往思教育咨询有限公司,陈俊宏,福建省,厦门市,教育"
    ]
  },
  "Jilin": {
    "title": "吉林省",
    "data": [
      "途美彼岸长春教育咨询有限公司,王晓峰,吉林省,长春市,教育"
    ]
  }, 
  
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
    $(".phone").attr("src", "success.PNG");
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




