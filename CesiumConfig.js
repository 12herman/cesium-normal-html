const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYjJiMjNmMy00OWZkLTQyZjAtYjAyMi02Mjg4YThlMzgwMWYiLCJpZCI6Mjk1NDMwLCJpYXQiOjE3NDUwNTg3MjF9.I0seXOCpn4EfzyiTx41KWtgd4t0MIrE_JaUv68-lLoA";
// jsw windmill location
const latitude =  78.09464832058404;
const longitude = 9.076422597557329;
const targetLocation = {
  destination: Cesium.Cartesian3.fromDegrees(latitude, longitude, 400),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0),
  },
};

const url = {
  windmillGlb: "./glbData/windmill.glb",
};

export { accessToken, targetLocation, url, latitude, longitude };
