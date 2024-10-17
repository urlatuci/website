import type {SidebarsConfig} from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
    default: ["proposals", "urop/README"],
    urop: [
        {
            type: "category",
            label: "Research Experience Fellowship",
            collapsed: false,
            collapsible: true,
            link: {
                type: "generated-index",
                title: "UROP REF Resources",
                description: "Resources for the UROP Research Experience Fellowship.",
                slug: "/urop/ref/"
            },
            items: ["urop/ref/statements"]
        }
    ]
}

export default sidebars;
