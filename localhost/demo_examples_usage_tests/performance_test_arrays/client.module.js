
import {f_o_html_from_o_js} from "https://deno.land/x/f_o_html_from_o_js@0.4/mod.js"

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
.group{
    display:flex;
}
.o_very_complex_object:nth-child(even){
    background: rgba(0,0,0,0.1);
}

input, label, textarea{
    width: 100%;
    padding: 0.4rem;
}
.highlight{
    background-color: rgb(239 226 24);
}

`;
document.head.appendChild(o_style);

var o_div_main = document.createElement("div");
document.body.appendChild(o_div_main)

class O_very_complex_object{
    constructor(
        n_id,
        s_name, 
        s_json_mixedval,
        b_bool, 
        n_num2, 
        n_num3, 
        s_string1, 
        s_string2,
        ){
            this.n_id = n_id,
            this.s_name = s_name, 
            this.s_json_mixedval = s_json_mixedval,
            this.b_bool = b_bool, 
            this.n_num2 = n_num2, 
            this.n_num3 = n_num3, 
            this.s_string1 = s_string1, 
            this.s_string2 = s_string2
    }
}

var a_o_very_complex_object = []

let f_o_very_complex_object__random__alsopush = function(){

    var o_very_complex_object = new O_very_complex_object();
    
    o_very_complex_object.n_id = a_o_very_complex_object.length+1;

    o_very_complex_object.s_name = new Array(parseInt(Math.random()*20)).fill().map(n=>String.fromCharCode(65+Math.random()*32)).join("")
    o_very_complex_object.s_string1 = new Array(parseInt(Math.random()*64)).fill().map(n=>String.fromCharCode(93+Math.random()*32)).join("")
    o_very_complex_object.s_string2 = new Array(parseInt(Math.random()*76)).fill().map(n=>String.fromCharCode(70+Math.random()*32)).join("")
    o_very_complex_object.n_num2 = Math.random()*123412341234123412341234;
    o_very_complex_object.n_num3 = Math.random()*123412341234123412341234;
    o_very_complex_object.b_bool = Math.random()>0.5;
    o_very_complex_object.s_json_mixedval = JSON.stringify(
        {
            a_o: Array(parseInt(Math.random()*20)).fill(0).map(n=>Math.random()*12341234123412341234), 
            b: Math.random()>.5, 
            s: new Array(parseInt(Math.random()*20)).fill().map(n=>String.fromCharCode(65+Math.random()*32)).join("")
        }
    )
    a_o_very_complex_object.push(o_very_complex_object)
    return o_very_complex_object;

}


var f_s_html_highlighted = function(
    s_string_to_highlight, 
    s_searchterm
){
    var s_html = s_string_to_highlight;
    if(s_searchterm.trim() != ""){
        // return s_string_to_highlight
        s_html = s_html.replaceAll(
            s_searchterm, 
            `<span class='highlight'>${s_searchterm}</span>`
        )
    }
    return `<span>${s_html}</span>`

    
}
window.o_js_a_o_very_complex_object = {
    f_o_js: function(){
        return {
            class: "a_o_very_complex_object",
            a_o:[
                ...a_o_very_complex_object.filter(
                    function(o){
                        console.log(o.s_string1.includes(s_searchterm))
                        return o.s_string1.includes(s_searchterm)
                                ||
                                o.s_string2.includes(s_searchterm)
                    }
                )
                .map(function(o){
                    
                    return {
                        f_o_js: function(){
                            return {
                                class: "o_very_complex_object",
                                a_o:[
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                class: "innerText",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "n_id",
                                                value: o.n_id
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                class: "innerText",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "n_id",
                                                s_tag: "input", 
                                                readOnly: true,
                                                value: o.n_id
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "s_name",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "s_name",
                                                s_tag: "input", 
                                                readOnly: true,
                                                value: o.s_name
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "s_string1",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "s_string1",
                                                innerHTML: f_s_html_highlighted(o.s_string1, s_searchterm)
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "s_string2",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "s_string2",
                                                innerHTML: f_s_html_highlighted(o.s_string2, s_searchterm)
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "n_num2",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "n_num2",
                                                s_tag: "input", 
                                                readOnly: true,
                                                value: o.n_num2
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "n_num3",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "n_num3",
                                                s_tag: "input", 
                                                readOnly: true,
                                                value: o.n_num3
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[
                                            {
                                                innerText: "b_bool",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "b_bool",
                                                s_tag: "input", 
                                                readOnly: true,
                                                value: o.b_bool
                                            },
                                        ]
                                    },
                                    {
                                        class: "group",
                                        a_o:[                                            
                                            {
                                                innerText: "s_json_mixedval",
                                                s_tag: "label"
                                            },
                                            {
                                                class: "s_json_mixedval",
                                                s_tag: "textarea", 
                                                readOnly: true,
                                                value: o.s_json_mixedval
                                            }
                                        ]
                                    },

                                ]
                            }
                        }

                    }
                })
            ]
        }
    }
}

var s_searchterm = ''
var n_len = 1;
var o = {
    id: "main",
    a_o: [
        {
            s_tag: "label",
            innerText: "n_len"
        },
        {
            s_tag: "input", 
            type: 'number', 
            value: n_len,
            oninput: function(o_js){
                // console.log(o_js)
                n_len = this.value;
                // a_o_very_complex_object = [];
                for(var n = 0; n <= n_len; n+=1){
                    if(n > a_o_very_complex_object.length){
                        f_o_very_complex_object__random__alsopush();
                    }
                }
                for(var n = a_o_very_complex_object.length; n > n_len; n-=1){
                    a_o_very_complex_object.pop()
                }
                o_js_a_o_very_complex_object._f_render()
            }
        },
        {
            s_tag: "label",
            innerText: "s_searchterm"
        },
        {
            s_tag: "input", 
            type: 'text',
            value: s_searchterm,
            oninput: function(o_js){
                s_searchterm = this.value;
                o_js_a_o_very_complex_object._f_render()

            }
        },
        o_js_a_o_very_complex_object,
    ]
}

var o_html = f_o_html_from_o_js(o);
o_div_main.appendChild(o_html)



// window.setInterval(function(){
//     f_o_very_complex_object__random__alsopush();
//     o_js_a_o_very_complex_object._f_render()
// },1000)