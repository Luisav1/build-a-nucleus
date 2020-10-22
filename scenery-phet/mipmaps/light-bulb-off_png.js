/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const mipmaps = [
  {
    "width": 108,
    "height": 189,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 54,
    "height": 95,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 27,
    "height": 48,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 14,
    "height": 24,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAAklEQVR4AewaftIAAAKcSURBVHXBwWqcZRTH4d855/1mYhJJ2hAxKF2K4g0IrnTvqh0y0YW9BzeidCV4C+JSUDohsQhuxYW40G7cutNQaKdKW1smyczke8/fSZzqMNjnMRYc3By8b27XDXsVYx2oiLup/AHsRq+/+ydzxtzBYP8rd+u5R+NumBkIJJGZ1Mzfpfyg1+/fYiaYORjsfxnh75UoESUId8Idd8fdMHPM2ES81bt69fbB14dHfjjYf9fNeu5ORBARlFIoTUMpDRFBRBAReMQL5vYJM0Vw3d077o67USJYWV2l2+kiifH4lMl4jBDuSaa9cTDYf7MYvOZumBnmTqfbZW1tjabpIIkIp9ZKZuLmuHlH1HcKZs8bhplhZpRSiAhKCSRR20JEYGZggHHupYI0FUISo+GQzekZnUuXiaYgic50yvThAyY7O7gHEghGBbiTqW138dz2NvfPzhhibG1tcXJ6wqlBc+UKRdDWFilB+sklfadMMpPMpDQN3W6H4fAeTx4/ptvpcK5mJTOR9Ftvr/+FY/axUkeZSa2VWiu1rUzGYwyjrZVaK1mTrImSATPe6++2QoeZIlNkJpnJZDrFw1GKrEkqkXTU29v9iBlnxrAbSEMQi0opnBNCEoJvmXNmru3tngp9L/EfM8yMpyQ9MviUOecp8ZmkKQIMalv5lwDx87X+7j3mnLneXv9HpF/FP8zAMDCQhNA3LHAWSPoFhGFcMC4IPej1+5+zwFlk3EZcMDMMY+4OS5wFFR8zY2asrKzgbpxzjzFLCguejI7fvnxpk/W1NV7ZeZGmNEQpjCfTl1niLKi18vDRX4xOxiTO+sYGK6urnLUty5xnkIQknsVZIGnC/5DUsqSwwMw+lHQ8mUxeH42ON0qJSdvWu8P7f9xkyd8hFVTEl4JTtgAAAABJRU5ErkJggg=="
  },
  {
    "width": 7,
    "height": 12,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAAAklEQVR4AewaftIAAAD5SURBVC3BPUoDURSG4fce7wjmDwSTVhQ3kwWEJJ1bsLd0B9qK2BlIFqCtlVsQJJWkdTIkxpk753MCeZ5AYz6bPZvZMITQk2tVuz+OJuO7MH+ZPcUsXmdZxpEZde2UVVWmVN3EYDaMMdLtdmm3OxTFGhXFsXs9jQF6nhKt7ZaWGeVmQ8FeOI0ufWN2taoqQp6DhLsj+dLkvkgpIRfrPKeua1JKOzkPBuHWXStJmBmSkPQxmo5fbTQdJ0nvAiSBQNKChrEnvQUghIDQz2gyuacRaax3f/RPWvQHA2LMEgeRRllWZ+vtL+eXFzSOOYg0JH0Bn2VZdcxsycE/j3OMbBG7jK0AAAAASUVORK5CYII="
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