const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    unity: {
        template: "./graph-fp01.html",
        title: "Home",
        description: "This is the home page",
    },
    about: {
        template: "/templates/about.html",
        title: "",
        description: "This is the about page",
    },
    contact: {
        template: "/templates/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    const content = document.getElementById("content")
    // content.innerHTML = html;
    $(content).html(html);
    // const script = document.createElement("script")
    // script.setAttribute("type", "text/javascript");
    // script.setAttribute("src", "graph-fp01.js");
    // content.appendChild(script);
    

    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};