# simpleModalJS

A simple Modal Plugin for title, content and footer - with event target (document and window)

## Prerequisite

* JQuery 3.x (Smaller JQuery 3.x with JQuery Migrate)

## Example

```code
Default

$("#test").simpleModal();

Modify options - Simple

$("#test").simpleModal({
    title: "Impress",
    content: "Test Tester",
    footer: "(c) Copyright",
    radiusBorder: false,
    fontSize: "20px"
});

Modify options - Advanced

$("#test").simpleModal({
    title: "<div><h1>Impress</h1></div>",
    content: "<div><div>Test Tester</div><div>Way 1</div><div>...</div></div>",
    footer: "<div>(c) Copyright</div>",
    radiusBorder: "",
    fontSize: "20px"
});
```