---
layout: default
title: Home
permalink: /
description: Academic portfolio of Heriberto Espino Montelongo.
---

<section class="portfolio-hero" aria-labelledby="hero-title">
  <p class="portfolio-kicker">Academic portfolio · Puebla, Mexico</p>
  <h1 id="hero-title">Heriberto Espino Montelongo</h1>
  <p class="portfolio-role">Actuarial Science and Data Science student at Universidad de las Américas Puebla.</p>
  <p class="portfolio-intro">I work across stochastic geometry, probability, time series, financial risk, and interpretable machine learning. My projects combine mathematical modeling, reproducible computation, and applied data analysis.</p>
  <div class="portfolio-hero-footer">
    <nav class="portfolio-hero-links" aria-label="Profile links">
      <a href="mailto:{{ site.data.socials.email }}">Email</a>
      <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}/">LinkedIn</a>
      <a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a>
    </nav>
    <a class="portfolio-cv-link" href="{{ '/cv/' | relative_url }}">View CV <span aria-hidden="true">→</span></a>
  </div>
</section>

{% assign papers = site.pages | where: "portfolio_type", "paper" | sort: "importance" %}
{% assign projects = site.projects | sort: "importance" %}
{% assign notes = site.pages | where: "portfolio_type", "note" | sort: "importance" %}

{% include portfolio/section.liquid id="papers" title="Papers" eyebrow="Working manuscripts" intro="Research in stochastic geometry and empty-region proximity graphs." items=papers index_url="/papers/" %}
{% include portfolio/section.liquid id="projects" title="Projects" eyebrow="Research and software" intro="Applied modeling, reproducible computation, and interpretable machine learning." items=projects index_url="/projects/" %}
{% include portfolio/section.liquid id="notes" title="Notes" eyebrow="Mathematical notes" intro="Expository work connecting probability, measure theory, and geometric intuition." items=notes index_url="/notes/" %}

<section class="portfolio-section portfolio-contact" id="contact" aria-labelledby="contact-title">
  <div class="portfolio-section-heading">
    <div>
      <p class="portfolio-kicker">Get in touch</p>
      <h2 id="contact-title">Contact</h2>
      <p class="portfolio-section-intro">Open to research, software, and academic collaboration.</p>
    </div>
  </div>
  <div class="portfolio-contact-links">
    <a href="mailto:{{ site.data.socials.email }}">{{ site.data.socials.email }}</a>
    <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}/">LinkedIn</a>
    <a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a>
    <a href="{{ '/cv/' | relative_url }}">CV</a>
  </div>
</section>
