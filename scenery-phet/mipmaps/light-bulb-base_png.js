/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const mipmaps = [
  {
    "width": 89,
    "height": 71,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 45,
    "height": 36,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAkCAYAAAAdFbNSAAAAAklEQVR4AewaftIAAAUGSURBVLXBzYtkVx3H4c85de+trmqZxbTj2MFYmkB0MWF8Wbk1C8FZjDtduPBPMBiFATOjf4ALwV0WvdZFY4GgY4QgIi4k2CK4jFSgq2YG20m/1D33nHPP72s3TCAEM4zVN8/jfv+7+3948OjhKzlnhuK95z9HR3/7wWuvfYWPQTWdTl+ZTib0dc2QnHNfvnHj5d8cHR29sVot5wyoGo8bptMppe8Zisxo6pqc0y1Jt3Z3dxcSB865vdVqOeeSqvF4i+lkSimFoZTS09Q1DscFiRkwk3R7d3d3IXHgnNtbrZZzNlBtbY3Z3t7GrDCUnDNN0+Ccw3nHh8ycYwbc3n3uuQVw4JzbWx4eznlG1dZkQu57ZMZQYko0TcOoGlGNRjzFDJgBt5//7PML4MA5t/fu4t05T1FtTSYIMDOGMgqBpmkYj8eMt8Y8oxkwA26/9IWXFm/ef/NXs8/NfsT/UE0mE+qqRoihjEYjmqZh5+pVxuMxG5htf2L7h0f/PvqqZN/95LVrKz6gmk4maEsMStCMG67u7DDd3mYTV65cwcy+3nXdnx4+fPjt69evv80TlfMex7D8yOOd59q1a+Sc2URd11xwzr2YUvr1v95551uff+GFtzlXcU4mhiQJSezs7FDMuIy6rmma5jOnpl/+4+8HN16++aXOS0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCEhec93jv8d7jvcd7j/ce7z3ee7z3eO/x3uO9x3uP9x7vPe9zzlHXNd67F830C85VkpDEkCQhCZlhZlyW9x7vPaX0tzhXScJMDEkmLpgZZsZlyQwzYaZP//Gtt75RcU4SIIYihCTMhBXjMiSRc6aUHjOj7/tblUkIIYmhSCDBe+89JufMZfR9TxcjOSX6vqf05YuVJGRCDEcyQCwPD2lDYBOlFKwU2rYltIGUEjln+j5TIZCEEEORhBAPHj7g5OSUTZwcH2NmhBAI7Zqu60gpkXOmkoRkSAxGEgjaNnC6PmUTx8fHmBkxRkLb0nWRFCMxJaqUIjEmJDGUEAI5ZySBsZHTkxMkkXKmC4EuBGKMpJSpQttytl5jJobShZaYEpIQYhNnZ2dIIueeGDtCFwgxElN8XLVty+nJCVYKQ0k5k2JEEoiNnJ2tkYxSCilGQhfpuo6c82+rEALrszNKKQyl9D0xRpDYVLs+QxJ9KaSciV0kxri2YvOqC4F2vabve4ZiZqSUMIQQmzhrWyRRipFzJqVIzvkv33/11cdV13Ws12v6vmdIKSdkQmIj63XLhVIKfd+Tc3psZj/hXBW7jrZt6XNmKM45UkxIYlMhtEhgVuhL6c3sp3fu3Pkz56oYO0II5JwZih95Us5IAolNrEPggpmtJf3s7uuv/5wnqhgTIQRSygylqkbklJAJSWyi73vOPQJ+fO/u3Tf4gCrFSAiBlBJDqeuGnDMmIbEZ6a849717d+/+kw+pYkp0XUdKiaGUUkgpIYQQz8o5txAcONi7d+/enI9QxRgJIZBSYihWCjn3YAYST+OcW0g6cM7tLQ8P5zyDKqdEFyMpJYYiIPcZEx/BLUAHzrm95XI55/9UpZSIMZJiYigOyDmDhMQTbuGcDsDtrVbLOZdQpZyIMRJjZCjOO3Lf47xbOMcBuL3VajlnIFUI3aOY0qdiSgzFj0bI7PHNmze/tr+/v2Jg1fHx8Tdzzt9JOTOUuq4ZjUb39/f3V3wM/gvu9pOc33egzAAAAABJRU5ErkJggg=="
  },
  {
    "width": 23,
    "height": 18,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAYAAACw50UTAAAAAklEQVR4AewaftIAAAI6SURBVI3BP08TYRzA8e9zfSoUMZaTGk1YxLix9AW4GFfj5OjG6iaj9kU4EI1/4uAL0Li4SByYsGu7ICY2lBNoe0fvuD8Pz+8REwcScxyfj/r08WMYRtFVKihge3v768tXr58EwbDHBehrvn/1Ur1OFSeObti9B65748bNPrhN8NaDYNijhPZ9n0ajQRVrLY3GLLWaNwu0gTawurS01EexqZRaH/wa9DhDL16/jjGGKsYY5ufnabVanDELtIG2Umq1+737xVPq8WKrNeWU9hcWuIg8z2kuNFlZWaHErO/7D5Mk+fZzZ+fBreXlXQ0Kh6OKA+bmLrN8+zZlarUaMzMzbXti3wP3tRUBHFVEBCeCiHAez/Mwprj7bWPjjhYnOBGqWBGMOSGeTjlPURTkRXGpyItHWkQQcVQREY6mEVtbW5RJ4pjxeEwSx2RZekWbwmCtpUpR5BR5wWB3QJnBYEASxxxFR8RJgj7Y/02aZlSx9oQ0TXHiKBPs7ZFlGZMwJDlOfujDgwOm0ylVnAjHx8fgKLW/v09eGJI4HltrP+jxaEQ4mXARWZYizlHm4HCEMcZZe/L26dpaqsMw5HA0oopSijTNwDnKTKKwcM69ef7s2RqndBRFjMdjqnieR5ZliDj+o8hA9cXad51O5wX/6CiKmEwmVKnVauR5jnPCX0qpDOgDmwq1Phzu9jqdDmfpOI6JoiOqaK0pjMlA9YFN59R6EAx7nEOHUbQxTeImFer1Os1m83MQ7D3ngv4Ac2pI7uiVhAwAAAAASUVORK5CYII="
  },
  {
    "width": 12,
    "height": 9,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAAAklEQVR4AewaftIAAAEeSURBVF3BvU7CUBgG4Lf0S6iLEiIzBCdmjEwmJg5yBcYBxw7uOBvj4A24yB1oHEzQaOPi7shQqQNahZYajP2hpH/nyNLkxOeR7vr9JIoiguDbcdyT07MHSeJXtm3fQkCNRoOyLINI1/W1Umn1AMB+uVx+V1X1+bDTOVqvVGKq1mr4zw8C7LXbWCoAqG+1WnWZaAPADqVZBnAOEWcMSrGInCzLWITh9tOjtktxFINzDtE8nEPTNOQ2m03IQMHz3CoZw1ckcQKR+WFi9jNDzjAMpEmaBPNgQENdxyIMIbKnUzDGkTM/v5iirNx0j7svNBqN4Ps+RJ7vg2UMS54kYWC8Gfe93uU5lmg8mYw91yMIGGe/nPNrQLqwbcuxLAu5P9DMjar/PEanAAAAAElFTkSuQmCC"
  },
  {
    "width": 6,
    "height": 5,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAklEQVR4AewaftIAAACGSURBVAF9AIL/AcfGxv7+/v4B8fHx/G5vb9E2NjbAkpGRdwQzNDQBAAAAAOrq6gROTk4zMDExM/v8/BoE5OPkAP///wDs7OsAtLW0AP///wAWExQYBLKwrwD6+voA9/f3APPy9PzT09PbGxobmgTS0tOo+fn5Av////r9/f6ivLy8u7y8vAClqki1OMqVqwAAAABJRU5ErkJggg=="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = simLauncher.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;