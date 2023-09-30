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
const chatgpt_message_3 = "你好，实习是提升你就业竞争力的一个很重要的手段，我建议你尽快找一些实习".split('');
const user_message_3 = "我想问问，我身边的同学都已经手握几段实习经历了，加上现在就业形势如此严峻，我还没有实习过？".split('');
const user_message_4 = "但是我没有实习经历，想进大厂的话不是要实习背景吗？";
const chatgpt_message_2 = "我这边建议你采取“”。";
const title = "付费实习";
const user_message_1 = "hi";
const chatgpt_message_1 = "hi";
const user_message_2 = "hi";
const user_message_5 = "那我要从哪里得知这些付费信息？"
const chatgpt_message_5 = "你可以寻找一些求职公众号，例如下面的..."



// 选择专业
const major = {
  "business": {
    "user_message_1": "我是商科专业的学生，我还没有找到实习该怎么办啊？",
    "passage_array": [
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
    ]
  },
  "internet": {
    "user_message_1": "我是互联网专业的学生，我还没有找到实习该怎么办啊？",
    "passage_array": [
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
      },
      {
        "img": "",
        "title": "",
        "herf": ""
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
          if (message === chatgpt_message_2 && (message.length - i) === 2) {
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
  .then(() => {
    setTimeout(() => {
      const span = document.getElementsByClassName("title")[0];
      span.classList.add("magnify");
      span.addEventListener("animationend", () => {
        $(".prompt").eq(0).css("display", "block");
      })
    }, 1000)
  })
})

$(".prompt").eq(0).click(() => {
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
        const passage_title = document.createElement('p');
        passage_title.classList.add("passage_title");
        passage.appendChild(passage_title);
        passage_title.innerHTML = major[str_major].passage_array[i].title;
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
function control_position() {
  console.log("ok");
  const reature = document.getElementById("reature_background");
  const reality_charactor = document.getElementById("reality_charactor");

  window.addEventListener("scroll", () => {

    const rect = reature.getBoundingClientRect();
    const end_line = 2 * window.innerHeight;
    const rect_top = - rect.top;

    if (rect_top >= 0 && rect_top <= end_line) {
      const pre_top = window.innerHeight;
      const pre_right = window.innerWidth / 3;
      const new_top = pre_top + rect_top;
      const new_right = pre_right + (window.innerWidth / 6) / (2 * window.innerHeight) * rect_top;
      console.log("new_top" + new_top)
      reality_charactor.setAttribute("style", "top: " + new_top + "px; right: " + new_right + "px;")
    }
  })
}
control_position();

// 地图覆盖出现卡片
const svgObject = document.getElementById('svg-object');
const card = document.getElementsByClassName("card")[0];
const area = document.getElementById("area");
const company = document.getElementById("company");
/*
const test = document.getElementsByClassName("test")[0];
test.addEventListener("click", () => {
  card.style.display = "block";
  for (var key in map) {
    if (test.id === key) {
      area.innerHTML = map[key].title;
      company.innerHTML = map[key].company;
    console.log("wo");
    }
  }
})
card.addEventListener("click", () => {
  card.style.display = "none";
})*/

    window.addEventListener("load", function() {
        const svgDocument = svgObject.contentDocument;
        console.log(svgObject);
        console.log(svgDocument);
        var provinces = Array.from(svgDocument.getElementsByClassName("province"));
        console.log(provinces);
        provinces.forEach(element => {
            const last_fill = element.style.fill;
            element.addEventListener("mouseover", () => {
                element.style.fill = "pink";
                card.style.display = "block";
                for (var key in map) {
                  if (element.id === key) {
                    area.innerHTML = map[key].title;
                    company.innerHTML = map[key].company;
                  }
                }
            })
            element.addEventListener("mouseleave", () => {
                element.style.fill = last_fill;
                card.style.display = "none";
                area.innerHTML = '';
                company.innerHTML = '';
            })
        });
    });
const map = {
  "Shanxi": {
    "title": "Shanxi",
    "company": "企业a\n企业b"
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
    $(".phone").attr("src", "success.PNG");
  })
}
change_photos();

// 元素进入viewport固定
function fix(last, next) {
  window.addEventListener("scroll", () => {
    const next_bottom = next.getBoundingClientRect().top - window.innerHeight;
    console.log("next_bottom" + next_bottom);
    if(next_bottom < 0 && next_bottom > (-window.innerHeight)) {
      console.log("yes");
      last.classList.add("fix");
      last.style.opacity = 1 + next_bottom / window.innerHeight;
    }
    if (next_bottom > 0) {
      last.classList.remove("fix");
    }
  })
}
fix($(".intermediary_fix_wrap")[0], $("#wechat_cover")[0]);

// 元素出viewport逐渐变浅
function fade_out(ele) {  
    const height = parseFloat(window.getComputedStyle(ele).getPropertyValue("height").slice(0, -2));
    window.addEventListener("scroll", () => {
      if (ele.getBoundingClientRect().top < 0 && ele.getBoundingClientRect().top > (- height) ) {
        const distance = -ele.getBoundingClientRect().top
        ele.style.opacity = 1 - (distance / height);
      }
    })
  
}
fade_out($("#svg-object")[0]) ;

  
 





