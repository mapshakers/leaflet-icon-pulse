leaflet-pulse-icon
=====================
<div style="text-align:center" align="center">
  <img src="http://filipzava.github.io/leaflet-pulse-marker/leaflet-pulse-marker.png" alt="leaflet-pulse-marker" />
</div>
A very simple [Leaflet](http://leafletjs.com) plugin provides pulsing icon.

*Requires Leaflet 0.7.0 or newer and modern browser*

## Demo
~~[Check out demo!](http://filipzava.github.io/leaflet-pulse-marker)~~
## Using the plugin
#### Add the JavaScript and CSS files

Include the CSS and JavaScript files located in \dist folder.

```html
<script src="src/L.Icon.Pulse.js" />
<link rel="stylesheet" href="src/L.Icon.Pulse.css" />
```
See the included examples for usage.

### Usage
Create a new L.Icon.Pulse

```javascript
var pulsingIcon = L.icon.pulse({size:[20,20],color:'red'});
var marker = new L.marker([50,15],{icon: pulsingIcon}).addTo(map);
```
### Options
| Property        | Description            | Default Value | Possible  values         |
| --------------- | ---------------------- | ------------- | ------------------------ |
| color           | Color of icon.         | 'red'         | any CSS color            |
| iconSize        | Size of L.divIcon      | [12,12]       | <Point> [width,height]   |


## License
**leaflet-pulse-icon** is free software, and may be redistributed under the MIT-LICENSE.

