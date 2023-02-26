


import {f_o_html_from_o_js} from "https://deno.land/x/f_o_html_from_o_js@0.4/mod.js"

var o_div_main = document.createElement("div");
document.body.appendChild(o_div_main)

class O_user{
    constructor(s_name){
        this.s_name = s_name
    }
}
var a_s_name = [
    'Flamifeal',
    'Anarseeks',
    'Hornauciksi',
    'Turaussauks',
    'Vunilla',
    'Taastowary',
    'Lepsquito',
    'Naukearoach',
    'Gatseeni',
    'Plauddauc',
    'Hippuito',
    'Antium',
];
var a_o_user = [
    new O_user("Hans"),
    new O_user("Fridola"),
    new O_user("Peter"),
    new O_user("Alina"),
];
var o_js_a_o_user = {
    f_o_js: function(){
        return {
            a_o:[
                ...a_o_user.map(function(o_user){
                    return {
                        
                        s_tag: "div",
                        innerText: o_user.s_name
                    }
                })
            ]
        }
    }
}
var o = {
    id: "main",
    a_o: [
        {
            id: "test_div",
            s_tag : "div", 
            innerText: "test"
        },
        {
            s_tag: 'textarea', 
            value: a_s_name.join( '\n'), 
            style: "white-space: pre-wrap;",
            oninput: function(){
                console.log(this.value)
                a_s_name = this.value.split("\n")
            }
        },
        {
            s_tag : "button", 
            innerText: "add user", 
            onclick: function(
                o_self
            ){
                console.log(this);
                a_o_user.push(
                    new O_user(a_s_name[parseInt(Math.random()*a_s_name.length-1)])
                );
                console.log(a_o_user)
                // console.log("number is : "+this.value)
                o_js_a_o_user._f_render()
            }
        },
        {
            s_tag : "button", 
            innerText: "remove user", 
            onclick: function(
                o_self
            ){
                console.log(this);
                a_o_user.pop();
                console.log(a_o_user)
                // console.log("number is : "+this.value)
                o_js_a_o_user._f_render()
            }
        },
        o_js_a_o_user, 
        {
            s_tag : "a", 
            href: "https://deno.land",
            a_o:[
                {
                    s_tag: "div", 
                    innerText : "deno.land"
                }
            ]
        },
        ...Array(3).fill(0).map(
            function(n, n_idx){
                return {
                    id: `my_div_id_${n_idx}`, 
                    innerText: `this is the div no.:${n_idx+1}`
                }
            }
        )
    ]
}
var o_html = f_o_html_from_o_js(o);

o_div_main.appendChild(o_html)
