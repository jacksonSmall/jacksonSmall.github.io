layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true

{% include base_path %}

Below is a selection of my major projects in Data Science, Machine Learning, and Research. Each project highlights a combination of technical engineering and theoretical analysis.

{% for post in site.portfolio reversed %}
{% include archive-single.html %}
{% endfor %}
