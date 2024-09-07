import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

function BoxContainer({ children, title }: Props) {
  return (
    <section className="login-page-form border border-primary border-1 rounded px-5 py-5">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default BoxContainer;
