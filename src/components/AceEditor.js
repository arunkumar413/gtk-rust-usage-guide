import react, { useState, useEffect } from "react";

export default function AceEditor() {
  const code = `let button = Button::builder().label("Press me!").margin_top(12).margin_bottom(12).margin_start(12).margin_end(12).build(); `;


useEffect(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

},[])


  return (
    <div className="AceEditor">
      <div id="editor">{code}</div>
    </div>
  );
}
