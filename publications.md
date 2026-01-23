---
title: "Publications"
layout: default
---

Below are publications from `_data/publications.yml`. Edit that file to add entries.

{% if site.data.publications %}
<ul>
{% for p in site.data.publications %}
  <li class="reveal card">
    <strong>{{ p.authors }}</strong>, <em>{{ p.title }}</em>
    <div class="small">{{ p.venue }} — {{ p.year }} {% if p.url %}• <a href="{{ p.url }}">paper</a>{% endif %}</div>
  </li>
{% endfor %}
</ul>
{% else %}
<p class="small">No publications yet — add them to <code>_data/publications.yml</code>.</p>
{% endif %}