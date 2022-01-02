export const snippets = {
  button: {
    rust: `use gtk::{Button};let button = Button::builder().label("Press me!").margin_top(12).margin_bottom(12).margin_start(12).margin_end(12).build(); `,
    c: "gtk c code here",
    javascript: "gtk javascript here",
    cplusplus: "gtk c++ code here",
    python: ` import gi
    gi.require_version("Gtk", "4.0")
    from gi.repository import Gtk


    btn = Gtk.Button(label="Hello, World!") `,
  },
};
