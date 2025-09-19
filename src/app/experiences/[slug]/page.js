import { experiences } from "@/app/data";
import { notFound } from "next/navigation";
import ColabInternshipDetails from "@/app/components/ColabInternshipDetails";
import KhemsafeInternshipDetails from "@/app/components/KhemsafeInternshipDetails";

export default function ExperienceDetail({ params }) {
  const experience = experiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    notFound();
  }

  if (experience.slug === "colab-innovation-campus") {
    return <ColabInternshipDetails experience={experience} />;
  }
  if (experience.slug === "khemsafe-computers") {
    return <KhemsafeInternshipDetails experience={experience} />;
  }
}

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}
