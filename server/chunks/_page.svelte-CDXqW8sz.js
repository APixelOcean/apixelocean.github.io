import { X as ensure_array_like, Y as stringify, S as store_get, T as unsubscribe_stores, x as pop, Z as fallback, _ as bind_props, v as push } from './index2-dWDrxiIF.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { s as storable } from './palette-BwHxkLMq.js';
import './index-erdRxbsm.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Article($$payload, $$props) {
  let id = fallback($$props["id"], () => -1, true);
  let href = fallback($$props["href"], "/");
  let title = fallback($$props["title"], "");
  let date = fallback($$props["date"], "");
  let description = fallback($$props["description"], "");
  $$payload.out += `<div class="article-wrapper"${attr("id", id)}><a class="article"${attr("href", href)}><div class="article-info"><div class="article-title">${escape_html(title)}</div> <div class="article-details"><div class="article-date">${escape_html(date)}</div></div></div> <div class="article-desc">${html(description)}</div></a></div>`;
  bind_props($$props, { id, href, title, date, description });
}
function Project($$payload, $$props) {
  let id = fallback($$props["id"], () => -1, true);
  let href = fallback($$props["href"], "/");
  let title = fallback($$props["title"], "");
  let tags = fallback($$props["tags"], "");
  let description = fallback($$props["description"], "");
  let img = fallback($$props["img"], "");
  $$payload.out += `<a class="project"${attr("href", href)}${attr("id", id)}><div class="project-details"><div class="project-overview"><div class="project-title">${escape_html(title)}</div> <div class="project-tags">Tags: ${escape_html(tags)}</div></div> <div class="project-desc">${escape_html(description)}</div></div> <div class="project-image">${escape_html(img)}</div></a>`;
  bind_props($$props, { id, href, title, tags, description, img });
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let activeSection = storable("activeSection", "writing");
  let searchQuery = "";
  let articles = [
    {
      id: 0,
      href: "/articles/first-post",
      title: "First Post",
      date: "Dec 4, 2024",
      description: "My first post on this new version of my website."
    }
  ];
  let projects = [];
  let filteredArticles = articles;
  let filteredProjects = projects;
  filteredArticles = articles.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  filteredProjects = projects.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const each_array = ensure_array_like(filteredProjects);
  const each_array_1 = ensure_array_like(filteredArticles);
  $$payload.out += `<div class="container"><header><div class="logo-container"><button type="button" id="palette-button" aria-label="Switch Color Palette"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 28 28" shape-rendering="crispEdges"><metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata><path d="M9 0h9M7 1h13M5 2h4M11 2h11M4 3h4M9 3h2M12 3h4M19 3h4M3 4h1M5 4h11M20 4h4M2 5h1M4 5h2M7 5h11M20 5h1M23 5h2M1 6h1M3 6h23M3 7h2M6 7h2M10 7h7M18 7h8M0 8h1M5 8h3M10 8h2M15 8h3M19 8h1M22 8h5M4 9h2M7 9h4M16 9h2M19 9h1M23 9h4M5 10h5M12 10h3M16 10h5M23 10h5M2 11h3M6 11h4M11 11h4M16 11h12M5 12h1M7 12h3M11 12h4M16 12h12M6 13h6M15 13h13M7 14h5M14 14h2M18 14h10M1 15h1M7 15h9M18 15h10M1 16h2M7 16h3M13 16h5M20 16h5M26 16h2M2 17h2M7 17h2M10 17h3M14 17h4M20 17h1M23 17h5M6 18h4M13 18h1M15 18h6M23 18h1M26 18h1M0 19h1M4 19h5M14 19h1M17 19h6M25 19h2M1 20h1M6 20h2M17 20h6M24 20h2M6 21h2M15 21h4M20 21h2M24 21h2M7 22h1M9 22h2M16 22h5M24 22h1M3 23h1M10 23h3M23 23h1M4 24h1M18 24h2M17 25h1M10 27h1M12 27h1"></path></svg></button></div> <div class="nav-container"><ul class="nav"><li><button${attr("class", `button-section ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) === "projects" ? "active" : ""
  ].filter(Boolean).join(" "))}`)} type="button">projects</button></li> <li><button${attr("class", `button-section ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) === "simulations" ? "active" : ""
  ].filter(Boolean).join(" "))}`)} type="button">simulations</button></li> <li><button${attr("class", `button-section ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) === "writing" ? "active" : ""
  ].filter(Boolean).join(" "))}`)} type="button">writing</button></li> <li><button${attr("class", `button-section ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) === "all" ? "active" : ""
  ].filter(Boolean).join(" "))}`)} type="button">all</button></li></ul></div> <div class="search-container"><input type="text"${attr("placeholder", `Search ${stringify(store_get($$store_subs ??= {}, "$activeSection", activeSection))}...`)}${attr("value", searchQuery)} aria-label="Search items"></div></header> <main><div class="main-content"><div class="column" id="column-left"><div class="intro" id="about"><div class="intro-title"><h2>ABOUT ME</h2></div> <div class="intro-text"><p>Hi, I'm Chase. Mathematical biologist and creative technologist. <br>Currently at <a href="https://fathom.info" target="_blank">Fathom Information Design</a>. Previously at Harvard.</p> <br> <p><b>Interests</b>: Data visualization and modeling for social impact, evolutionary dynamics,
              computational theories of intelligence.</p> <br> <p><b>Goals</b>: Do something(s) interesting.</p></div></div></div> <div class="column" id="column-right"><div${attr("class", `projects ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "projects" && store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "all" ? "hidden" : ""
  ].filter(Boolean).join(" "))}`)} id="projects"><div class="projects-title"><h2>PROJECTS</h2> <p class="desc-text">Larger-scale work with tangible results and takeaways.</p></div> <div class="project-grid"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    Project($$payload, {
      id: project.id,
      title: project.title,
      href: project.href,
      tags: project.tags,
      description: project.description,
      img: project.img
    });
  }
  $$payload.out += `<!--]--></div></div> <div${attr("class", `simulations ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "simulations" && store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "all" ? "hidden" : ""
  ].filter(Boolean).join(" "))}`)} id="simulations"><div class="sims-title"><h2>SIMULATIONS</h2> <p class="desc-text">Largely inspired by the sites of <a href="http://www.complexity-explorables.org" target="_blank">Dirk Brockmann</a> and <a href="http://ncase.me" target="_blank">Nicky Case</a>,
              these are interactive simulations for understanding cool natural phenomena.</p></div> <div class="sim-list"></div></div> <div${attr("class", `articles ${stringify([
    store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "writing" && store_get($$store_subs ??= {}, "$activeSection", activeSection) !== "all" ? "hidden" : ""
  ].filter(Boolean).join(" "))}`)} id="writing"><div class="articles-title"><h2>WRITING</h2> <p class="desc-text">A variety of musings and thoughts.</p></div> <div class="article-list"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let article = each_array_1[$$index_1];
    Article($$payload, {
      id: article.id,
      title: article.title,
      date: article.date,
      description: article.description,
      href: article.href
    });
  }
  $$payload.out += `<!--]--></div></div></div></div></main> <footer>oh hi there. how did ya find me?</footer></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CDXqW8sz.js.map
