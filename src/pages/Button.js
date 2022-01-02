import react, { useState, useEffect, useContext } from "react";
import { storeContext } from "../components/AppStoreProvider";
import { snippets } from "../components/snippets";


import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";


export function GtkButton(props) {
  const { store } = useContext(storeContext);


  useEffect(function () {

        Prism.highlightAll();

  },[])


  useEffect(function () {
    // var editor = window.ace.edit("editor1");
    // editor.setTheme("ace/theme/monokai");
    // editor.session.setMode("ace/mode/" + store.language);
    // editor.setOptions({
    //   highlightActiveLine: false,
    //   highlightSelectedWord: true,
    //   fontSize: 16,
    //   readOnly: true,
    //   showPrintMargin: false,
    //   highlightGutterLine: false,
    // });
    // editor.renderer.$cursorLayer.element.style.display = "none";
    // var beautify = window.ace.require("ace/ext/beautify");
    // beautify.beautify(editor.session);
  }, []);

  function handleCopy() {
    alert("copied the code");
  }

  return (
    <div className="GtkButton" style={{ textAlign: "center", width: "100%" }}>
      <h2>Gtk button</h2>

      <div
        style={{
          width: "80%",
          height: "10rem",
          borderRadius: 5,
        }}>


        <pre className="line-numbers">
          <code className="language-rust">
            {snippets.button[store.language]}
          </code>
        </pre>




      </div>
      <h3> Styling Button </h3>
      <p> Add description to add the Styling </p>
      <h3> Connecting Signals/Events </h3>
      <p> Add description to connect the signals and events such as click, hover </p>


    </div>
  );
}
