'use strict';

const e = React.createElement;

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page === "Home")
            return (
                e('div', { className: "infoBox" },
                    e("img", { src: "./src/CDO.jpg", className: "photoIcon" }),
                    e("p", {}, "Frontend Software Engineer"),
                    e("p", {}, "Specialist expertise in cryptoassets, blockchain and AI"),
                    e("p", {}, "PhD in Computer Science"),
                    e("p", {},
                        e("p", {}, "Email: apburnie@hotmail.co.uk"),
                        e("p", {},
                            e("img", { src: "./src/LI-In-Bug.resized.png", className: "LDIcon" }),
                            e("a", { href: "https://www.linkedin.com/in/apburnie/", target: "_blank" }, "https://www.linkedin.com/in/apburnie/")
                        ),


                    ),
                    e("p", {}, "Click on a button below to find out more")
                )

            );

        if (this.props.page === "Skills")
            return (
                e('div', { className: "infoBox" },
                    e("h2", {}, "Skills"),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Frontend:"),
                        e("span", { className: "skillItem" }, "JavaScript, TypeScript, HTML, CSS, SCSS,"),
                        e("span", { className: "skillItem" }, "Vue, React and Node.js")
                    ),

                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Cryptoassets and Blockchain:"),
                        e("span", { className: "skillItem" }, "PhD and 6 publications"),
                    ),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Cloud Computing and APIs:"),
                        e("span", { className: "skillItem" }, "AWS, Azure, JSON, Postman and curl"),
                    ),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Backend:"),
                        e("span", { className: "skillItem" }, "Python, Serverless Computing and Databases (SQL and NoSQL)"),
                    ),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Best Practices:"),
                        e("span", { className: "skillItem" }, "5+ years' experience in Agile and TDD"),
                    ),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Mathematics and Machine Learning"),
                    ),


                )
            );

        if (this.props.page === "Current Projects")
            return (
                e('div', { className: "infoBox" },
                    e("h2", {}, "Current Projects"),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Mattereum Frontend Engineer"),
                        e("span", { className: "skillItem" }, "(May 2021-):"),
                        e("span", { className: "skillItem" }, "Creating, deploying, maintaining and continually improving software and tools to support the Ontology Team in creating, validating and publishing Physical Asset NFTs that meet customer requirements.")
                    ),
                    e("div", { className: "skillBox" },
                        e("span", { className: "skillGroup" }, "Wluper Fullstack Engineer and Solution Architect"),
                        e("span", { className: "skillItem" }, "(February 2021-):"),
                        e("span", { className: "skillItem" }, "Created and continually improving the Conversational AI Assistant UI and tools to support customers on Desktop, iPhones and Android smartphones")
                    ),
                )
            );

        if (this.props.page === "Resume")
            return (
                e('div', { className: "infoBox" },
                    e("h2", {}, "Resume"),
                    e("div", {},
                        e("iframe", { className: "pubItem", src: "./src/AndrewBurnieCV.pdf", width: "100%", height: "480vh" },
                        )
                    ),
                )
            );
    }
}

class NavButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'button',
            {
                onClick: () => {
                    ReactDOM.render(
                        e(Info, { page: this.props.page }),
                        document.getElementById('info')
                    )

                }
            },
            this.props.page
        );

    }
}

ReactDOM.render(
    e(Info, { page: "Home" }),
    document.getElementById('info')
)


document.querySelectorAll('.navBtn')
    .forEach(domContainer => {
        ReactDOM.render(
            e(NavButton, { page: domContainer.dataset.page }),
            domContainer
        );
    });
