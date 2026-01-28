---
title: "Publications"
layout: default
---

<style>
/* Publications list style */
.publication-list { list-style: none; padding: 0; margin: 0; }
.publication-list .card {
  position: relative;
  padding: 1rem;
  margin-bottom: 1.5rem;         /* larger vertical spacing between items */
  border-radius: 6px;
  background: var(--card-bg, #fff);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: transform .12s ease;
}

/* small visual lift on hover */
.publication-list .card:hover { transform: translateY(-2px); }

/* Abstract tooltip (hidden by default) */
.publication-list .card .abstract {
  position: absolute;
  left: calc(100% + 0.8rem);    /* appear to the right of the card */
  top: 0;
  width: min(36rem, 380px);
  max-width: 45vw;
  background: var(--card-bg, #fff);
  border: 1px solid rgba(0,0,0,0.08);
  padding: 0.8rem;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  opacity: 0;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity .16s ease, transform .16s ease;
  z-index: 30;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* Show on hover / keyboard focus (accessibility) */
.publication-list .card:hover .abstract,
.publication-list .card:focus-within .abstract {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

/* Small screen: make abstract part of the flow under each item */
@media (max-width: 720px) {
  .publication-list .card { padding-right: 1rem; }
  .publication-list .card .abstract {
    position: static;
    width: auto;
    max-width: none;
    margin-top: 0.6rem;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    border: 1px solid rgba(0,0,0,0.06);
    background: rgba(255,255,255,0.98);
  }
}
</style>

{% if site.data.publications %}
<ul class="publication-list">
{% for p in site.data.publications %}
  <li class="reveal card" tabindex="0">
    <strong>{{ p.authors }}</strong>, <em>{{ p.title }}</em>
    <div class="small">{{ p.venue }} — {{ p.year }} {% if p.url %}• <a href="{{ p.url }}">paper</a>{% endif %}</div>

    {% if p.abstract %}
      <div class="abstract">{{ p.abstract }}</div>
    {% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p class="small">No publications yet — add them to <code>_data/publications.yml</code>.</p>
{% endif %}