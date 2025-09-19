import { projects } from "@/app/data";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/app/components/ProjectDetailClient";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
