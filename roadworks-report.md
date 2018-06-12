---
# 
layout: default
title: Roadworks Report | Traffic Watch Northern Ireland | nidirect
permalink: roadworks-report
---

# Roadworks Report
<script type="text/javascript">
    function changeTab()
    {
        $('#tabs a[href="#roadmap"]').tab('show');
    }
</script>

<style>
    .nav-tabs .nav-link {
        color: #000 !important;
    }
    .nav > li {
        color: #000 !important;
        background-color:#cdcfd1 !important;        
    }
</style>
<div class="container-fluid traffic-news" style="padding-left:0px !important; padding-right:0px !important; background-color:#dee2e6">
    <div class="col-md-12" style="padding-left:1px !important; padding-right:0px !important; border-left-width: 1px;">
        <div class="bd-example bd-example-tabs">
            <ul class="nav nav-tabs" id="tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active show" id="roadworks-tab" data-toggle="tab" href="#data" role="tab" aria-controls="roadworks-report" aria-selected="true">Roadworks Report</a>
                </li>
                <li class="nav-item" style="border-color:white">
                  <a class="nav-link show" id="roadworks-map" data-toggle="tab" href="#roadmap" role="tab" aria-controls="news-latest" aria-selected="true">Map View</a>
                </li>                
            </ul>
            <div class="tab-content" id="roadworks-report" style="min-height: 65vh; max-height:65vh; overflow-y:scroll;">
                <div class="tab-pane active" id="data">
