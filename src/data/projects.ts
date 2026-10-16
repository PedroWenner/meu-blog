import toolsharpImage from "@/assets/projects/toolsharp.png";

export interface ProjectLink {
    type: "github" | "nuget" | "live";
    href: string;
}

export interface Project {
    id: string;
    slug: string;
    titleKey: string;
    descKey: string;
    aboutKey: string;
    featuresKeys: string[];
    image: string;
    techs: string[];
    links: ProjectLink[];
}

export const projects: Project[] = [
    {
        id: "p1",
        slug: "toolsharp",
        titleKey: "projects.items.toolsharp.title",
        descKey: "projects.items.toolsharp.desc",
        aboutKey: "projects.items.toolsharp.about",
        featuresKeys: [
            "projects.items.toolsharp.features.0",
            "projects.items.toolsharp.features.1",
            "projects.items.toolsharp.features.2",
            "projects.items.toolsharp.features.3"
        ],
        image: toolsharpImage,
        techs: ["C#", ".NET", "NuGet", "Async/Await"],
        links: [
            { type: "github", href: "https://github.com/seuuser/toolsharp" },
            { type: "nuget", href: "https://www.nuget.org/packages/ToolSharp" }
        ]
    }
];

export function getProjectBySlug(slug: string) {
    return projects.find(p => p.slug === slug);
}
