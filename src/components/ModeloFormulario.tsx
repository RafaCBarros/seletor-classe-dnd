import { ReactNode } from "react"

type FormWrapperProps = {
  title: string,
  children: ReactNode
}

export function ModeloFormulario( {title, children} : FormWrapperProps) {
  return <>
    <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem", color: "#ccc"}}>
      {title}
    </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(250px, 600px)",
          color: "#eee"
        }}
      >
      {children}
    </div>
  </>
}