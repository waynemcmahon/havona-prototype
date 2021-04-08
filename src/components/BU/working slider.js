import React, { useState, useRef, Component } from 'react';
import $ from 'jquery';

class Deck extends React.Component{
  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log("testing");
    function detect_active (){
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
      }
      $("#dp-next").on("click", function () {
          
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
      });
    
      $("#dp-prev").on("click",function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
    
        detect_active();
      });
    
      $("#dp-dots li").on("click",function () {
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr("data-class");
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]")
          .hide()
          .prependTo("#dp-slider")
          .fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
      });
    
      $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
        var get_slide = $(this).attr("data-class");
        $("#dp-slider .dp_item[data-class=" + get_slide + "]")
          .hide()
          .prependTo("#dp-slider")
          .fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
    
        detect_active();
      });
  }

  
render(){
  return (
<div>
<div id="slider">
  <div className="dp-wrap">
    <div id="dp-slider">

      <div className="dp_item" data-class="1" data-position="1">
        <div className="dp-content">

          <h2>Dirlis Ertugrul</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
          <a href="#" className="site-btn">Read More…</a>
        </div>
        <div className="dp-img">
          <img className="img-fluid" src="https://i.postimg.cc/rpTXWBb0/MV5-BOTQ0-NDY0-Y2-Mt-MTdi-Yi00-Zjgz-LWJj-Nm-It-Nz-Yw-Y2-Nk-Zjll-Ym-I1-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg" alt="investing"/>
        </div>
      </div>

      <div className="dp_item" data-class="2" data-position="2">
        <div className="dp-content">
          <h2>Dirlis Ertugrul</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
          <a href="#" className="site-btn">Read More…</a>
        </div>
        <div className="dp-img">
          <img className="img-fluid" src="https://i.postimg.cc/pVsWvLS0/ffbd73fd0e5e40a8443e11c9d2b29d5d.jpg" alt="investing"/>
        </div>
      </div>

      <div className="dp_item" data-class="3" data-position="3">
        <div className="dp-content">

          <h2>Dirlis Ertugrul</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
          <a href="#" className="site-btn">Read More…</a>
        </div>
        <div className="dp-img">
          <img className="img-fluid" src="https://i.postimg.cc/tgFRGt0P/MV5-BMGM2-Zm-E4-Yz-Mt-OTBm-NS00-Nm-E4-LWI4-NTUt-Mjg3-ZTJj-ZDYw-ZTc5-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg" alt="investing"/>
        </div>
      </div>

      <div className="dp_item" data-class="4" data-position="4">
        <div className="dp-content">

          <h2>Dirlis Ertugrul</h2>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
          <a href="#" className="site-btn">Read More…</a>
        </div>
        <div className="dp-img">
          <img className="img-fluid" src="https://i.postimg.cc/wv6zKCQ8/MV5-BNj-I4-Yj-Jl-ZTct-Mj-U5-NS00-MGFh-LWFk-Zjgt-OTlj-N2-Y4-Nz-I1-Mj-A4-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg" alt="investing"/>
        </div>
      </div>
    </div>

    <span id="dp-next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
        <defs>
        </defs>
        <path id="Rectangle_4_Copy" data-name="Rectangle 4 Copy" className="cls-1" d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)" />
      </svg>
    </span>

    <span id="dp-prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
        <defs>
        </defs>
        <path id="Rectangle_4_Copy" data-name="Rectangle 4 Copy" className="cls-1" d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)" />
      </svg>
    </span>

    <ul id="dp-dots">
      <li data-class="1" className="active"></li>
      <li data-class="2"></li>
      <li data-class="3"></li>
      <li data-class="4"></li>
    </ul>
  </div>
</div>
</div>
  )
}
}

export default Deck;
