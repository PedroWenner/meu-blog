export type SkillId =
  | ".net"
  | "csharp"
  | "aspnet"
  | "efcore"
  | "sqlserver"
  | "postgres"
  | "mongodb"
  | "redis"
  | "docker"
  | "k8s"
  | "node"
  | "nestjs"
  | "prisma"
  | "react"
  | "ts"
  | "js"
  | "html"
  | "css"
  | "mui"
  | "vite"
  | "zod"
  | "webpack"
  | "flutter"
  | "dart"
  | "reactnative"
  | "git"
  | "github"
  | "gitlab"
  | "azdevops"
  | "aws"
  | "linux"
  | "bash"
  | "n8n"
  | "advpl"
  | "php"
  | "angular"
  | "vue"
  | "laravel";

export interface SkillGroup {
  id: "backend" | "frontend" | "mobile" | "devops";
  items: SkillId[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    items: [
      ".net",
      "csharp",
      "aspnet",
      "efcore",
      "sqlserver",
      "postgres",
      // "mongodb",
      // "redis",
      "docker",
      // "k8s",
      "node",
      "php",
      "laravel",
      // "nestjs",
      // "prisma",
    ],
  },
  {
    id: "frontend",
    items: [
      "react",
      "ts",
      "js",
      "html",
      // "zod",
      "css",
      "mui",
      "vite",
      "angular",
      "vue",
      // "webpack",
    ],
  },
  // {
  //   id: "mobile",
  //   items: ["flutter", "dart", "reactnative"],
  // },
  {
    id: "devops",
    items: [
      "git",
      "github",
      "gitlab",
      "azdevops",
      "aws",
      "linux",
      "bash",
      // "n8n",
      // "advpl",
    ],
  },
];
