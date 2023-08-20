// captureImagePopup


// function takeSnapshot() {
// function populateContentArtistSnapshotPage () {
//     const liveStreamVideo = document.querySelector('#liveStream');

//     const stopStream = () => {
//         const videoStream = liveStreamVideo.srcObject;
//         if (!videoStream) {
//             return;
//         }

//         const allTracks = videoStream.getTracks();
//         allTracks.forEach(track => track.stop());
//     }

//     const captureStreamCanvas = document.querySelector('#captureStream');
//     const captureImageBtn = document.querySelector('#captureImageButton');
//     const capturedImageImg = document.querySelector('#capturedImage');

//     const stopStreamBtn = document.querySelector('#stopStreamButton');
//     stopStreamBtn.addEventListener('click', stopStream);

//     navigator.mediaDevices.getUserMedia({
//         video: {
//             facingMode: { ideal: 'environment' }
//         }
//     }).then(stream => {
//         liveStreamVideo.srcObject = stream;
//     }).catch(err => {
//         console.log(err);
//     });

//     liveStreamVideo.addEventListener('canplay', () => {
//         captureStreamCanvas.width = liveStreamVideo.videoWidth;
//         captureStreamCanvas.height = liveStreamVideo.videoHeight;
//     })

//     captureImageBtn.addEventListener('click', () => {
//         const ctx = captureStreamCanvas.getContext('2d');
//         ctx.drawImage(liveStreamVideo, 0, 0);

//         const binaryImage = captureStreamCanvas.toDataURL('image/png');
//         capturedImageImg.src = binaryImage;

        // TODO: Store binaryImage within the image attribute of the new/editted item
        // and store the whole object within the session-saved stored items array.
        // Show the binaryImage within the add/edit item form by using the img#src property.
//     });
// };

