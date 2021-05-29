---
layout: layout.liquid
---

# Welcome

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})
  {% endfor %}
