import React from "react";
import { useState } from "react";
import Compressor from "compressorjs";
import { getBase64 } from "../../utils/base64";

const style = {
  marginTop: "130px",
  padding: "50px",
};

let array_cu_paragrafe = [];
let paragrafe_api = [];

function AddPost() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [paragrafe, setPagrafe] = useState([
    {
      text: "",
      poza: "",
      ok: "",
    },
  ]);

  const addP = () => {};

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="image"
        onChange={(e) => {
          let file = e.target.files[0];
          new Compressor(file, {
            quality: 0.6,
            success: (compressedResult) => {
              getBase64(compressedResult, (r) => {
                setCover(r);
              });
            },
          });
        }}
      />
      <br />
      <br />
      {array_cu_paragrafe &&
        array_cu_paragrafe.map((paragraf, index) => {
          return (
            <div className="paragrag">
              <textarea onChange={(e) => {}}></textarea>
              <input type="image" />
            </div>
          );
        })}

      <button onClick={addP}>Adauga paragraf</button>
    </div>
  );
}

export default AddPost;

// onChange={(e) => {
//     let file = e.target.files[0];
//     new Compressor(file, {
//       quality: 0.6,
//       success: (compressedResult) => {
//         getBase64(compressedResult, (r) => {
//           setScrisoare(r);
//         });
//       },
//     });
//   }}
