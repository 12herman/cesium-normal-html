import {
  accessToken,
  targetLocation,
  latitude,
  longitude,
} from "./CesiumConfig.js";
Cesium.Ion.defaultAccessToken = accessToken;

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo(targetLocation);

// Add 100 windmill models to the scene at random locations around the target location.
const modelHeight = 150;
async function loadModel() {
  const resource = await Cesium.IonResource.fromAssetId(3318741);
  const windmills = [];

  for (let i = 0; i < 100; i++) {
    const latOffset = (Math.random() - 0.5) * 0.1;
    const lonOffset = (Math.random() - 0.5) * 0.1;

    const entity = viewer.entities.add({
      name: `Windmill ${i + 1}`,
      position: Cesium.Cartesian3.fromDegrees(
        latitude + latOffset,
        longitude + lonOffset,
        0.0
      ),
      model: {
        uri: resource,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        scale: 100.0,
        minimumPixelSize: 0,
      },
      label: {
        text: `Windmill ${i + 1}`,
        scaleByDistance: new Cesium.NearFarScalar(100.0, 1.0, 10000.0, 0.0),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -modelHeight), // Push label up
        fillColor: Cesium.Color.LIME,
        showBackground: true,
        heightReference: Cesium.HeightReference.NONE,
      },
    });
    windmills.push(entity);
  }
}

loadModel();
