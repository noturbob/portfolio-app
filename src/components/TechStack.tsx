import { Row, Tag } from "@once-ui-system/core";

interface TechStackProps extends React.ComponentProps<typeof Row> {
  stack: { name: string; icon?: string }[];
  size?: "s" | "m" | "l";
}

export const TechStack: React.FC<TechStackProps> = ({ stack, size = "m", ...flex }) => {
  if (!stack?.length) return null;
  return (
    <Row wrap gap="8" {...flex}>
      {stack.map((tech) => (
        <Tag key={tech.name} size={size} prefixIcon={tech.icon}>
          {tech.name}
        </Tag>
      ))}
    </Row>
  );
};
