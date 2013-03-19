#jquery.removeClassWithPrefix

Simple jQuery plugin to remove css classes based on a prefix.

* * *

###Usage

```javascript
$('#module1').removeClassWithPrefix('bg-');
```

####Original HTML
```html
<div id='module1' class='bg-module1 module'>My Module</div>
```

####Result
```html
<div id='module1' class='module'>My Module</div>
```

### Bower installation

    bower install jquery.removeClassWithPrefix