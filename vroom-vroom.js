window.initialize = function () {
  const $rawImg = document.querySelector('#image-raw')
  // Allow us to use Google Street view data, which is considered external
  $rawImg.crossOrigin = ''

  // Semantic
  const $result = {
    semantic: document.querySelector('#result'),
    depth: document.querySelector('#result-depth')
  }
  
  /**
   * Setup Google Street View
   */
  const pano = window.pano = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
    position: {lat: 45.5124601, lng: -122.6618953},
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
  }
  
  /**
   * DEAL WITH IT 👊🏼
   * - Use the inferred data to give the agent some logic, like "driving" around or storing the data in cloud storage
   * - See the Google Street View API to learn how to "drive" the car: https://developers.google.com/maps/documentation/javascript/streetview
   */
  const inference = $rawImg.onload
  $rawImg.onload = function () {
    console.clear()
    inference()

    let data = {
      semantic: $result.semantic.getContext('2d').getImageData(0, 0, $result.semantic.width, $result.semantic.height),
      depth: $result.depth.getContext('2d').getImageData(0, 0, $result.semantic.width, $result.semantic.height)
    }
    
    console.log('Semantic Image:', data.semanticData)
    console.log('Depth:', data.depth)
    
    // Do things with the data here
  }
}