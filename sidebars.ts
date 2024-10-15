import type {SidebarsConfig} from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
    urop: [
        {
            type: "category",
            label: "UROP Resources",
            collapsed: false,
            collapsible: true,
            link: {
                type: "generated-index",
                title: "UROP Resources",
                description: "The Undergraduate Research Opportunities Program (UROP) makes it possible for students to apply for funding. It is required for all URL projects to apply for UROP funding.",
                slug: "/urop/",
            },
            items: ["urop/statements"]
        }
    ]
}

export default sidebars;
