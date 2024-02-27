// function encodeAndDecodeMessages() {
//   let encodeArea = document.querySelectorAll("textarea")[0];
//   let decodeArea = document.querySelectorAll("textarea")[1];
//   let encodeBtn = document.querySelectorAll("button")[0];
//   let decodeBtn = document.querySelectorAll("button")[1];
//   encodeBtn.addEventListener("click", encoding);
//   decodeBtn.addEventListener("click", decoding);

//   function encoding(event) {
//     let decodedText = encodeArea.value;
//     let encodedText = "";

//     if (decodedText != "") {
//       for (let i = 0; i < decodedText.length; i++) {
//         let asciiCode = decodedText[i].charCodeAt();
//         asciiCode++;
//         encodedText += String.fromCharCode(asciiCode);
//       }
//       decodeArea.value = encodedText;
//       encodeArea.value = "";
//     }
//   }

//   function decoding(event) {
//     let encodedText = decodeArea.value;
//     let decodedText = "";

//     if (encodedText != "") {
//       for (let i = 0; i < encodedText.length; i++) {
//         let asciiCode = encodedText[i].charCodeAt();
//         asciiCode--;
//         decodedText += String.fromCharCode(asciiCode);
//       }
//       encodeArea.value = decodedText;
//       decodeArea.value = "";
//     }
//   }
// }

function encodeAndDecodeMessages() {
  const messageTextarea = document.querySelector("textarea");
  const receiverTextarea = document.querySelectorAll("textarea")[1];
  const encodeBtn = document.querySelector("button");
  const decodeBtn = document.querySelectorAll("button")[1];

  encodeBtn.addEventListener("click", () => {
    const message = messageTextarea.value;
    const encodedMessage = encode(message);
    receiverTextarea.value = encodedMessage;
    messageTextarea.value = "";
  });

  decodeBtn.addEventListener("click", () => {
    const encodedMessage = receiverTextarea.value;
    const decodedMessage = decode(encodedMessage);
    receiverTextarea.value = decodedMessage;
  });

  function encode(message) {
    return message
      .split("")
      .map((char) => {
        const encodedCharCode = char.charCodeAt(0) + 1;
        return String.fromCharCode(encodedCharCode);
      })
      .join("");
  }

  function decode(encodedMessage) {
    return encodedMessage
      .split("")
      .map((char) => {
        const decodedCharCode = char.charCodeAt(0) - 1;
        return String.fromCharCode(decodedCharCode);
      })
      .join("");
  }
}
