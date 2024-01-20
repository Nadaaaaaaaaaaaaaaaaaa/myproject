function sendMessage(a) {
    return new Promise(function(t, n) {
        var e = new MessageChannel;
        e.port1.onmessage = function(e) {
            e.data.error ? (console.log("error", e.data.error), n(e.data.error)) : ("b-offline" === document.body.id && e.data.offline_pages && displayOfflinePages(e.data), t(e.data))
        }, navigator.serviceWorker.controller.postMessage({
            command: a
        }, [e.port2])
    })
}

function displayOfflinePages(e) {
    var t = document.getElementById("offline-pages"),
        i = '<h2>The following pages are available offline:</h2><ul class="no-bullets list-offline">',
        n = e.offline_pages.sort(function(e, t) {
            return e.title > t.title ? 1 : t.title > e.title ? -1 : 0
        }),
        a = document.location.origin;
    new RegExp(a, "g");
    (n = promote("/", n)).forEach(function(e) {
        var t = e.url,
            n = "/" == t ? "Home" : e.title.replace(" | University of Notre Dame", ""),
            a = e.description;
        "/offline/" != t && (i += '<li><a href="' + t + '"><h3 class="offline-title">' + n + "</a></h3>", i += '<p class="offline-url"><a href="' + t + '">' + document.location.origin + t + "</a></p>", i += '<p class="offline-desc">' + a + "</p></li>")
    }), i += "</ul>", t.innerHTML = i
}

function promote(e, t) {
    for (var n = 0; n < t.length; n++)
        if (t[n].url === e) {
            var a = t.splice(n, 1);
            t.unshift(a[0]);
            break
        }
    return t
}

function getURLParameter(e) {
    return decodeURI((RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, null])[1])
}
"serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js", {
    scope: "/"
}), "serviceWorker" in navigator && window.addEventListener("load", function() {
    navigator.serviceWorker.controller && (sendMessage("trimCaches"), "b-offline" === document.body.id && sendMessage("getAvailableOffline"))
});
var forEach = function(e, t, n) {
    for (var a = 0; a < e.length; a++) t.call(n, a, e[a])
};

function fitEmbed(e) {
    for (var t = 0; t < e.length; t++) {
        var n = e[t],
            a = n.getAttribute("width"),
            i = n.getAttribute("height") / a,
            o = (n.parentNode, document.createElement("div")),
            r = document.createElement("div");
        n.removeAttribute("height"), n.removeAttribute("width"), o.className = "embed-outer", o.style.maxWidth = a + "px", r.className = "embed-inner", r.style.paddingBottom = 100 * i + "%", o.appendChild(r), n.parentNode.replaceChild(o, n), r.appendChild(n)
    }
}! function() {
    var e = document.querySelectorAll("span.icon");
    for (i = 0; i < e.length; i++) {
        var t = e[i],
            n = t.getAttribute("class"),
            a = t.getAttribute("data-icon"),
            o = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            r = document.createElementNS("http://www.w3.org/2000/svg", "use");
        r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#icon-" + a), o.setAttribute("class", n), o.setAttribute("data-icon", a), o.appendChild(r), t.parentNode.replaceChild(o, t)
    }
    var c, s, l = document.querySelectorAll("table");
    forEach(l, function(e, t) {
        table = t;
        var n = document.createElement("div");
        n.setAttribute("class", "tablewrap"), table.parentNode.insertBefore(n, table), n.appendChild(table)
    }), "undefined" != typeof ga && (c = document.querySelectorAll("a"), forEach(c, function(e, t) {
        var n = t; - 1 == n.href.indexOf(location.hostname) && n.addEventListener("click", function(e) {
            try {
                ga("send", "event", "UserAction", "External Link", e.target.href)
            } catch (e) {}
        }, !1), -1 != n.href.indexOf(".pdf") && n.addEventListener("click", function(e) {
            try {
                ga("send", "event", "UserAction", "PDF Download", e.target.href)
            } catch (e) {}
        }, !1)
    })), "undefined" != typeof ga && "connection" in navigator && (s = navigator.connection.saveData ? "on" : "off", ga("send", "event", "Browser", "saveData", s))
}(),
function() {
    function n() {
        e.classList.contains("mobile-nav-active") ? e.classList.remove("mobile-nav-active") : e.classList.add("mobile-nav-active"), a.classList.contains("active") ? (a.classList.remove("active"), a.setAttribute("hidden", "hidden")) : (a.classList.add("active"), a.removeAttribute("hidden")), i.forEach(function(e) {
            e.classList.contains("toggled") ? e.classList.remove("toggled") : e.classList.add("toggled")
        })
    }
    var e = document.body,
        t = document.querySelector("#wrapper"),
        a = document.querySelector(".nav-mobile"),
        i = document.querySelectorAll(".nav-skip, .btn-nav-mobile");
    document.createElement("div"), document.createElement("div");
    document.querySelector("#content").addEventListener("click", function() {
        t.classList.contains("active") && n()
    }, !1), document.querySelector(".site-header").addEventListener("click", function() {
        t.classList.contains("active") && n()
    }, !1), window.addEventListener("resize", function() {
        t.classList.contains("active") && n()
    }, !1), forEach(i, function(e, t) {
        t.addEventListener("click", function(e) {
            e.preventDefault(), n()
        }, !1)
    })
}(),
function() {
    var e = 0,
        t = document.querySelector(".navbar-mobile"),
        n = t.offsetHeight,
        a = t.offsetTop,
        i = document.querySelector(".nav-header"),
        o = document.getElementById("navbar"),
        r = i.offsetHeight + i.offsetTop;
    window.addEventListener("scroll", function() {
        e = window.pageYOffset, window.innerWidth <= 960 ? a < e ? (document.body.style.marginTop = n + "px", t.classList.add("fixed")) : (t.classList.remove("fixed"), document.body.style.marginTop = 0) : r < e ? o.classList.add("visible") : o.classList.remove("visible")
    })
}(), document.addEventListener("click", function(e) {
    var a, t;
    e.target.closest(".search-toggle") && (e.preventDefault(), document.getElementById("nav-mobile").classList.contains("active") && document.querySelectorAll(".nav-menu")[0].click(), a = document.activeElement, t = document.querySelectorAll(".nav-primary, .navbar-mobile"), forEach(t, function(e, n) {
        n.classList.contains("active") ? (n.classList.add("is-closing-search"), window.setTimeout(function() {
            n.classList.remove("active"), n.classList.remove("is-closing-search")
        }, 500)) : (n.classList.add("is-opening-search"), window.setTimeout(function() {
            var e, t;
            n.classList.add("active"), n.classList.remove("is-opening-search"), a.closest(".navbar-mobile") && (e = a.closest(".navbar-mobile")), a.closest(".nav-primary") && (e = a.closest(".nav-primary")), e && (t = e.querySelector(".search-input"), window.setTimeout(function() {
                t.focus()
            }, 500))
        }, 500))
    }))
}, !1), window.addEventListener("hashchange", function() {
    "search-nav-primary" == window.location.hash.substring(1) && (document.getElementById("nav-primary").classList.add("active"), window.setTimeout(function() {
        document.getElementById("search-input-nav-primary").focus()
    }, 500))
}, !1);
var sources = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'],
    embeds = document.querySelectorAll(sources.join(","));
