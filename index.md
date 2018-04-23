---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
title: Home | Traffic Watch Northern Ireland | nidirect
---

<br>

<!--
<h1 id="main-content">
    Welcome to Traffic Watch Northern Ireland
</h1>
<p class="intro">
    The site provides traffic news, images and live feeds from traffic cameras and information on current and future roadworks.
</p>
-->

<div class="container-fluid traffic-news"> 
    <div class="row">
        <div class="col-md-4">
            <h2>Traffic News</h2>
          <div class="bd-example bd-example-tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active show" id="news-latest-tab" data-toggle="tab" href="#news-latest" role="tab" aria-controls="news-latest" aria-selected="true">Latest</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="news-general-tab" data-toggle="tab" href="#news-general" role="tab" aria-controls="news-general" aria-selected="false">General</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="news-emergency-tab" data-toggle="tab" href="#news-emergency" role="tab" aria-controls="news-emergency" aria-selected="false">Emergency</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade active show" id="news-latest" role="tabpanel" aria-labelledby="news-latest-tab">
                    <p>
                        Latest News
                      {% include traffic-news-links-inc.html %}
                    </p>
                </div>
                <div class="tab-pane fade" id="news-general" role="tabpanel" aria-labelledby="news-general-tab">
                          <p> General News
                      {% include traffic-news-links-inc.html %}
                    </p>
                </div>
                <div class="tab-pane fade" id="news-emergency" role="tabpanel" aria-labelledby="news-emergency-tab">
                          <p> Winter and Emergency News
                      {% include traffic-news-links-inc.html %}
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 hidden-sm" style="background-color: white">
        <!-- <h2>Travel Information Map</h2> -->
{% include map.html %}
        </div>
    </div>
</div>

<p>
    The information on this website is provided by Transport NI of the Department for Infrastructure in Northern Ireland. Transport NI is the sole roads authority for all public roads in Northern Ireland. <br>
</p>

<br>