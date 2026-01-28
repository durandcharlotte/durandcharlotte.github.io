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
  border-radius: 8px;
  background: #2b2b2b;           /* dark grey box */
  color: #f3f3f3;                /* light text for contrast */
  box-shadow: 0 1px 3px rgba(0,0,0,0.18);
  transition: transform .12s ease;
}

/* small visual lift on hover */
.publication-list .card:hover { transform: translateY(-2px); }

/* meta line */
.publication-list .card .small {
  color: #cfcfcf;
  margin-top: 0.25rem;
  font-size: 0.95rem;
}

/* links */
.publication-list .card a {
  color: #8ec6ff;
  text-decoration: underline;
}

/* Abstract panel hidden by default (appears below the card) */
.publication-list .card .abstract {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-6px);
  transition: max-height .28s ease, opacity .18s ease, transform .18s ease, padding .18s ease;
  background: #1f1f1f;           /* slightly darker panel for the abstract */
  color: #eaeaea;
  margin-top: 0.6rem;
  border-radius: 6px;
  padding: 0 0.8rem;             /* vertical padding expands when open */
  border: 1px solid rgba(255,255,255,0.03);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Show the abstract below the card on hover or keyboard focus */
.publication-list .card:hover .abstract,
.publication-list .card:focus-within .abstract {
  max-height: 400px;             /* large enough to hold typical abstracts */
  opacity: 1;
  transform: translateY(0);
  padding: 0.8rem;
}

/* Ensure keyboard users can reveal the abstract */
.publication-list .card { outline: none; }
.publication-list .card:focus-within { box-shadow: 0 0 0 3px rgba(142,198,255,0.12); }

/* Small screen: the abstract is always part of the flow (no animation jump) */
@media (max-width: 720px) {
  .publication-list .card { padding-right: 1rem; }
  .publication-list .card .abstract {
    position: static;
    max-height: none;
    opacity: 1;
    transform: none;
    padding: 0.8rem;
    margin-top: 0.6rem;
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