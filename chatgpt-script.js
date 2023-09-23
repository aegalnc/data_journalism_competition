// 获得DOM元素
const chatgpt_message_1_p = document.getElementById("chatgpt-message-1");
const user_message_1_p = document.getElementById("user-message-1");
const user_message_container_1 = document.getElementById("user-message-container-1");
const chatgpt_message_container_1 = document.getElementById("chatgpt-message-container-1");
const input_message_p = document.getElementsByClassName("input-message")[0];
const chat_messages = document.querySelectorAll(".chat-messages");
const cursor = document.getElementsByClassName("cursor")[0];
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
            span.setAttribute("style", "position: absolute; left: " + (span.getBoundingClientRect().left - chat_container.getBoundingClientRect().left) + "px; top: " + (span.getBoundingClientRect().top - chat_container.getBoundingClientRect().top) + "px")
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
    
    input_message_p.innerHTML = '';
    return render_message(input_message_p, user_message);
  }
  
  // chatgpt回复
  function chatgpt_reply(chat_messages, chatgpt_message) {
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
  function submit_input_message(chat_messages, user_message) {
    // 清空input_message
    input_message_p.innerHTML = '';
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
      }, 100)
    })
  }


// 鼠标移动的回调函数
cursor.addEventListener("animationend", () => {
  input_message(user_message_1)
  .then(() => 
    send_button.classList.add("flash")
  )
})
// 
send_button.addEventListener("animationend", () => {
  submit_input_message(chat_messages[0], user_message_1)
  .then(() => chatgpt_reply(chat_messages[0],chatgpt_message_1))
  .then(() => input_message(user_message_2))
  .then(() => submit_input_message(chat_messages[0],user_message_2))
  .then(() => chatgpt_reply(chat_messages[0],chatgpt_message_2))
  .then(() => {;
    const span = document.getElementsByClassName("title")[0];
    span.classList.add("magnify");
    
  })
})

// scroll监听第二页chatgpt
function once_listener_scroll(scroll_std, once, callback) {
  window.addEventListener("scroll", () => {
    console.log(scrollY);
    if (scrollY >= scroll_std && once) {
      callback();
      once = false;
    }
  })
}


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









let second_chatgpt_show = true;
const second_chatgpt_scroll_std = window.innerHeight - 150;
console.log(second_chatgpt_scroll_std)
function second_chatgpt_callback() {
  input_message(user_message_5)
  .then(() => submit_input_message(chat_messages[1], user_message_5))
  .then(() => chatgpt_reply(chat_messages[1], chatgpt_message_5))
}
once_listener_scroll(second_chatgpt_scroll_std, second_chatgpt_show, second_chatgpt_callback);

// 新闻页的slide_in

const news_title_wrap = document.getElementsByClassName("news_title_wrap")[0];
const news_sessions = document.getElementsByClassName("news_session");

let news_session_1_slide_in = true;
let news_session_2_slide_in = true;
function news_session_1_slide_in_callback() {
  news_sessions[0].classList.add("slide");
}
function news_session_2_slide_in_callback() {
  news_sessions[1].classList.add("slide");
}
const news_session_1_in_std = window.innerHeight + parseFloat(window.getComputedStyle(news_title_wrap).height.slice(0, -2)) + parseFloat(window.getComputedStyle(news_sessions[0]).height.slice(0, -2) / 2);
const news_session_2_in_std = window.innerHeight + parseFloat(window.getComputedStyle(news_title_wrap).height.slice(0, -2)) +  (parseFloat(window.getComputedStyle(news_sessions[0]).height.slice(0, -2)) + parseFloat(window.getComputedStyle(news_sessions[1]).height.slice(0, -2))) / 2;
once_listener_scroll(news_session_1_in_std, news_session_1_slide_in, news_session_1_slide_in_callback);
once_listener_scroll(news_session_2_in_std, news_session_2_slide_in, news_session_2_slide_in_callback);


let news_title_slide_in = true;
function news_title_slide_in_callback() {
  news_title_wrap.classList.add("slide");
}
const news_title_slide_in_std = window.innerHeight + parseFloat(window.getComputedStyle(news_title_wrap).height.slice(0, -2));
once_listener_scroll(news_title_slide_in_std, news_title_slide_in, news_title_slide_in_callback);

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
function scroll_viewport_down() {
  const buttons = document.querySelectorAll(".scroll");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {

      function interval_callback() {
        if (window.scrollY <= (i + 1) * (window.innerHeight)) {
          window.scrollBy(0, 10);
        } else {
          clearInterval(scroll_viewport_downInterval);
        }
      }
      
      const scroll_viewport_downInterval = setInterval(interval_callback, 1)
    }) 
  }
}

scroll_viewport_down();

// 实现提示词闪烁
/*const prompt = document.getElementById("prompt");
setInterval(() => {
  prompt.classList.toggle("prompt");
}, 100)*/




  

  
 





