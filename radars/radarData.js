//This is the title for your window tab, and your Radar
document.title = "Mitsuyuki.Shiiba's Technology Radar (June 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Pair Development",
                "pc":{"r": 70,"t":150}, "movement":"c"},

            {"name":"BDD",
                "pc":{"r":150,"t":140}, "movement":"t"},
            {"name":"DDD",
                "pc":{"r":150,"t":160}, "movement":"t"},

            {"name":"CQRS",
                "pc":{"r":250,"t":120}, "movement":"t"},
            {"name":"EventStore",
                "pc":{"r":250,"t":130}, "movement":"t"},
            {"name":"Flux",
                "pc":{"r":250,"t":140}, "movement":"t"},
            {"name":"CI with Container",
                "pc":{"r":250,"t":150}, "movement":"t"},
            {"name":"Chatops",
                "pc":{"r":250,"t":160}, "movement":"c"},
            {"name":"Microservices",
                "pc":{"r":250,"t":170}, "movement":"t"},

            {"name":"TDD",
                "pc":{"r":350,"t":130}, "movement":"c"},
            {"name":"Transaction Script",
                "pc":{"r":350,"t":150}, "movement":"c"},
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Whiteboard",
                "pc":{"r": 50,"t": 20}, "movement":"c"},
            {"name":"Sticky Paper",
                "pc":{"r": 50,"t": 40}, "movement":"c"},
            {"name":"Git",
                "pc":{"r": 70,"t": 20}, "movement":"c"},
            {"name":"Okashi Shrine",
                "pc":{"r": 70,"t": 40}, "movement":"c"},
            {"name":"Eclipse",
                "pc":{"r": 70,"t": 60}, "movement":"c"},

            {"name":"Vagrant + Chef",
                "pc":{"r":150,"t": 10}, "movement":"c"},
            {"name":"HipChat",
                "pc":{"r":150,"t": 20}, "movement":"c"},
            {"name":"Capistrano",
                "pc":{"r":150,"t": 30}, "movement":"c"},
            {"name":"Hubot",
                "pc":{"r":150,"t": 40}, "movement":"c"},
            {"name":"IntelliJ",
                "pc":{"r":150,"t": 60}, "movement":"c"},

            {"name":"Ansible",
                "pc":{"r":250,"t": 40}, "movement":"t"},
            {"name":"Docker",
                "pc":{"r":250,"t": 60}, "movement":"t"},

            {"name":"nuboard A5",
                "pc":{"r":350,"t": 60}, "movement":"t"},
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"特に思いつかない",
                "pc":{"r": 70,"t":200}, "movement":"c"},

            {"name":"MongoDB",
                "pc":{"r":150,"t":230}, "movement":"c"},
            {"name":"Apache Camel",
                "pc":{"r":150,"t":250}, "movement":"c"},
            {"name":"Apache ActiveMQ",
                "pc":{"r":150,"t":260}, "movement":"c"},

            {"name":"Openstack",
                "pc":{"r":250,"t":200}, "movement":"c"},
            {"name":"Azure",
                "pc":{"r":250,"t":220}, "movement":"c"},
            {"name":"AWS",
                "pc":{"r":250,"t":240}, "movement":"c"},
            {"name":"JavaEE",
                "pc":{"r":250,"t":260}, "movement":"c"},
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Spring Framework",
                "pc":{"r": 70,"t":290}, "movement":"c"},
            {"name":"JAX-RS",
                "pc":{"r": 70,"t":310}, "movement":"c"},
            {"name":"Thymeleaf",
                "pc":{"r": 70,"t":330}, "movement":"c"},

            {"name":"Java8",
                "pc":{"r":150,"t":280}, "movement":"c"},
            {"name":"Spock",
                "pc":{"r":150,"t":300}, "movement":"c"},
            {"name":"Geb",
                "pc":{"r":150,"t":310}, "movement":"c"},
            {"name":"Doma1",
                "pc":{"r":150,"t":330}, "movement":"c"},

            {"name":"React",
                "pc":{"r":250,"t":300}, "movement":"t"},
            {"name":"SpringBoot",
                "pc":{"r":250,"t":320}, "movement":"t"},
            {"name":"AngularJS/Backbone.js",
                "pc":{"r":250,"t":340}, "movement":"c"},
            {"name":"Doma2",
                "pc":{"r":250,"t":360}, "movement":"c"},

            {"name":"Java 6 and earlier",
                "pc":{"r":350,"t":280}, "movement":"c"},
            {"name":"Jersey1",
                "pc":{"r":350,"t":300}, "movement":"c"},
            {"name":"Seasar2",
                "pc":{"r":350,"t":320}, "movement":"c"},
        ]
    }
];
