!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ReactYouku=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var ReactYouku = React.createClass({displayName: "ReactYouku",
  propTypes: {
    vid: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      width: '100%',
      height: '100%'    
    };
  },

  render: function() {
    var videoSrc = "http://player.youku.com/embed/" + this.props.vid;
    return (
        React.createElement("iframe", {
          src: videoSrc, 
          height: this.props.height, 
          width: this.props.width, 
          frameborder: "0", 
          allowfullscreen: true}
        )
    );

  }

});

module.exports = ReactYouku;

/**
 * 
 * 
 * function yo_d(v_i,th_is){yk_d("XO"+v_i,th_is);} 
 * 优酷
 * <iframe height="100%" width="100%" src="http://player.youku.com/embed/XODkwNDA4Mjk2" frameborder="0" allowfullscreen /> 
 * <embed type="application/x-shockwave-flash" src="http://static.youku.com/v/swf/loader.swf" width="100%" height="416" id="movie_player" name="movie_player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowscriptaccess="never" flashvars="flashvars=&amp;isShowRelatedVideo=false&amp;ShowId=0&amp;Cp=0&amp;Tid=0&amp;Type=Folder&amp;menu=false&amp;Ob=1&amp;winType=interior&amp;show_ce=0&amp;Version=/v1.0.0272&amp;isAutoPlay=true&amp;VideoIDS=XODA3Njc3MzY4" pluginspage="http://www.macromedia.com/go/getflashplayer">
 * 
 * function t_dp(v_i,th_is){t_hn(v_i,th_is);} 
 * 土豆
 * <iframe src="http://www.tudou.com/programs/view/html5embed.action?type=1&code=Gi6TvZC3A8I&lcode=nVWkBhTlLe0&resourceId=0_06_05_99" allowtransparency="true" allowfullscreen="true" scrolling="no" border="0" frameborder="0"></iframe>
 * 
 * function qp_b(v_i,th_is){qq_d(v_i,th_is);} 
 * QQ视频
 * <iframe frameborder=0 src="http://v.qq.com/iframe/player.html?vid=y0015ozyvon&tiny=0&auto=0" allowfullscreen></iframe>
 * 
 * function ai_y(v_i,th_is){ai_q(v_i,th_is);} 
 * 爱奇艺
 * <embed src="http://player.video.qiyi.com/37f68247a7205145244d1a02015113d6/0/0/v_19rro2vvz0.swf-albumId=347906800-tvId=347906800-isPurchase=0-cnId=7" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
 * <embed type="application/x-shockwave-flash" src="http://www.iqiyi.com/player/20140730103714/Player.swf" width="100%" height="420" id="player" name="player" bgcolor="#000000" quality="high" allowfullscreen="true" allowscriptaccess="never" allownetworking="internal" wmode="transparent" flashvars="definitionID=d25afedc309231bbb44cf4f5a0a2a2aa&amp;tvId=347575200&amp;menu=false&amp;autoplay=true&amp;cid=qc_100001_100100&amp;=undefined" pluginspage="http://www.macromedia.com/go/getflashplayer">
 * 
 * function sh_o3(v_i,th_is){so_h3(v_i,th_is);} 
 * 搜狐
 * <object width=1300 height=451><param name="movie" value="http://share.vrs.sohu.com/2237575/v.swf&topBar=1&autoplay=false&plid=8373574&pub_catecode=0&from=page"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="Transparent"></param><embed width=1300 height=451 wmode="Transparent" allowfullscreen="true" allowscriptaccess="always" quality="high" src="http://share.vrs.sohu.com/2237575/v.swf&topBar=1&autoplay=false&plid=8373574&pub_catecode=0&from=page" type="application/x-shockwave-flash"/></embed></object>
 */

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});