import type { ProjectRecord } from "@/types/project";

const verificationLabels = {
  unverified: "Draft · Unverified",
} satisfies Record<ProjectRecord["verificationStatus"], string>;

export function ProjectStatus({ status }: { status: ProjectRecord["verificationStatus"] }) {
  return <span className="draft-badge">{verificationLabels[status]}</span>;
}
