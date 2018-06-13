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
<div class="row">
    <div class="alert alert-danger fas fa-exclamation" role="alert" style="min-width:100%; background-color:#e21d0b; color:white; text-align:center">
        Storm Ophelia is due to hit the west coast by 17:00 tonight, please visit our emergency news page for more information
    </div>
</div>
<div class="container-fluid traffic-news"> 
    <script type="text/javascript">
        function replaceMap(element)
        {
            let src="images/example_map.png";
            if(element ==='event')
            {
                src='images/map_event_example.png';
            }
            else
            {
                src='images/incident_example.png';
            }
            document.getElementById('mainMap').src=src;
        }
    </script>
    <div class="row">
        <div class="col-md-4">
            <br/>
          <div class="bd-example bd-example-tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active show" id="news-latest-tab" data-toggle="tab" href="#news-latest" role="tab" aria-controls="news-latest" aria-selected="true">Traffic News</a>
                </li>
            </ul>
            <div class="tab-content" id="newsTabContent" style="min-height: 63vh; max-height:63vh; overflow-y:scroll;">
                <!-- LATEST -->
                <div class="tab-pane fade active show" id="news-latest" role="tabpanel" aria-labelledby="news-latest-tab">
                   <br/>
                   <hr>
                   <h1 class="header">Current incidents</h1>
                   <hr>
                   <div id="accordion">
                     <div class="card">
                       <div class="card-header" id="headingOne">
                         <h5 class="mb-0">
                            <button class="btn btn-link collapsed col-12 d-flex align-items-left" style="text-align:left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h3 style="color: #7f2131;font-weight: 400;" class="d-inline col-10"><img src="images/map/incident-high.png">&nbsp;Broken down lorry M2</h3>
                                <span class="col-2 fas fa-chevron-right" style="font-size: 25px;">
                                </span>
                            </button>
                         </h5>
                       </div>
                       <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                         <div class="card-body">
                           A broken down lorry on the M2 northbound midway between J2 Greencastle and J4 Sandyknowes has been moved to the harshoulder
                                                      <br/><br/>
                                                      <button class="btn btn-info" name="incident" onclick="replaceMap('incident')">View On map </button>
                         </div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header" id="headingTwo">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed col-12 d-flex align-items-center" style="text-align:left" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h3 style="color: #7f2131;font-weight: 400;" class="d-inline col-10"><img src="images/map/incident-high.png">&nbsp;Traffic collision Ballymena</h3>
                                <span class="col-2 fas fa-chevron-right" style="font-size: 25px;">
                                </span>
                           </button>
                         </h5>
                       </div>
                       <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                         <div class="card-body">
                           The Old Cullybackey Road, Ballymena, has reopened following an earlier traffic collision
                           <br/><br/>
                           <button class="btn btn-info" name="incident" onclick="replaceMap('incident')">View On map </button>
                         </div>
                       </div>
                     </div>
                   </div>
                   <hr>
                   <h1 class="header">&nbsp;Travel News</h1>
                   <hr>
                    <div id="accordion">
                      <div class="card">
                        <div class="card-header" id="headingThree">
                          <h5 class="mb-0">
                             <button class="btn btn-link collapsed col-12 d-flex align-items-center" data-toggle="collapse" style="text-align:left" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                 <h3 style="color: #7f2131;font-weight: 400;" class="d-inline col-10"><i class="fas fa-exclamation-triangle icon-warn-triangle"></i>&nbsp;Traffic News Summary</h3>
                                 <span class="col-2 fas fa-chevron-right" style=" font-size: 25px;">
                                 </span>
                             </button>
                          </h5>
                        </div>
                        <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                          <div class="card-body">
                              <p>
                                  In Greater Belfast traffic is busy on the following routes:-
                              </p>
                              <p>
                                  <dl>
                                      <dt>M1 countrybound J2 - J3</dt>
                                      <dd>leaving the M2 at J1A Nelson Street A12 Westlink towards York Street A2 Sydenham By Pass towards Dee Street (Bangor bound) Boucher Road towards Broadway Dunbar Link towards York Street Co Antrim</dd> 
                                      <dt>Newtownabbey / Carrickfergus </dt> 
                                      <dd>the main A2 Shore Road has a lane restriction in place in both directions at the Station Road Greenisland - while engineers undertake repairs to a gas pipeline.</dd>
                                   </dl>
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <h1 class="header">&nbsp;Current Events</h1>
                    <hr>
                    <div id="accordion">
                     <div class="card">
                       <div class="card-header" id="headingFour">
                         <h5 class="mb-0">
                            <button class="btn btn-link collapsed col-12 d-flex align-items-center" style="text-align:left" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h3 style="color: #7f2131;font-weight: 400;" class="d-inline col-10"><img src="images/map/event-med.png">&nbsp;Annual Parade</h3>
                                <span class="col-2 fas fa-chevron-right" style="font-size: 25px;">
                                </span>
                            </button>
                         </h5>
                       </div>
                       <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                         <div class="card-body">
                           Annual parade due to pass through 
                           <dl>
                                <dt>University Rd</dt>
                                <dd>09:00 - 09:30</dd>
                                <dt>Lisburn Rd</dt>
                                <dd>09:30 - 10:30</dd>
                                <dt>Cranmore Park</dt>
                                <dd>10:30 - 11:00</dd>
                           <br/><br/>
                           <button class="btn btn-info" name="incident" onclick="replaceMap('event')">View On map </button>
                           </dl>
                         </div>
                       </div>
                     </div>
                     <div class="card">
                       <div class="card-header" id="headingFive">
                         <h5 class="mb-0">
                           <button class="btn btn-link collapsed col-12 d-flex align-items-center" style="text-align:left" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <h3 style="color: #7f2131;font-weight: 400;" class="d-inline col-md-10"><img src="images/map/event-med.png">&nbsp;Another Example Event</h3>
                                <span class="col-2 fas fa-chevron-right" style=" font-size: 25px;">
                                </span>
                           </button>
                         </h5>
                       </div>
                       <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                         <div class="card-body">
                           The Old Cullybackey Road, Ballymena, has reopened following an earlier traffic collision
                           <br/><br/>
                           <button class="btn btn-info" name="incident" onclick="replaceMap('event')">View On map </button>                           
                         </div>
                       </div>
                     </div>
                   </div>
                   <hr>               
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

