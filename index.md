---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
title: Home | Traffic Watch Northern Ireland | nidirect
permalink: index
---


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
            <div class="tab-content" id="newsTabContent" style="min-height: 63vh; max-height:63vh; overflow-y:scroll;">
                <!-- LATEST -->
                <div class="tab-pane fade active show" id="news-latest" role="tabpanel" aria-labelledby="news-latest-tab">
                    <p> &nbsp;
                        <h4><a href="index2"><img src="images/map/incident-high.png"> Major Incident - M1 Closed Junction 10 <small class="text-muted">29/03/2018 13:59:33</small></a></h4>
                        <hr>                        
                        <h4><a href="traffic-news#newsItem_1"><i class="fas fa-exclamation-triangle icon-warn-triangle"></i> Traffic News Summary <small class="text-muted">05/04/2018 16:57:15</small></a></h4>
                        <p>
                        In Greater Belfast traffic is busy on the following routes:-
                        </p>
                        <p>
                        M1 countrybound J2 - J3
                        leaving the M2 at J1A Nelson Street A12 Westlink towards York Street A2 Sydenham By Pass towards Dee Street (Bangor bound) Boucher Road towards Broadway Dunbar Link towards York Street Co Antrim - Newtownabbey / Carrickfergus - the main A2 Shore Road has a lane restriction in place in both directions at the Station Road Greenisland - while engineers undertake repairs to a gas pipeline.
                        </p>
                        <hr>
                        <h4><a href="traffic-news#newsItem_1"><i class="fas fa-exclamation-triangle icon-warn-triangle"></i> Traffic News Summary <small class="text-muted">05/04/2018 16:57:15</small></a></h4>
                        <p>
                        In Greater Belfast traffic is busy on the following routes:-
                        </p>
                        <p>
                        M1 countrybound J2 - J3
                        leaving the M2 at J1A Nelson Street A12 Westlink towards York Street A2 Sydenham By Pass towards Dee Street (Bangor bound) Boucher Road towards Broadway Dunbar Link towards York Street Co Antrim - Newtownabbey / Carrickfergus - the main A2 Shore Road has a lane restriction in place in both directions at the Station Road Greenisland - while engineers undertake repairs to a gas pipeline.
                        </p>
                        <hr>
                        <h4><a href="traffic-news#newsItem_1"><i class="fas fa-exclamation-triangle icon-warn-triangle"></i> Traffic News Summary <small class="text-muted">05/04/2018 16:57:15</small></a></h4>
                        <p>
                        In Greater Belfast traffic is busy on the following routes:-
                        </p>
                        <p>
                        M1 countrybound J2 - J3
                        leaving the M2 at J1A Nelson Street A12 Westlink towards York Street A2 Sydenham By Pass towards Dee Street (Bangor bound) Boucher Road towards Broadway Dunbar Link towards York Street Co Antrim - Newtownabbey / Carrickfergus - the main A2 Shore Road has a lane restriction in place in both directions at the Station Road Greenisland - while engineers undertake repairs to a gas pipeline.
                        </p>
                    </p>
                </div>
                <!-- GENERAL -->
                <div class="tab-pane fade" id="news-general" role="tabpanel" aria-labelledby="news-general-tab">
                          <p> General News
                          {% include traffic-news-links-inc.html %}
                    </p>
                </div>
                <!-- EMERGENCY -->
                <div class="tab-pane fade" id="news-emergency" role="tabpanel" aria-labelledby="news-emergency-tab">
                
                    <p> Winter and Emergency News </p>
                    <h4><a href="traffic-news#newsItem_1"><i class="fas fa-exclamation-triangle icon-warn-triangle"></i> Emergency Traffic News <small class="text-muted">05/04/2018 16:57:15</small></a></h4>
                    <p>
                    Nothing to report
                    </p>
                    
                    <hr>
                    
                    <h4><a href="traffic-news#newsItem_2"><i class="fas fa-snowflake icon-winter"></i> Some winter news <small class="text-muted">29/03/2018 13:59:33</small></a></h4>
                    <p>
                    East Belfast: Montrose Street, off the Albertbridge Road remains closed after the collpase of a derelict building. 
                    </p><p>
                    The items below refer to locations that are still affected by the August 2017 flooding event.
                    </p><p>
                    Co Londonderry Roads Closed
                    </p><p>
                    B49 Church Street Claudy – Collapsed bridge
                    U1180 Glenrandal Rd, Park – Collapsed bridge
                    Co Tyrone Roads Closed
                    </p><p>
                    C624 Camlough Road, Creggan
                    U1232 McConnell’s Branch Road off Gorticashel Rd, Glehull,Omagh
                    In the event of flooding, if anyone is in need of rescue dial 999 otherwise telephone the Flooding Incident Line on 0300 2000 100. The Flooding Incident Line provides a single point of contact to report when property is flooded or flooding.
                    </p>

                </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 d-none d-md-block" style="background-color: white">
        <!-- <h2>Travel Information Map</h2> -->

{% include map.html %}
{% include map-key.html %}
        </div>
    </div>
</div>

<br>

<p class="text-center">
    The information on this website is provided by Transport NI of the Department for Infrastructure in Northern Ireland. Transport NI is the sole roads authority for all public roads in Northern Ireland. <br>
</p>

