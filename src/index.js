// require('spectre.css')
require('../assets/style.styl')
window.initialize = function () {
  const $rawImg = document.querySelector('#image-raw')
  $rawImg.crossOrigin = ''
  
  /**
   * Setup Google Street View
   */
  const pano = window.pano = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
    position: {lat: 37.869260, lng: -122.254811},
    pov: {heading: 165, pitch: 0},
    zoom: 1
  })

  /**
   * Set a new image based on the pano change
   */
  pano.addListener('pano_changed', function() {inferOnPano()})
  pano.addListener('position_changed', function() {inferOnPano()})
  pano.addListener('pov_changed', function() {inferOnPano()})

  /**
   * Triggers a new inference
   */
  const inferOnPano = function () {
    const pov = pano.getPov()
    const pos = pano.getPosition()
    $rawImg.src = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${pos.lat()},${pos.lng()}&fov=90&heading=${pov.heading}&pitch=${pov.pitch}&key=AIzaSyCr2mKyJiFfXxLE6MYx6b-svg7oQEfw0u4`
    console.log($rawImg.src)
  }
}