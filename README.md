# Hyped

Easily display your most recent loved songs from The Hype Machine - [hypem.com](http://hypem.com). 

##### Click [here](demo.html) to see a demo.

![Screenshot](images/screenshot.png)

## Installation

#### via [Bower](http://bower.io)

    $ bower install hyped

#### Manually

Make sure to inclue both `jQuery` and `jquery.hyped.js`

    <script src="path.to.jQuery"></script>
    <script src="path.to.jquery.hyped.js"></script>

## Options

- `username` : `string` Your Hypem username - ***Required***
- `count` : `integer` Number of songs to return - **Default**: `5`
- `artwork` : `boolean` Display album artwork - **Default** : `true`
- `thumbSize` : `string` What size album artwork to show - **Default** : `medium`
    - `small` : 50x50 px
    - `medium` : 120x120 px
    - `large` : 320x320 px
- `linked` : `boolean` Wrap song info in a clickable link - **Default** : `false`
- `loveCount` : `boolean` Display track love count - **Default** : `false`


## Example

HTML

    <div class="hyped">
    	// Optional loading message / spinner
    	<div class="loading"></div>
    </div>

JavaScript

    $(".hyped").hyped({
        username : "stursby",
        linked : true,
        count : 5,
        loveCount : true
    });
   

## License

Hyped is licensed [MIT](http://opensource.org/licenses/MIT)

* * *

Copyright (c) 2013 Charlie Hield

