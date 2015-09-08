L.Icon.Pulse = L.DivIcon.extend({

    options: {
        className: '',
        iconSize: [12,12],
        color: 'red'
    },

    initialize: function (options) {
        L.setOptions(this,options);

        // creating unique class name
        var uniqueClassName = 'lpi-'+ new Date().getTime()+'-'+Math.round(Math.random()*100000);

        this.options.className = this.options.className+' leaflet-pulsing-icon '+uniqueClassName;

        // prepare styles
        var css = '.'+uniqueClassName+'{background-color:'+this.options.color+';}';
            css += '.'+uniqueClassName+':after{box-shadow: 0 0 6px 2px '+this.options.color+';}';

        // CREATE STYLE ELEMENT
        var styleEl=document.createElement('style');
        if (styleEl.styleSheet)
            styleEl.styleSheet.cssText=css;
        else
            styleEl.appendChild(document.createTextNode(css));

        // appending style element to document
        document.getElementsByTagName('head')[0].appendChild(styleEl);

        // initialize icon
        L.DivIcon.prototype.initialize.call(this,options);
    }
});

L.icon.pulse = function (options) {
    return new L.Icon.Pulse(options);
};