embeds.length && fitEmbed(embeds),
    function() {
        var e = document.querySelectorAll(".video");

        function i(e) {
            e.preventDefault();
            window.innerWidth;
            var t = this.getElementsByTagName("img")[0],
                n = t.height / t.width,
                a = t.width,
                i = Math.floor(a * n),
                o = this.getAttribute("href"),
                r = 0 <= o.indexOf("vimeo") ? "vimeo" : "youtube",
                c = "youtube" == r ? "//www.youtube.com/embed/" : "//player.vimeo.com/video/",
                s = "youtube" == r ? getURLParameter("v", o) : o.split("/").pop();
            ga("send", "event", "Play Video", o), this.parentNode.innerHTML = '<iframe data-init="false" width="' + a + '" height="' + i + '" frameborder="0" src="' + c + s + '?autoplay=1&amp;rel=0&amp;wmode=transparent&amp;vq=hd720" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', fitEmbed(document.querySelectorAll('iframe[data-init="false"]')), document.querySelectorAll('iframe[data-init="false"]')[0].setAttribute("data-init", !0)
        }
        forEach(e, function(e, t) {
            var n = t,
                a = document.createElement("div");
            a.setAttribute("class", "play"), n.appendChild(a), n.addEventListener("click", i, !1)
        })
    }(), document.addEventListener("click", function(e) {
        var t, n, a;
        e.target.closest(".tab") && (e.preventDefault(), t = e.target.getAttribute("data-target"), n = document.querySelectorAll(".tab"), forEach(n, function(e, t) {
            t.classList.remove("active")
        }), e.target.classList.add("active"), a = document.querySelectorAll(".tab-content"), forEach(a, function(e, t) {
            t.classList.remove("active")
        }), document.getElementById(t).classList.add("active"))
    }, !1),
    function() {
        var n, a = document.querySelector("#wufoo-select");
        a && (n = function() {
            for (var e = document.querySelectorAll(".form-section"), t = 0; t < e.length; t++) e[t].classList.add("visually-hidden")
        }, a.addEventListener("change", function(e) {
            e.preventDefault(), n();
            var t = a.options[a.selectedIndex].value;
            t && document.querySelector("#" + t).classList.remove("visually-hidden")
        }), n())
    }();