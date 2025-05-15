import { title } from "framer-motion/client"

export default {
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",

        },
        {
            name: "github",
            title: "GitHub",
            type: "string",
        },
        {
            name: "demo",
            title: "Demo",
            type: "string",
        },
        {
            name:"skills",
            title: "Skills",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options:{
                hotspot: true
            }
        }
    ]
}

