


import {f_o_html_from_o_js} from "./../../f_o_html_from_o_js.module.js"
//"https://deno.land/x/f_o_html_from_o_js@0.3/mod.js"

const o_style = document.createElement('style');
o_style.innerHTML = `
*{
    margin:0; 
    padding:0;
}
#main{
    display:flex;
    flex-direction: column;
    min-height:100vh;
    max-height:100vh;
}
.a_o_message{
    overflow-y:scroll;
    flex-grow:1;
}
.inputs{
    width:100%;
    align-self: end;
    display:flex;
}

`;
document.head.appendChild(o_style);

var o_div_main = document.createElement("div");
document.body.appendChild(o_div_main)

class O_user{
    constructor(s_name){
        this.s_name = s_name
    }
}

class O_message{
    constructor(
        o_user,
        s_markdown
        ){
        this.o_user = o_user
        this.s_markdown = s_markdown
        this.o_date = new Date()
    }
}

var a_o_message = [];

var s_name = prompt("Please enter your name", "Harry Potter");
if(!s_name){
    s_name = "no name"
}
var o_user = new O_user(s_name);

var o_js_a_o_message = {
    f_o_js: function(){
        return {
            class: "a_o_message",
            a_o:[
                ...a_o_message.map(function(o){
                    return {
                        a_o:[
                            {
                                class: "o_date",
                                innerText: `${o.o_date.getHours()}: ${o.o_date.getMinutes()}:`
                            }, 
                            {
                                class: "o_user.s_name",
                                innerText: o.o_user.s_name
                            }, 
                            {
                                class: "s_markdown",
                                innerText: o.s_markdown
                            }, 
                        ]

                    }
                })
            ]
        }
    }
}
let f_send_message = function(
    o_user,
    s_markdown, 
){
    if(s_markdown.trim() == "" ){
        return
    }
    let o_message = new O_message(
        o_user, 
        s_markdown
    );
    a_o_message.push(o_message);
    o_js_a_o_message._f_render();
    o_js_a_o_message._o_html.scrollTo(0, o_js_a_o_message._o_html.scrollHeight);

}
var s_input_val = '';

let o_js_o_input = {
    f_o_js: function(){
        return {
            s_tag : "input", 
            placeholder: "enter message...", 
            value: s_input_val,
            onkeydown: function(
                o_self
            ){  
                s_input_val = this.value;
                if(window.event.keyCode == 13){
                    f_send_message(
                        o_user, 
                        s_input_val
                    )
                    this.value = ''
                }
            }
        }
    }
}


var o = {
    id: "main",
    a_o: [
        o_js_a_o_message,
        {
            class: "inputs", 
            a_o:[
                o_js_o_input,
                {
                    s_tag : "button", 
                    innerText: "send >", 
                    onclick: function(
                        o_self
                    ){  
                        f_send_message(
                            o_user, 
                            s_input_val
                        )
                        s_input_val = ''
                        o_js_o_input._f_render()
                    }
                },
            ]
        }

    ]
}
var o_html = f_o_html_from_o_js(o);

o_div_main.appendChild(o_html)