<div id="content">
    <div class="columns-1" id="main-content" role="main">
        <div class="row-fluid">
            <div id="column-1">
                <div id="layout-column_column-1">
                    <div id="p_p_id_56_INSTANCE_Is47_"> <span id="p_56_INSTANCE_Is47"></span>
                        <div class="portlet-borderless-container" style="">
                            <div class="portlet-body">
                                <div class="journal-content-article">
                                </div>
                                <div class="entry-links"> </div>
                            </div>
                        </div>
                    </div>
                    <div class="portlet-boundary portlet-boundary_roadwork_WAR_twniportlet_ portlet-static portlet-static-end portlet-borderless " id="p_p_id_roadwork_WAR_twniportlet_INSTANCE_ujAY15YX2VV6_"> <span id="p_roadwork_WAR_twniportlet_INSTANCE_ujAY15YX2VV6"></span>
                        <div class="portlet-borderless-container" style="">
                            <div class="portlet-body" style="padding-left:10px">
                                <div class="searchRoadworkForm">
                                    <form id="searchRoadworkForm">
                                        <fieldset>
                                            <legend>Find roadworks</legend>
                                            <p>
                                                <select id="roadtype" name="roadType">
                                                    <option value="" selected="selected">All Roads</option>
                                                    <option value="MOTORWAY">Motorways</option>
                                                    <option value="A_ROAD">A Roads</option>
                                                    <option value="B_ROAD">B Roads</option>
                                                    <option value="OTHER">Other Roads</option>
                                                </select>
                                                <input id="todayRadio" name="period" type="radio" value="TODAY" checked="checked">
                                                <label for="todayRadio">Today</label>&nbsp;
                                                <input id="tomorrowRadio" name="period" type="radio" value="TOMORROW">
                                                <label for="tomorrowRadio">Tomorrow</label>&nbsp;
                                                <input id="rangeRadio" name="period" type="radio" value="RANGE">
                                                <label for="rangeRadio">From</label>
                                                <input id="fromDate" name="fromDate" class="search-dateInput hasDatepicker" type="text" value="" size="12" disabled="disabled"> &nbsp; <span>To</span>
                                                <input id="toDate" name="toDate" class="search-dateInput hasDatepicker" type="text" value="" size="12" disabled="disabled"> </p>
                                            <p> </p>
                                            <p>
                                                <label for="searchText">Containing text</label>&nbsp;
                                                <input id="searchText" name="searchText" type="text" value="" size="30" maxlength="32"> &nbsp;
                                                <input id="autoRefresh1" name="autoRefresh" type="checkbox" value="true" checked="checked">
                                                <label for="autoRefresh1"> Auto-refresh results</label>
                                                <input type="hidden" name="_autoRefresh" value="on"> </p>
                                            <p>
                                                <input type="submit" value="Search"> </p>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class="roadwork view">
                                    <div id="roadworkTable_wrapper" class="dataTables_wrapper" role="grid">
                                        <table id="roadworkTable" summary="This table provides information on Roadworks including their location, severity and expected duration." class="table table-striped" aria-describedby="roadworkTable_info">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting" role="columnheader" tabindex="0" aria-controls="roadworkTable" rowspan="1" colspan="1" aria-label="Map: activate to sort column ascending" style="width: 25px;">Map</th>
                                                    <th class="sorting" role="columnheader" tabindex="0" aria-controls="roadworkTable" rowspan="1" colspan="1" aria-label="Road: activate to sort column ascending" style="width: 76px;">Road</th>
                                                    <th class="sorting_disabled" role="columnheader" rowspan="1" colspan="1" aria-label="Information" style="width: 359px;">Information</th>
                                                    <th class="sorting" role="columnheader" tabindex="0" aria-controls="roadworkTable" rowspan="1" colspan="1" aria-label="Start Time: activate to sort column ascending" style="width: 29px;">Start Time</th>
                                                    <th class="sorting" role="columnheader" tabindex="0" aria-controls="roadworkTable" rowspan="1" colspan="1" aria-label="End Time: activate to sort column ascending" style="width: 29px;">End Time</th>
                                                    <th class="sorting_desc" role="columnheader" tabindex="0" aria-controls="roadworkTable" rowspan="1" colspan="1" aria-sort="descending" aria-label="Last Updated: activate to sort column ascending" style="width: 49px;">Last Updated</th>
                                                </tr>
                                            </thead>
                                            <tbody role="alert" aria-live="polite" aria-relevant="all">
                                                <tr class="roadwork Medium odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()" title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">C650/U416, Glenhoy Road - Augher</td>
                                                    <td class=" "> <span class="title">C650 / U416 Glenhoy Road Augher, Road Closure, Continuously</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From C657 Newtownsaville Road to C650 Glenhoy Road/ Knockmanny Road Junction</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>C650 / U416 Glenhoy Road Augher&nbsp;from C657 Newtownsaville Road to C650 Glenhoy Road/ Knockmanny Road Junction - Road Closure (Continuously) Traffic Diversion in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NIE Networks Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 08:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Sat, 23 Jun 2018 17:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 15:44 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">U7512, Thomas Street - Dungannon</td>
                                                    <td class=" "> <span class="title">U7512 Thomas Street, Dungannon, Lane Closure, Daily </span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From 50m North of junction with Greers Road to 50m South of junction with Greers Road</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>U7512 Thomas Street, Dungannon, from 50m North of junction with Greers Road to 50m South of junction with Greers Road - Lane Closure (Daily) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NIE Networks Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 13:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 17:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 14:22 </td>
                                                </tr>
                                                <tr class="roadwork Low odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">C0663, Townview Avenue - Omagh</td>
                                                    <td class=" "> <span class="title">C0663 Townview Avenue, Omagh, Lane Closure, Daily-Weekdays </span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From 30m from entrance of 2 Townview Avenue (Dublin Road Side) to 30m from entrance of 2 Townview Avenue (Kelvin Road Side)</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>2A Townview Avenue, Omagh, from 30m from entrance of 2 Townview Avenue (Dublin Road Side) to 30m from entrance of 2 Townview Avenue (Kelvin Road Side) - Lane Closure (Daily - Weekdays Only) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NI Water Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 09:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 17:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 14:12 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">C636, Tullycullion Road - Donaghmore</td>
                                                    <td class=" "> <span class="title">C636 Tullycullion Road, Donaghmore, Lane Closure, Off-Peak </span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From Mullaghmore Road to Cookstown Road</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>C636 Tullycullion Road, Donaghmore, from Mullaghmore Road to Cookstown Road - Lane Closure (Off-Peak Only) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>BT Contractor </dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 16:30 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 13:58 </td>
                                                </tr>
                                                <tr class="roadwork Medium odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">A42, Mayogall Road - Clady</td>
                                                    <td class=" "> <span class="title">A42 Mayogall Road, Clady, Lane Closure, Off-Peak Only</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From 100m west of U5068 Mullaghnamoyagh Road to 300m east of U5068 Mullaghnamoyagh Road</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>A42 Mayogall Road, Clady, from 100m west of U5068 Mullaghnamoyagh Road to 300m east of U5068 Mullaghnamoyagh Road - Lane Closure (Off-Peak Only) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>DfI Roads Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 29 Jun 2018 16:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 11:50 </td>
                                                </tr>
                                                <tr class="roadwork Medium even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">B18, Aughrim Road - Toome</td>
                                                    <td class=" "> <span class="title">B18 Aughrim Road, Toome, Lane Closure, Off-Peak Only</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From 200m west of U5108 Airfield Road to 200m east of U5108 Airfield Road</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>B18 Aughrim Road, Toome, from 200m west of U5108 Airfield Road to 200m east of U5108 Airfield Road - Lane Closure (Off-Peak Only) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>DfI Roads Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 29 Jun 2018 16:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 11:38 </td>
                                                </tr>
                                                <tr class="roadwork Low odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">Ballyeaston Road - Ballyclare</td>
                                                    <td class=" "> <span class="title">Temporary Lane Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Temporary lane closure from Victoria Road junction to 9 Ballyeaston Road (off peak only)&nbsp; for excavation to extend Virgin Media network.</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>Virgin Media</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 02 Jul 2018 16:30 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 11:13 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">Ballymena Road - Ballymoney</td>
                                                    <td class=" "> <span class="title">Temporary Lane Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Temporary lane closure (daily) from house No 30 to junction with Carnany Gardens to connect new gas mains on behalf of Firmus Energy.</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>Firmus Energy Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Thu, 14 Jun 2018 16:30 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Mon, 11 Jun 2018 11:10 </td>
                                                </tr>
                                                <tr class="roadwork Low odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">A31, Magherafelt Road - Moneymore</td>
                                                    <td class=" "> <span class="title">A31 Magherafelt Road, Moneymore, Lane Closure,Overnight Only</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From A point 20m south-west of Gortagilly Road to A point 20m north-east of Gortagilly Road</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>A31 Magherafelt Road, Moneymore, from A point 20m south-west of Gortagilly Road to A point 20m north-east of Gortagilly Road - Lane Closure (Overnight Only) Traffic Control in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NI Water Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 19:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 18 Jun 2018 05:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 15:47 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">U133, Kirlish Road - Drumquin</td>
                                                    <td class=" "> <span class="title">U133, Bullock Park Road, Drumquin, Road Closure,Continuously</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From Kirlish Road with the Bolaght Road junction to 250meters past the Kirlish Road/Meencargagh Road junction</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>U133, Bullock Park Road, Drumquin, from Kirlish Road with the Bolaght Road junction to 250meters past the Kirlish Road/Meencargagh Road junction - Road Closure (Continuously) Traffic Diversion in Operation - Delays Expected</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NIE Networks Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 07:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 22 Jun 2018 17:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 15:03 </td>
                                                </tr>
                                                <tr class="roadwork Medium odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">U130, Bradan Road - Drumquin</td>
                                                    <td class=" "> <span class="title">U130 Sloughan Road, Drumquin, Road Closure, Continuously</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Location</dt>
                                                            <dd>From 110 Sloughan Road, Drumquin, BT78 4QN to C66 Bradan Road, Drumquin, BT78 4QQ</dd>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>U130 Sloughan Road, Drumquin, from 110 Sloughan Road, Drumquin, BT78 4QN to C66 Bradan Road, Drumquin, BT78 4QQ - Road Closure (Continuously) Traffic Diversion in Operation - Delays Expected</p>
                                                                <p>&nbsp;</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NIE Networks Contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 08:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Sat, 23 Jun 2018 17:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 14:08 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()" title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">Maryville Street - Belfast</td>
                                                    <td class=" "> <span class="title">Road Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Road Closure: Maryville Street, Belfast from Junction with Ormeau Avenue to Bankmore Street. Commencing Monday 11th June at 07:30 to Friday 6th July at 21:00, continuously for 4 weeks.</p>
                                                                <p>Closure required for NI Water works.</p>
                                                                <p>Alternate Route: Apsley Street - Bankmore Street</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NI Water</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 07:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 06 Jul 2018 21:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 13:44 </td>
                                                </tr>
                                                <tr class="roadwork Medium odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">Newtownbreda Road</td>
                                                    <td class=" "> <span class="title">Road Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Road Closure: Newtownbreda Road, Belfast from Junction with Purdysburn Road to Roundabout close to Junction with A55 Belvoir Road - Commencing Monday 11th June at 7:00 to Friday 15th June at 20:00, continuously for 5 days.</p>
                                                                <p>Required for NI Water works.</p>
                                                                <p>Alternate Route: Hospital Road - Milltown Road - A55 Belvoir Road</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NI Water</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 11 Jun 2018 07:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 15 Jun 2018 20:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 13:39 </td>
                                                </tr>
                                                <tr class="roadwork Medium even">
                                                    <td class=" "> <a href="#" onclick="changeTab()" title="Click on icon to view location on map."> <span style="display:none">2</span> <img src="images/map/roadwork-med.png" alt="Roadwork with medium severity"> </a> </td>
                                                    <td class=" ">Linenhall Street - Belfast</td>
                                                    <td class=" "> <span class="title">Lane Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Lane Closure: Linenhall Street from Ormeau Avenue to Clarence Street - Commencing Monday 4th June at 8:00 to Friday 10th August at 21:00 continuously for 10 weeks.</p>
                                                                <p>Closure required for NI Water - Sewer Laying</p>
                                                                <p>Alternate Route: Clarence Street, Adelaide Street</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>NI Water</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>5-15 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Mon, 04 Jun 2018 08:00 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 10 Aug 2018 21:00 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 13:15 </td>
                                                </tr>
                                                <tr class="roadwork Low odd">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">Loughanmore Road @ CherryHill Road - Templepatrick</td>
                                                    <td class=" "> <span class="title">Temporary Lane Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Temporary lane closure from Burnside Road to Sweetwall Road - BT fault.</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>BT</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 12 Jun 2018 16:30 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Fri, 08 Jun 2018 11:44 </td>
                                                </tr>
                                                <tr class="roadwork Low even">
                                                    <td class=" "> <a href="#" onclick="changeTab()"  title="Click on icon to view location on map."> <span style="display:none">1</span> <img src="images/map/roadwork-low.png" alt="Roadwork with low severity"> </a> </td>
                                                    <td class=" ">B23, Malone Road - Belfast</td>
                                                    <td class=" "> <span class="title">Lane Closure</span>
                                                        <br>
                                                        <dl>
                                                            <dt>Description</dt>
                                                            <dd>
                                                                <p>Lane closed from Windsor Avenue to Windsor Avenue North from 09.30 hrs until 15.30 hrs daily.Weekdays only.</p>
                                                            </dd>
                                                            <dt>Work being carried out by</dt>
                                                            <dd>Private contractor</dd>
                                                            <dd> </dd>
                                                            <dt>Estimated delay</dt>
                                                            <dd>Up to 5 minutes</dd>
                                                        </dl>
                                                    </td>
                                                    <td class=" "> <span class="sortOrder"></span> Tue, 29 May 2018 09:30 </td>
                                                    <td class=" "> <span class="sortOrder"></span> Fri, 29 Jun 2018 15:30 </td>
                                                    <td class="  sorting_1"> <span class="sortOrder"></span> Thu, 07 Jun 2018 14:44 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="dataTables_info" id="roadworkTable_info">Showing 1 to 139 of 139 entries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                </div>
                <div class="tab-pane " id="roadmap">
                    <img src="images/roadwork_map_example.png" style="max-width:100%;min-width:100%; min-height:100%; max-height:100%"/>
                </div>
            </div>
        </div>
    </div>
</div>