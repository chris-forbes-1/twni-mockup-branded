---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
title: Home | Traffic Watch Northern Ireland | nidirect
---

<h1 id="main-content">
    Welcome to Traffic Watch Northern Ireland
</h1>
<p class="intro">
    The site provides traffic news, images and live feeds from traffic cameras and information on current and future roadworks.
</p>
<p>
    The information on this website is provided by Transport NI of the Department for Infrastructure in Northern Ireland. Transport NI is the sole roads authority for all public roads in Northern Ireland. <br />
</p>


<div class="container-fluid traffic-news">
<div class="row">
    <div class="col-md-4">
        <h2>Latest Traffic Information</h2>
{% include traffic-news-links-inc.html %}
    </div>
    <div class="col-md-8 hidden-sm" style="background-color: white">
        <h2>Travel Information Map</h2>
{% include map.html %}
    </div>
</div>
</div>

<br/>